// 全局组件及插件
import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import toast from './lib/toast'
import store from './vuex/store.js'
import './assets/common.css'
// 注册组件及插件
Vue.use(toast)

Vue.config.productionTip = false
// 实例化组件
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  methods: {
    go: function (to,params) {
      if (this.$router) {
        if(params){
          this.$router.push({ name:to, params: params})
        }else{
          this.$router.push(to)
        }
      }
    }
  }
})
