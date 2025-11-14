import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Calculator, Play, GraduationCap, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: '牛顿三大定律',
      description: '深入学习牛顿第一、第二、第三定律的原理和应用',
      link: '/mechanics'
    },
    {
      icon: Calculator,
      title: '力学公式推导',
      description: '掌握力学公式的推导过程和实际应用',
      link: '/mechanics'
    },
    {
      icon: Play,
      title: '动图演示',
      description: '通过生动的动画演示理解抽象的物理概念',
      link: '/exercises'
    }
  ]

  const stats = [
    { icon: GraduationCap, label: '学习模块', value: '8+' },
    { icon: Award, label: '练习题目', value: '50+' },
    { icon: Clock, label: '学习时长', value: '2小时' }
  ]

  return (
    <div className="space-y-16">
      {/* 英雄区域 */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              牛顿力学原理
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              郑州创新科技中等专业学校
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              通过互动学习、动画演示和实战练习，深入理解牛顿力学的基本原理，
              掌握物理学的核心概念和计算方法。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mechanics"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                开始学习
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/exercises"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                练习题库
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">学习特色</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              通过多样化的学习方式，让物理学习更加生动有趣
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={feature.link}
                    className="block h-full p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="flex items-center text-primary font-medium">
                      了解更多
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">学习路径</h2>
            <p className="text-lg text-muted-foreground">
              按照科学的学习顺序，循序渐进掌握牛顿力学
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: '基础知识', desc: '力、质量、加速度等基本概念' },
              { step: 2, title: '牛顿第一定律', desc: '惯性定律的理解和应用' },
              { step: 3, title: '牛顿第二定律', desc: 'F=ma的推导和计算' },
              { step: 4, title: '牛顿第三定律', desc: '作用力与反作用力' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border -translate-x-6"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage