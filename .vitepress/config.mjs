import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/enstar/',
  siteTitle: false,
// 站点浏览器图标
  head: [['link', { rel: 'icon', href: '/enstar/logo.jpg' }]],
  // title: false,
  description: `JIA XIng EN Star Export & Export Co.,LtdJiaxing EN Star Import & Export Co., Ltd. is a professional global trading partner dedicated to delivering high-quality commodities worldwide. Guided by our core philosophy of "Star-Navigated, Trust-Shared", we provide efficient and reliable end-to-end import/export solutions. Leveraging the strategic advantages of the Yangtze River Delta, we specialize in building materials, consumer goods, and industrial equipment, offering customized services and robust supply chain management to bridge "Made in China" with global markets.`,
  themeConfig: {
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    search: {
      provider: 'local'
    },
    // 更新时间，md文件的。需要提交git commit
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Conatct', link: '/contact' },
      // { text: 'Company Profile', link: '/profile' },
      { text: 'Blog', link: '/blog/' },
      {
        text: 'Products', items: [
          { text: '商品分类1', link: '/product/c1' },
          { text: '商品分类2', link: '/product/c1/index' },
          { text: '商品分类3', link: '/markdown-examples' },
        ]
      }
    ],

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: {
        svg:'<svg t="1750404249497" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4915" width="200" height="200"><path d="M1002.453333 264.746667a128.298667 128.298667 0 0 0-89.088-89.088c-79.786667-21.376-400.896-21.376-400.896-21.376s-320.298667-0.426667-400.896 21.376A128.298667 128.298667 0 0 0 22.485333 264.746667a1333.205333 1333.205333 0 0 0-22.272 247.68 1333.205333 1333.205333 0 0 0 22.272 246.741333 128.298667 128.298667 0 0 0 89.088 89.088c79.701333 21.418667 400.896 21.418667 400.896 21.418667s320.256 0 400.896-21.418667a128.298667 128.298667 0 0 0 89.088-89.088 1333.205333 1333.205333 0 0 0 21.333334-246.741333 1333.205333 1333.205333 0 0 0-21.333334-247.68zM409.984 665.642667V358.741333l267.264 153.685334z" fill="" p-id="4916"></path></svg>'
      }, link: 'https://youtube.com' },
    ],
    footer: {
      copyright: `Copyright © 2021-${new Date().getFullYear()} JIAXING EN Star Import & Export Co.,Ltd`
    },
    logo: { light: '/test.png', dark: '/test.png', alt: 'logoholder' },
    siteTitle: false,
    outline: {
      label: '目录',
      level: [1, 3],
      collapsed: true,
      showDepthLink: true
    },
   

  },

})
