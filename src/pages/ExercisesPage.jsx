import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Play, RotateCcw, Trophy, Target, Clock, Star } from 'lucide-react'
import PhysicsAnimation from '../components/PhysicsAnimation'
import { exercises } from '../data/physicsData'

const ExercisesPage = () => {
  const [currentExercise, setCurrentExercise] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentQuestion = exercises[currentExercise]

  useEffect(() => {
    setSelectedAnswer(null)
    setShowResult(false)
    setShowExplanation(false)
  }, [currentExercise])

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.correct
    setShowResult(true)

    const newAnsweredQuestions = [...answeredQuestions, {
      exerciseId: currentExercise,
      selectedAnswer,
      isCorrect,
      score: isCorrect ? 1 : 0
    }]
    setAnsweredQuestions(newAnsweredQuestions)

    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentExercise(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
    setShowExplanation(false)
    setQuizCompleted(false)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '简单':
        return 'bg-green-100 text-green-800'
      case '中等':
        return 'bg-yellow-100 text-yellow-800'
      case '困难':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getScoreMessage = () => {
    const percentage = (score / exercises.length) * 100
    if (percentage === 100) return "完美！你是物理大师！"
    if (percentage >= 80) return "优秀！物理基础很扎实！"
    if (percentage >= 60) return "良好！继续努力学习！"
    if (percentage >= 40) return "及格！还需要多加练习！"
    return "需要加强学习，建议重新复习理论知识！"
  }

  const getScoreStars = () => {
    const percentage = (score / exercises.length) * 100
    const stars = Math.ceil(percentage / 20)
    return Array.from({ length: 5 }, (_, i) => i < stars)
  }

  if (quizCompleted) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Trophy className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-3xl font-bold">测试完成！</h1>

          <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl p-8 space-y-4">
            <div className="text-4xl font-bold text-primary">
              {score} / {exercises.length}
            </div>
            <div className="flex justify-center space-x-1">
              {getScoreStars().map((filled, index) => (
                <Star
                  key={index}
                  className={`h-6 w-6 ${filled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">{getScoreMessage()}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">答题详情</h3>
            <div className="grid grid-cols-1 gap-2">
              {exercises.map((exercise, index) => {
                const answer = answeredQuestions.find(a => a.exerciseId === index)
                const isCorrect = answer?.isCorrect || false
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <span className="text-sm">题目 {index + 1}: {exercise.title}</span>
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestartQuiz}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              重新测试
            </button>
            <Link
              to="/mechanics"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              返回学习
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* 头部信息 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">物理练习题库</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span>进度: {currentExercise + 1} / {exercises.length}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Trophy className="h-4 w-4" />
              <span>得分: {score}</span>
            </div>
          </div>
        </div>

        {/* 进度条 */}
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 题目区域 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-lg border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">题目 {currentExercise + 1}</h2>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty}
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-muted-foreground text-sm mb-2">知识点: {currentQuestion.topic}</p>
              <h3 className="text-lg font-medium leading-relaxed">{currentQuestion.question}</h3>
            </div>

            {/* 选项 */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                let optionClass = "p-4 rounded-lg border cursor-pointer transition-all duration-200 "

                if (showResult) {
                  if (index === currentQuestion.correct) {
                    optionClass += "bg-green-50 border-green-200 text-green-800"
                  } else if (index === selectedAnswer && index !== currentQuestion.correct) {
                    optionClass += "bg-red-50 border-red-200 text-red-800"
                  } else {
                    optionClass += "bg-muted/30 text-muted-foreground"
                  }
                } else {
                  if (selectedAnswer === index) {
                    optionClass += "bg-primary/10 border-primary text-primary"
                  } else {
                    optionClass += "hover:bg-accent hover:text-accent-foreground"
                  }
                }

                return (
                  <div
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={optionClass}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
                        {showResult && index === currentQuestion.correct && (
                          <CheckCircle className="h-4 w-4" />
                        )}
                        {showResult && index === selectedAnswer && index !== currentQuestion.correct && (
                          <XCircle className="h-4 w-4" />
                        )}
                        {!showResult && selectedAnswer === index && (
                          <div className="w-3 h-3 rounded-full bg-current" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 操作按钮 */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentExercise === 0}
                className="px-4 py-2 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                上一题
              </button>

              {!showResult ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  提交答案
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="px-4 py-2 rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {showExplanation ? '收起解析' : '查看解析'}
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                  >
                    {currentExercise < exercises.length - 1 ? '下一题' : '完成测试'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 题目导航 */}
          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-semibold mb-3">快速导航</h3>
            <div className="grid grid-cols-6 gap-2">
              {exercises.map((_, index) => {
                const isAnswered = answeredQuestions.some(a => a.exerciseId === index)
                const isCorrect = answeredQuestions.find(a => a.exerciseId === index)?.isCorrect
                const isCurrent = index === currentExercise

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentExercise(index)}
                    className={`w-10 h-10 rounded-md font-medium text-sm transition-colors ${
                      isCurrent
                        ? 'bg-primary text-primary-foreground'
                        : isAnswered
                        ? isCorrect
                          ? 'bg-green-100 text-green-800 hover:bg-green-200'
                          : 'bg-red-100 text-red-800 hover:bg-red-200'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* 解析和动画区域 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {showExplanation && showResult && (
            <div className="bg-card rounded-lg border p-6 space-y-4">
              <h3 className="text-xl font-semibold">题目解析</h3>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">正确答案</h4>
                  <p className="text-blue-700">
                    {currentQuestion.options[currentQuestion.correct]}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">解题步骤</h4>
                  {currentQuestion.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-xs font-semibold">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">详细解析</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 动画演示 */}
          <div className="bg-card rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-4">动画演示</h3>
            <PhysicsAnimation
              type={currentQuestion.animation}
              title={`${currentQuestion.topic}演示`}
              description="通过动画演示理解题目中的物理过程"
              controls={true}
            />
          </div>

          {/* 学习提示 */}
          {showResult && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border p-4">
              <h4 className="font-semibold mb-2">学习提示</h4>
              <p className="text-sm text-muted-foreground">
                {selectedAnswer === currentQuestion.correct
                  ? "回答正确！这说明你对这个知识点掌握得很好。继续保持！"
                  : "回答错误。建议回顾相关理论知识，然后通过动画演示加深理解。"}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ExercisesPage