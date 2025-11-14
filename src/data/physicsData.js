export const mechanicsTopics = [
  {
    id: 1,
    title: "牛顿第一定律（惯性定律）",
    description: "任何物体都保持静止或匀速直线运动的状态，直到有外力迫使它改变这种状态为止。",
    formula: "F = 0 时，a = 0，v = 常数",
    examples: [
      "汽车突然刹车时，乘客会向前倾",
      "公交车启动时，站在车上的人会后仰",
      "地球绕太阳运动，保持轨道运行"
    ],
    animation: "newtonFirst",
    applications: [
      "安全带的作用原理",
      "车辆刹车系统设计",
      "卫星轨道维持"
    ]
  },
  {
    id: 2,
    title: "牛顿第二定律（加速度定律）",
    description: "物体的加速度与作用力成正比，与物体质量成反比，加速度方向与合外力方向相同。",
    formula: "F = ma 或 a = F/m",
    examples: [
      "用力推箱子，箱子会加速运动",
      "同样的力推动轻重不同的物体，轻物体加速度更大",
      "火箭发射时，推力产生巨大加速度"
    ],
    animation: "newtonSecond",
    applications: [
      "汽车加速性能计算",
      "电梯载重设计",
      "体育运动中的力学分析"
    ]
  },
  {
    id: 3,
    title: "牛顿第三定律（作用力与反作用力定律）",
    description: "两个物体之间的作用力与反作用力大小相等、方向相反、作用在同一条直线上。",
    formula: "F₁₂ = -F₂₁",
    examples: [
      "游泳时手向后划水，水向前推人",
      "火箭向后喷气，气体向前推火箭",
      "走路时脚向后蹬地，地面向前推人"
    ],
    animation: "newtonThird",
    applications: [
      "火箭推进原理",
      "喷气式飞机发动机",
      "反冲运动现象"
    ]
  },
  {
    id: 4,
    title: "自由落体运动",
    description: "物体在重力作用下的垂直运动，忽略空气阻力时加速度恒为g。",
    formula: "h = v₀t + ½gt², v² = v₀² + 2gh",
    examples: [
      "苹果从树上掉落",
      "跳伞运动员的下落运动",
      "雨滴从云层落下"
    ],
    animation: "freeFall",
    applications: [
      "建筑物高度测量",
      "体育运动分析",
      "安全防护设计"
    ]
  },
  {
    id: 5,
    title: "抛物运动",
    description: "物体具有初速度并在重力作用下的曲线运动，可分解为水平匀速和垂直加速运动。",
    formula: "x = v₀ₓt, y = v₀ᵧt - ½gt²",
    examples: [
      "投掷篮球的运动轨迹",
      "炮弹的飞行路径",
      "喷泉水珠的抛物线"
    ],
    animation: "projectile",
    applications: [
      "体育投掷技术",
      "弹道计算",
      "航天器轨道设计"
    ]
  }
]

