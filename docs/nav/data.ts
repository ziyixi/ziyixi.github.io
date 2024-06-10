import type { NavData } from '../.vitepress/theme/types'

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://www.ilovepdf.com/img/ilovepdf.svg',
        title: 'I love PDF',
        desc: 'PDF万能操作工具',
        link: 'https://www.ilovepdf.com/',
      },
    ],
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: '有问题？问问ChatGPT',
        link: 'https://chat.openai.com/chat',
      },
    ],
  },
]
