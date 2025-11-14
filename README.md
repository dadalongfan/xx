# 牛顿力学原理学习平台

**郑州创新科技中等专业学校 - 物理学习网站**

## 项目简介

这是一个基于React + Vite + TailwindCSS开发的物理学习网站，专注于牛顿力学原理的教学。项目包含动画演示、知识点讲解和练习题库，旨在帮助学生更好地理解和掌握物理学基础概念。

## 功能特色

### 🎯 核心功能
- **理论知识学习** - 详细的牛顿三大定律讲解
- **互动动画演示** - 5种不同类型的物理动画演示
- **智能题库系统** - 包含不同难度的练习题目
- **题目解析功能** - 每道题目都有详细的解题步骤
- **学习进度跟踪** - 实时显示学习进度和成绩

### 🎨 动画演示
- 牛顿第一定律（惯性定律）
- 牛顿第二定律（加速度定律）
- 牛顿第三定律（作用力与反作用力）
- 自由落体运动
- 抛物运动

### 📚 学习内容
- 5个核心知识点模块
- 50+道练习题目
- 详细的公式推导
- 实际应用案例

## 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **样式**: TailwindCSS + shadcn/ui
- **动画**: Framer Motion
- **路由**: React Router
- **图标**: Lucide React

## 项目结构

```
wuli2/
├── src/
│   ├── components/          # 组件目录
│   │   ├── Header.jsx      # 页面头部
│   │   └── PhysicsAnimation.jsx  # 物理动画组件
│   ├── pages/              # 页面目录
│   │   ├── HomePage.jsx    # 首页
│   │   ├── MechanicsPage.jsx  # 力学原理页
│   │   ├── ExercisesPage.jsx  # 练习题页
│   │   └── AnimationPage.jsx  # 动画详情页
│   ├── data/               # 数据目录
│   │   └── physicsData.js  # 物理题库和知识点数据
│   ├── utils/              # 工具函数
│   ├── App.jsx             # 主应用组件
│   ├── main.jsx            # 入口文件
│   └── index.css           # 全局样式
├── public/                 # 静态资源
├── package.json            # 项目配置
├── vite.config.js          # Vite配置
├── tailwind.config.js      # Tailwind配置
└── README.md              # 项目说明
```

## 快速开始

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 使用说明

### 1. 首页
- 项目介绍和学习特色展示
- 学习路径规划
- 功能模块入口

### 2. 力学原理页面
- 选择不同的物理知识点
- 理论知识讲解
- 生活实例展示
- 动画演示
- 实际应用案例

### 3. 练习题库
- 6道精选物理题目
- 不同难度等级
- 实时答案验证
- 详细解析过程
- 动画演示辅助理解
- 成绩统计和反馈

### 4. 动画演示
- 交互式物理动画
- 实时参数调整
- 物理量实时显示
- 操作说明和观察要点

## 动画组件功能

### PhysicsAnimation 组件特性：
- **播放控制**: 播放/暂停/重置功能
- **速度调节**: 可调整动画播放速度(0.1x-2x)
- **参数设置**: 可调整重力加速度、摩擦系数等物理参数
- **实时信息**: 显示位置、速度、加速度等物理量
- **矢量显示**: 用箭头表示力、速度等矢量

### 支持的动画类型：
1. `freeFall` - 自由落体运动
2. `projectile` - 抛物运动
3. `newtonFirst` - 牛顿第一定律演示
4. `newtonSecond` - 牛顿第二定律演示
5. `newtonThird` - 牛顿第三定律演示

## 题库数据结构

### 知识点数据：
```javascript
{
  id: 1,
  title: "牛顿第一定律（惯性定律）",
  description: "定律描述",
  formula: "F = 0 时，a = 0",
  examples: ["实例1", "实例2"],
  animation: "newtonFirst",
  applications: ["应用1", "应用2"]
}
```

### 练习题数据：
```javascript
{
  id: 1,
  title: "题目标题",
  difficulty: "简单",
  topic: "对应知识点",
  question: "题目描述",
  options: ["选项A", "选项B", "选项C", "选项D"],
  correct: 0,  // 正确答案索引
  explanation: "详细解析",
  animation: "对应的动画类型",
  steps: ["解题步骤1", "解题步骤2"]
}
```

## 自定义和扩展

### 添加新的动画类型：
1. 在 `PhysicsAnimation.jsx` 中的 `animationTypes` 对象添加新类型
2. 实现对应的 `updateFn` 函数
3. 在 `drawPhysicsObjects` 函数中添加绘制逻辑

### 添加新的知识点：
1. 在 `src/data/physicsData.js` 中的 `mechanicsTopics` 数组添加新数据
2. 创建对应的动画类型（如需要）
3. 添加相关的练习题目

### 添加新的练习题目：
1. 在 `src/data/physicsData.js` 中的 `exercises` 数组添加新题目
2. 确保题目数据格式正确
3. 设置对应的动画类型用于解析

## 样式和主题

- 使用 TailwindCSS 实现响应式设计
- 集成 shadcn/ui 组件库
- 支持亮色/暗色主题切换
- 自定义 CSS 动画效果

## 浏览器兼容性

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 部署

项目构建为静态文件，可以部署到任何静态文件服务器：

### Netlify 部署：
1. 连接GitHub仓库
2. 构建命令：`npm run build`
3. 发布目录：`dist`

### Vercel 部署：
1. 导入项目
2. 自动检测框架并配置
3. 一键部署

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目。

## 许可证

MIT License

## 联系方式

项目维护者：郑州创新科技中等专业学校

---

**注意**: 这是一个教学项目，主要用于物理学习演示。如需用于生产环境，请进行充分的测试和优化。