export const exercises = [
  {
    id: 1,
    title: "基础概念题",
    difficulty: "简单",
    topic: "牛顿第一定律",
    question: "一个质量为2kg的物体在光滑水平面上以4m/s的速度匀速运动，求物体受到的合外力大小。",
    options: ["0N", "8N", "2N", "4N"],
    correct: 0,
    explanation: "根据牛顿第一定律，物体做匀速直线运动时，合外力为0N。虽然物体在运动，但速度保持不变，加速度为0，所以F = ma = 2kg × 0m/s² = 0N。",
    animation: "newtonFirst",
    steps: [
      "识别物体运动状态：匀速直线运动",
      "应用牛顿第一定律：合外力为0",
      "验证：加速度a = 0，所以F = ma = 0"
    ]
  },
  {
    id: 2,
    title: "牛顿第二定律计算",
    difficulty: "中等",
    topic: "牛顿第二定律",
    question: "一个质量为5kg的物体受到20N的水平推力，在光滑水平面上从静止开始运动，求3秒后的速度。",
    options: ["8m/s", "12m/s", "15m/s", "20m/s"],
    correct: 1,
    explanation: "根据牛顿第二定律 F = ma，得到加速度 a = F/m = 20N/5kg = 4m/s²。物体从静止开始匀加速运动，3秒后速度 v = at = 4m/s² × 3s = 12m/s。",
    animation: "newtonSecond",
    steps: [
      "计算加速度：a = F/m = 20N/5kg = 4m/s²",
      "确定运动类型：初速度为0的匀加速运动",
      "计算末速度：v = at = 4m/s² × 3s = 12m/s"
    ]
  },
  {
    id: 3,
    title: "作用力与反作用力",
    difficulty: "中等",
    topic: "牛顿第三定律",
    question: "一个人用力推墙，人对墙的推力为100N，墙对人的反作用力大小为多少？",
    options: ["0N", "50N", "100N", "200N"],
    correct: 2,
    explanation: "根据牛顿第三定律，作用力与反作用力大小相等、方向相反。人对墙的推力是100N，所以墙对人的反作用力也是100N。",
    animation: "newtonThird",
    steps: [
      "识别相互作用：人对墙和墙对人",
      "应用牛顿第三定律：F₁₂ = -F₂₁",
      "得出结论：反作用力大小为100N"
    ]
  },
  {
    id: 4,
    title: "自由落体计算",
    difficulty: "中等",
    topic: "自由落体运动",
    question: "一个物体从20m高处自由落下，忽略空气阻力，求落地时的速度。(g=10m/s²)",
    options: ["10m/s", "15m/s", "20m/s", "25m/s"],
    correct: 2,
    explanation: "使用自由落体公式 v² = 2gh，代入数据：v² = 2 × 10m/s² × 20m = 400m²/s²，所以 v = √400 = 20m/s。",
    animation: "freeFall",
    steps: [
      "选择合适的公式：v² = 2gh",
      "代入已知数值：v² = 2 × 10 × 20 = 400",
      "计算结果：v = √400 = 20m/s"
    ]
  },
  {
    id: 5,
    title: "抛物运动分析",
    difficulty: "困难",
    topic: "抛物运动",
    question: "以30°角斜向上抛出一个物体，初速度为20m/s，求最大高度。(g=10m/s², sin30°=0.5)",
    options: ["5m", "10m", "15m", "20m"],
    correct: 1,
    explanation: "首先计算垂直初速度：v₀ᵧ = v₀ × sin30° = 20m/s × 0.5 = 10m/s。在最高点垂直速度为0，使用公式 v² = v₀ᵧ² - 2gh，得到 0 = 10² - 2 × 10 × h，解得 h = 100/20 = 5m。",
    animation: "projectile",
    steps: [
      "分解初速度：v₀ᵧ = 20 × sin30° = 10m/s",
      "在最高点垂直速度为0",
      "使用公式：v² = v₀ᵧ² - 2gh",
      "解方程：0 = 100 - 20h，得 h = 5m"
    ]
  },
  {
    id: 6,
    title: "综合应用题",
    difficulty: "困难",
    topic: "综合应用",
    question: "电梯总质量为800kg，在上升过程中的加速度为2m/s²向上，求缆绳对电梯的拉力。(g=10m/s²)",
    options: ["8000N", "9600N", "6400N", "16000N"],
    correct: 1,
    explanation: "电梯受重力和拉力两个力作用，合外力 F = ma = 800kg × 2m/s² = 1600N向上。设拉力为T，重力为mg = 8000N向下。合外力 F = T - mg = 1600N，所以 T = 1600N + 8000N = 9600N。",
    animation: "newtonSecond",
    steps: [
      "分析受力：重力mg向下，拉力T向上",
      "计算合外力：F = ma = 800 × 2 = 1600N向上",
      "建立方程：T - mg = ma",
      "求解：T = m(g + a) = 800 × (10 + 2) = 9600N"
    ]
  }
]

export const animations = [
  {
    id: 'newtonFirst',
    title: '牛顿第一定律演示',
    description: '展示物体在无外力作用下的匀速直线运动',
    thumbnail: '/animations/newton-first-thumb.png',
    duration: '10秒',
    concepts: ['惯性', '匀速直线运动', '外力作用']
  },
  {
    id: 'newtonSecond',
    title: '牛顿第二定律演示',
    description: '展示力、质量、加速度之间的关系',
    thumbnail: '/animations/newton-second-thumb.png',
    duration: '15秒',
    concepts: ['F=ma', '加速度', '力的作用']
  },
  {
    id: 'newtonThird',
    title: '牛顿第三定律演示',
    description: '展示作用力与反作用力的关系',
    thumbnail: '/animations/newton-third-thumb.png',
    duration: '12秒',
    concepts: ['作用力', '反作用力', '相互作用']
  },
  {
    id: 'freeFall',
    title: '自由落体运动',
    description: '展示物体在重力作用下的垂直运动',
    thumbnail: '/animations/free-fall-thumb.png',
    duration: '8秒',
    concepts: ['重力加速度', '自由落体', '垂直运动']
  },
  {
    id: 'projectile',
    title: '抛物运动',
    description: '展示抛物运动的轨迹和特点',
    thumbnail: '/animations/projectile-thumb.png',
    duration: '20秒',
    concepts: ['抛物线', '水平运动', '垂直运动']
  }
]