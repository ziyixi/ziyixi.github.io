import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig, PageData } from 'vitepress'

import { head, nav, sidebar, localSearchOptions } from './configs'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'en-US',
  title: 'Wind Whisper Miracle House',
  description: 'I learn, I think, I believe.',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.jpeg',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/ziyixi' }],

    footer: {
      copyright:
        'Copyright © 2023-present Zayne Xi, template credits to https://github.com/maomao1996',
    },

    darkModeSwitchLabel: 'Switch dark mode',
    returnToTopLabel: 'Back to top',
    lastUpdatedText: 'Last Updated',

    /* Algolia DocSearch 配置 */
    search: {
      provider: 'local',
      options: localSearchOptions,
    },

    docFooter: {
      prev: 'last article',
      next: 'next article',
    },
  },

  /* 生成站点地图 */
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://ziyixi.science/' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
})
