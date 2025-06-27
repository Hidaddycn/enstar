export default {
    // 当用户位于 `blog` 目录时，会显示此侧边栏
    '/blog/': [
      {
        text: 'Blog',
        link: '/blog/index',
        items: [
          {
            text: 'team', link: '/blog/teamindex', items: [

              { text: 'One1111', link: '/blog/team/one' },
              { text: 'Tw2222o', link: '/blog/team/two' }
            ]
          },
          {
            text: 'other', link: '/blog/other/index', items: [
              { text: 'One', link: '/blog/one' },
              { text: 'Two', link: '/blog/two' }
            ]
          },
          { text: 'customer', link: '/blog/customer/index' },
          { text: 'Exhibitions Shows', link: '/blog/exhibitions/index' }
        ]
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