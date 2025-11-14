import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Calculator, Play, Sun, Moon } from 'lucide-react'

const Header = ({ darkMode, setDarkMode }) => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { path: '/', label: '首页', icon: BookOpen },
    { path: '/mechanics', label: '力学原理', icon: Calculator },
    { path: '/exercises', label: '题目练习', icon: Play },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">物</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold">牛顿力学学习平台</h1>
              <p className="text-xs text-muted-foreground">郑州创新科技中等专业学校</p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="切换主题"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* 移动端导航 */}
        <div className="md:hidden flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`p-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
                title={item.label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header