// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MyLayout from './myLayout.vue'
import productDetail from './productDetail.vue'
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('MyLayout', MyLayout)
    app.component('productDetail', productDetail)
    router.onBeforeRouteChange = (to, from) => {
      console.log('before route change', to, from)
    }
  }
}
