import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/ml/': [
    {
      text: 'PyTorch 基础知识',
      collapsed: false,
      items: [],
    },
    {
      text: 'Jax 基础知识',
      collapsed: false,
      items: [],
    },
    {
      text: 'CUDA 基础知识',
      collapsed: false,
      items: [],
    },
    {
      text: '经典机器学习算法',
      collapsed: false,
      items: [],
    },
    {
      text: 'Deep Learning Models',
      collapsed: false,
      items: [],
    },
  ],
  '/raw-code/': [
    {
      text: '精读源代码',
      // collapsed: false,
      items: [
        { text: 'PyTorch', link: '/raw-code/pytorch' },
        { text: 'Jax', link: '/raw-code/jax' },
        { text: 'Eigen', link: '/raw-code/eigen' },
      ],
    },
  ],
  '/workflow/': [
    {
      text: '常用工具/方法',
      // collapsed: false,
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
}
