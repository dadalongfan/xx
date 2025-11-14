import React, { useState, useEffect, useRef } from 'react'
import { Play, Pause, RotateCcw, Settings } from 'lucide-react'

const PhysicsAnimation = ({ type, title, description, controls = true }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [position, setPosition] = useState({ x: 50, y: 200 })
  const [velocity, setVelocity] = useState({ x: 2, y: 0 })
  const [forces, setForces] = useState({ gravity: 9.8, friction: 0.1 })

  // 动画类型配置
  const animationTypes = {
    freeFall: {
      title: '自由落体运动',
      description: '物体在重力作用下的垂直加速运动',
      initialValues: { x: 200, y: 50 },
      initialVelocity: { x: 0, y: 0 },
      forces: { gravity: 9.8, friction: 0 },
      updateFn: 'freeFall'
    },
    projectile: {
      title: '抛物运动',
      description: '物体在初速度和重力作用下的曲线运动',
      initialValues: { x: 50, y: 300 },
      initialVelocity: { x: 5, y: -10 },
      forces: { gravity: 9.8, friction: 0.01 },
      updateFn: 'projectile'
    },
    newtonFirst: {
      title: '牛顿第一定律',
      description: '静止或匀速直线运动的物体保持原有状态',
      initialValues: { x: 50, y: 200 },
      initialVelocity: { x: 3, y: 0 },
      forces: { gravity: 0, friction: 0 },
      updateFn: 'newtonFirst'
    },
    newtonSecond: {
      title: '牛顿第二定律',
      description: 'F = ma，加速度与力成正比',
      initialValues: { x: 50, y: 200 },
      initialVelocity: { x: 0, y: 0 },
      forces: { gravity: 0, friction: 0, appliedForce: 5 },
      updateFn: 'newtonSecond'
    },
    newtonThird: {
      title: '牛顿第三定律',
      description: '作用力与反作用力大小相等，方向相反',
      initialValues: { x: 150, y: 200 },
      initialVelocity: { x: 0, y: 0 },
      forces: { gravity: 0, friction: 0 },
      updateFn: 'newtonThird'
    }
  }

  const currentAnimation = animationTypes[type] || animationTypes.freeFall

  useEffect(() => {
    if (type && currentAnimation) {
      setPosition(currentAnimation.initialValues)
      setVelocity(currentAnimation.initialVelocity)
      setForces(prev => ({ ...prev, ...currentAnimation.forces }))
    }
  }, [type])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let frameCount = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 绘制背景网格
      drawGrid(ctx, canvas.width, canvas.height)

      // 更新物理状态
      if (isPlaying) {
        updatePhysics(frameCount)
        frameCount++
      }

      // 绘制物体和力
      drawPhysicsObjects(ctx, canvas.width, canvas.height)

      // 绘制信息面板
      drawInfoPanel(ctx)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, position, velocity, forces, speed])

  const updatePhysics = (frameCount) => {
    const dt = 0.016 * speed // 60fps，时间步长

    switch (currentAnimation.updateFn) {
      case 'freeFall':
        setVelocity(prev => ({
          ...prev,
          y: prev.y + forces.gravity * dt * 10
        }))
        setPosition(prev => ({
          ...prev,
          y: Math.min(prev.y + velocity.y * dt * 10, 350)
        }))
        break

      case 'projectile':
        setVelocity(prev => ({
          x: prev.x * (1 - forces.friction * dt),
          y: prev.y + forces.gravity * dt * 10
        }))
        setPosition(prev => ({
          x: prev.x + velocity.x * dt * 10,
          y: Math.min(prev.y + velocity.y * dt * 10, 350)
        }))
        break

      case 'newtonFirst':
        // 匀速直线运动，无外力
        setPosition(prev => ({
          x: (prev.x + velocity.x * dt * 10) % 400,
          y: prev.y
        }))
        break

      case 'newtonSecond':
        const acceleration = forces.appliedForce
        setVelocity(prev => ({
          x: Math.min(prev.x + acceleration * dt, 10)
        }))
        setPosition(prev => ({
          x: Math.min(prev.x + velocity.x * dt * 10, 350),
          y: prev.y
        }))
        break

      case 'newtonThird':
        // 两个物体相互作用
        break

      default:
        break
    }
  }

  const drawGrid = (ctx, width, height) => {
    ctx.strokeStyle = '#e5e7eb'
    ctx.lineWidth = 1

    for (let x = 0; x <= width; x += 50) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    for (let y = 0; y <= height; y += 50) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  const drawPhysicsObjects = (ctx, width, height) => {
    // 绘制物体
    ctx.fillStyle = '#3b82f6'
    ctx.strokeStyle = '#1e40af'
    ctx.lineWidth = 2

    if (type === 'newtonThird') {
      // 绘制两个相互作用的物体
      // 物体1
      ctx.beginPath()
      ctx.arc(100, 200, 20, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      // 物体2
      ctx.beginPath()
      ctx.arc(300, 200, 20, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      // 绘制作用力
      drawArrow(ctx, 120, 200, 180, 200, '#ef4444', 'F₁₂')
      drawArrow(ctx, 280, 200, 220, 200, '#10b981', 'F₂₁')
    } else {
      // 单个物体
      ctx.beginPath()
      ctx.arc(position.x, position.y, 15, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      // 绘制速度向量
      if (Math.abs(velocity.x) > 0.1 || Math.abs(velocity.y) > 0.1) {
        drawArrow(
          ctx,
          position.x,
          position.y,
          position.x + velocity.x * 5,
          position.y + velocity.y * 5,
          '#8b5cf6',
          'v'
        )
      }

      // 绘制重力
      if (forces.gravity > 0) {
        drawArrow(
          ctx,
          position.x,
          position.y + 30,
          position.x,
          position.y + 30 + forces.gravity * 5,
          '#ef4444',
          'mg'
        )
      }
    }
  }

  const drawArrow = (ctx, fromX, fromY, toX, toY, color, label) => {
    const headLength = 10
    const angle = Math.atan2(toY - fromY, toX - fromX)

    ctx.strokeStyle = color
    ctx.fillStyle = color
    ctx.lineWidth = 2

    // 绘制箭头线
    ctx.beginPath()
    ctx.moveTo(fromX, fromY)
    ctx.lineTo(toX, toY)
    ctx.stroke()

    // 绘制箭头头部
    ctx.beginPath()
    ctx.moveTo(toX, toY)
    ctx.lineTo(
      toX - headLength * Math.cos(angle - Math.PI / 6),
      toY - headLength * Math.sin(angle - Math.PI / 6)
    )
    ctx.lineTo(
      toX - headLength * Math.cos(angle + Math.PI / 6),
      toY - headLength * Math.sin(angle + Math.PI / 6)
    )
    ctx.closePath()
    ctx.fill()

    // 绘制标签
    if (label) {
      ctx.font = '14px sans-serif'
      ctx.fillText(label, toX + 10, toY)
    }
  }

  const drawInfoPanel = (ctx) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    ctx.fillRect(10, 10, 180, 100)

    ctx.fillStyle = 'white'
    ctx.font = '12px sans-serif'
    ctx.fillText(`位置: (${position.x.toFixed(1)}, ${position.y.toFixed(1)})`, 20, 30)
    ctx.fillText(`速度: (${velocity.x.toFixed(2)}, ${velocity.y.toFixed(2)})`, 20, 50)
    ctx.fillText(`重力: ${forces.gravity.toFixed(1)} m/s²`, 20, 70)
    ctx.fillText(`摩擦系数: ${forces.friction.toFixed(2)}`, 20, 90)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setPosition(currentAnimation.initialValues)
    setVelocity(currentAnimation.initialVelocity)
    setForces(prev => ({ ...prev, ...currentAnimation.forces }))
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="w-full space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{currentAnimation.title}</h3>
        <p className="text-muted-foreground text-sm">{currentAnimation.description}</p>
      </div>

      <div className="relative bg-white rounded-lg border shadow-sm overflow-hidden">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="w-full h-auto"
        />

        {controls && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/90 backdrop-blur rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePlayPause}
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button
                onClick={handleReset}
                className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium">速度:</label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-20"
                />
                <span className="text-sm text-muted-foreground">{speed.toFixed(1)}x</span>
              </div>

              <button
                onClick={() => setShowControls(!showControls)}
                className="p-2 rounded-full hover:bg-accent transition-colors"
              >
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {showControls && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-4 space-y-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">重力加速度</label>
              <input
                type="range"
                min="0"
                max="20"
                step="0.1"
                value={forces.gravity}
                onChange={(e) => setForces(prev => ({ ...prev, gravity: parseFloat(e.target.value) }))}
                className="w-32"
              />
              <span className="text-sm text-muted-foreground">{forces.gravity.toFixed(1)} m/s²</span>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">摩擦系数</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={forces.friction}
                onChange={(e) => setForces(prev => ({ ...prev, friction: parseFloat(e.target.value) }))}
                className="w-32"
              />
              <span className="text-sm text-muted-foreground">{forces.friction.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PhysicsAnimation