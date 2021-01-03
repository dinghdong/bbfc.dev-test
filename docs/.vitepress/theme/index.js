import DefaultTheme from 'vitepress/dist/client/theme-default'
import MyHome from '/@theme/components/MyHome.vue'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app, router, siteData }) => {
    app.component('MyHome', MyHome)
  }
}
