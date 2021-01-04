import DefaultTheme from 'vitepress/dist/client/theme-default'
import MyHome from '/@theme/components/MyHome.vue'
import MyBlog from '/@theme/components/MyBlog.vue'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app, router, siteData }) => {
    app.component('MyHome', MyHome)
    app.component('MyBlog', MyBlog)
  }
}
