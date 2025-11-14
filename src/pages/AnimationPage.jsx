import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, PlayCircle, Clock, BookOpen } from 'lucide-react'
import PhysicsAnimation from '../components/PhysicsAnimation'
import { animations, mechanicsTopics } from '../data/physicsData'

const AnimationPage = () => {
  const { id } = useParams()
  const animation = animations.find(a => a.id === id)
  const relatedTopic = mechanicsTopics.find(t => t.animation === id)

  if (!animation) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">动画未找到</h1>
        <Link to="/mechanics" className="text-primary hover:underline">
          返回力学原理
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* 返回按钮 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          to="/mechanics"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>返回力学原理</span>
        </Link>
      </motion.div>

      {/* 动画标题 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold">{animation.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {animation.description}
        </p>

        <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>时长: {animation.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <PlayCircle className="h-4 w-4" />
            <span>互动演示</span>
          </div>
        </div>
      </motion.div>

      {/* 动画演示区域 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <PhysicsAnimation
          type={animation.id}
          title={animation.title}
          description={animation.description}
          controls={true}
        />
      </motion.div>

      {/* 概念说明 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span>核心概念</span>
            </h2>
            <div className="space-y-4">
              {animation.concepts.map((concept, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{concept}</h3>
                    <p className="text-sm text-muted-foreground">
                      {concept === '惯性' && '物体保持原有运动状态的性质，是牛顿第一定律的核心概念。'}
                      {concept === '匀速直线运动' && '速度大小和方向都不变的运动，是物体在无外力作用时的运动状态。'}
                      {concept === 'F=ma' && '力等于质量乘以加速度，描述了力、质量、加速度三者之间的关系。'}
                      {concept === '作用力' && '物体间的相互作用，总是成对出现，大小相等方向相反。'}
                      {concept === '反作用力' && '与作用力相对应的力，作用在施力物体上。'}
                      {concept === '重力加速度' && '地球表面附近的物体由于重力作用产生的加速度，约为9.8m/s²。'}
                      {concept === '自由落体' && '物体仅在重力作用下的运动，忽略空气阻力的影响。'}
                      {concept === '抛物线' && '抛物运动的轨迹，是水平匀速运动和垂直加速运动的合成。'}
                      {concept === '水平运动' && '抛物运动中水平方向的匀速直线运动。'}
                      {concept === '垂直运动' && '抛物运动中垂直方向的匀加速直线运动。'}
                      {concept === '加速度' && '速度变化的快慢程度，矢量，方向与合外力方向相同。'}
                      {concept === '力的作用' && '改变物体运动状态的原因，能使物体产生加速度。'}
                      {concept === '外力作用' && '来自物体外部的作用力，能够改变物体的运动状态。'}
                      {concept === '相互作用' && '两个物体之间力的作用是相互的，总是成对出现。'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* 操作说明 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">操作说明</h3>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• <strong>播放/暂停：</strong>点击播放按钮开始或暂停动画演示</li>
              <li>• <strong>重置：</strong>点击重置按钮恢复到初始状态</li>
              <li>• <strong>速度控制：</strong>使用速度滑块调整动画播放速度</li>
              <li>• <strong>参数调整：</strong>点击设置按钮调整物理参数（如重力、摩擦力等）</li>
              <li>• <strong>实时信息：</strong>左上角显示物体的位置、速度等实时数据</li>
              <li>• <strong>矢量显示：</strong>箭头表示力、速度等矢量的大小和方向</li>
            </ul>
          </div>

          {/* 物理原理 */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">物理原理</h3>
            <div className="space-y-3 text-green-700 text-sm">
              {relatedTopic && (
                <>
                  <p><strong>相关定律：</strong>{relatedTopic.title}</p>
                  <p><strong>核心公式：</strong>{relatedTopic.formula}</p>
                  <p><strong>定律描述：</strong>{relatedTopic.description}</p>
                </>
              )}

              <div className="mt-4 pt-3 border-t border-green-300">
                <h4 className="font-semibold mb-2">观察要点：</h4>
                <ul className="space-y-1 list-disc list-inside">
                  {animation.id === 'freeFall' && (
                    <>
                      <li>物体下落速度逐渐增加</li>
                      <li>加速度恒定不变（重力加速度）</li>
                      <li>位移与时间的平方成正比</li>
                    </>
                  )}
                  {animation.id === 'projectile' && (
                    <>
                      <li>水平方向匀速直线运动</li>
                      <li>垂直方向匀加速直线运动</li>
                      <li>轨迹形成抛物线</li>
                    </>
                  )}
                  {animation.id === 'newtonFirst' && (
                    <>
                      <li>无外力作用时保持原有运动状态</li>
                      <li>静止或匀速直线运动</li>
                      <li>体现了物体的惯性</li>
                    </>
                  )}
                  {animation.id === 'newtonSecond' && (
                    <>
                      <li>力产生加速度</li>
                      <li>加速度与力成正比</li>
                      <li>加速度与质量成反比</li>
                    </>
                  )}
                  {animation.id === 'newtonThird' && (
                    <>
                      <li>作用力与反作用力同时存在</li>
                      <li>大小相等，方向相反</li>
                      <li>作用在不同物体上</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* 学习建议 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">学习建议</h3>
            <div className="space-y-2 text-yellow-700 text-sm">
              <p>• 多次调整参数，观察不同条件下的运动规律</p>
              <p>• 关注实时数据的变化，理解物理量的关系</p>
              <p>• 结合理论知识，分析动画展示的物理现象</p>
              <p>• 尝试预测运动结果，验证自己的理解</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 相关链接 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">相关学习内容</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/mechanics"
              className="p-4 bg-background rounded-lg border hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold mb-2">力学原理</h4>
              <p className="text-sm text-muted-foreground">
                学习牛顿三大定律的基础理论
              </p>
            </Link>
            <Link
              to="/exercises"
              className="p-4 bg-background rounded-lg border hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold mb-2">练习题目</h4>
              <p className="text-sm text-muted-foreground">
                通过练习巩固所学知识
              </p>
            </Link>
            {relatedTopic && (
              <button
                onClick={() => window.history.back()}
                className="p-4 bg-background rounded-lg border hover:shadow-md transition-shadow text-left"
              >
                <h4 className="font-semibold mb-2">{relatedTopic.title}</h4>
                <p className="text-sm text-muted-foreground">
                  返回相关理论学习
                </p>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AnimationPage