export default {
  install (Vue) {
    Vue.prototype.$gnotify = (params) => Vue.prototype.$notify({ duration: 500, color: 'yellow', ...params }) // 小伎俩-封装 别人的方法
  }
}
