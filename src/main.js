// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Test from './components/common/test'
import VueCropper from 'vue-cropper' 
import VueTranslator from 'vue-translator'
import './styles/font.css'      //使用阿里字体图标库

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCropper);
Vue.component('Test', Test)
Vue.use(VueTranslator, {
})
console.log('main.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
