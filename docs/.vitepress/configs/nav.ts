import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '导航', link: '/nav', activeMatch: '^/nav' },
  {
    text: '机器学习101',
    items: [
      { text: 'PyTorch 基础知识', link: '/ml/pytorch' },
      { text: 'Jax 基础知识', link: '/ml/pytorch' },
      { text: 'CUDA 基础知识', link: '/ml/cuda' },
      { text: '经典机器学习算法', link: '/ml/algorithm' },
      { text: 'Deep learning models', link: '/ml/model' },
    ],
    activeMatch: '^/ml',
  },
  { text: '源码阅读', link: '/raw-code/pytorch', activeMatch: '^/raw-code' },
  {
    text: 'Workflow',
    items: [
      {
        text: '常用工具/方法',
        items: [
          { text: '工具库整理', link: '/workflow/utils/library' },
          { text: '常用方法整理', link: '/workflow/utils/function' },
        ],
      },
      {
        text: 'PyTorch 小技巧',
        link: '/workflow/torch/',
      },
    ],
    activeMatch: '^/workflow',
  },
  {
    text: '笔记',
    items: [
      { text: '日常笔记', link: '/daily-note' },
      { text: '刷题记录', link: '/leetcode' },
      {
        text: '踩坑记录',
        items: [
          { text: 'C++', link: '/debug/cpp' },
          { text: 'Python', link: '/debug/python' },
        ],
      },
    ],
  },
  {
    text: '提效工具',
    items: [
      {
        text: '软件推荐与配置',
        items: [{ text: 'Visual Studio Code 配置', link: '/efficiency/software/vscode' }],
      },
    ],
    activeMatch: '^/efficiency',
  },
  {
    text: 'Zayne',
    items: [
      { text: '关于我', link: '/about' },
      { text: 'Research分享', link: '/research' },
    ],
  },
]
