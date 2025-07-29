
export default {
    // 当用户位于 `blog` 目录时，会显示此侧边栏
    '/blog/': [
      {
        text: 'Blog',
        link: '/blog/index',
      
      }
    ],
    // 当用户位于 `config` 目录时，会显示此侧边栏
    '/product/': [
      {
        text: 'Product',
        items: [
          { text: 'c1', link: '/product/c1' },
          { text: 'Three', link: '/product/c1/index' },
          { text: 'Four', link: '/config/four' }
        ]
      }]
  }