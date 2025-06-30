
export default {
    // 当用户位于 `blog` 目录时，会显示此侧边栏
    '/blog/': [
      {
        text: 'Blog',
        link: '/blog/index',
        items: [
          {
            text: 'Team Stories', link: '/blog/teamindex', 
            // items: [

            //   { text: 'One1111', link: '/blog/team/one' },
            //   { text: 'Tw2222o', link: '/blog/team/two' },
            //   { text: 'Tw2', link: '/blog/team/tdwo' },
            // ]
          },
         
          { text: 'Collaborations with Clients', link: '/blog/customerindex' },
          { text: 'Exhibitions Shows', link: '/blog/exhibitionsindex' },
          {
            text: 'Other Stories', link: '/blog/otherindex', 
            // items: [
            //   { text: 'One', link: '/blog/one' },
            //   { text: 'Two222', link: '/blog/two' }
            // ]
          },
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