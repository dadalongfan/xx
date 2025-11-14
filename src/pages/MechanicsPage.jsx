import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Play, ChevronRight, ArrowLeft } from 'lucide-react'
import PhysicsAnimation from '../components/PhysicsAnimation'
import { mechanicsTopics } from '../data/physicsData'

const MechanicsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [activeTab, setActiveTab] = useState('theory')

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setActiveTab('theory')
  }

  const handleBack = () => {
    setSelectedTopic(null)
  }

  if (selectedTopic) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-6">
        <button
          onClick={handleBack}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>返回列表</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* 主题标题 */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">{selectedTopic.title}</h1>
            <p className="text-muted-foreground text-lg">{selectedTopic.description}</p>
          </div>

          {/* 公式展示 */}
          <div className="bg-primary/10 border-2 border-primary/20 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">核心公式</h3>
            <div className="text-2xl font-mono font-bold text-primary">{selectedTopic.formula}</div>
          </div>

          {/* 选项卡 */}
          <div className="flex space-x-1 bg-muted rounded-lg p-1">
            {['theory', 'examples', 'animation', 'applications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab === 'theory' && '理论知识'}
                {tab === 'examples' && '生活实例'}
                {tab === 'animation' && '动画演示'}
                {tab === 'applications' && '实际应用'}
              </button>
            ))}
          </div>

          {/* 内容区域 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'theory' && (
              <div className="prose max-w-none">
                <div className="bg-card rounded-lg border p-6 space-y-4">
                  <h3 className="text-xl font-semibold">理论讲解</h3>
                  <div className="space-y-3">
                    <p className="leading-relaxed">{selectedTopic.description}</p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">关键要点：</h4>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground">
                        <li>理解定律的基本表述和物理意义</li>
                        <li>掌握公式的推导过程和适用条件</li>
                        <li>学会在不同情境下应用相关原理</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-blue-800">学习提示：</h4>
                      <p className="text-blue-700">
                        建议结合动画演示来理解抽象的物理概念，通过实际例子加深对理论知识的掌握。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">生活实例</h3>
                {selectedTopic.examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-lg border p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{example}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'animation' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">动画演示</h3>
                <div className="flex justify-center">
                  <PhysicsAnimation
                    type={selectedTopic.animation}
                    title={selectedTopic.title}
                    description={selectedTopic.description}
                    controls={true}
                  />
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-yellow-800">操作说明：</h4>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• 点击播放按钮开始动画演示</li>
                    <li>• 使用重置按钮恢复初始状态</li>
                    <li>• 调整速度滑块控制动画播放速度</li>
                    <li>• 点击设置按钮调整物理参数</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">实际应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTopic.applications.map((application, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="font-semibold">{application}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        该原理在{application}中的具体应用体现了物理学对工程技术和日常生活的重要指导作用。
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* 页面标题 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">牛顿力学原理</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          深入学习牛顿三大定律和基本运动规律，通过理论讲解、实例分析和动画演示，
          全面掌握经典力学的基础知识。
        </p>
      </motion.div>

      {/* 学习路径概览 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border"
      >
        <h2 className="text-2xl font-semibold mb-4">学习路径</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {mechanicsTopics.map((topic, index) => (
            <div key={topic.id} className="relative">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2 text-lg font-bold">
                  {index + 1}
                </div>
                <h4 className="text-sm font-medium mb-1">{topic.title}</h4>
              </div>
              {index < mechanicsTopics.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-border -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 主题列表 */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">学习内容</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mechanicsTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              onClick={() => handleTopicSelect(topic)}
              className="bg-card rounded-lg border hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-mono">
                    {topic.formula}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>点击学习</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {topic.applications.slice(0, 2).map((app, appIndex) => (
                    <span
                      key={appIndex}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 学习建议 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border"
      >
        <h2 className="text-xl font-semibold mb-3">学习建议</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-semibold">1</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">循序渐进</h4>
              <p className="text-sm text-muted-foreground">按照学习路径顺序，从基础概念开始逐步深入</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-semibold">2</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">理论结合实践</h4>
              <p className="text-sm text-muted-foreground">通过动画演示加深对抽象概念的理解</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-semibold">3</span>
            </div>
            <div>
              <h4 className="font-semibold mb-1">练习巩固</h4>
              <p className="text-sm text-muted-foreground">完成相关练习题检验学习效果</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MechanicsPage