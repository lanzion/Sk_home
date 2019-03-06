// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import '@/assets/css/swiper.min.css'
import '@/assets/css/reset.css'
import '@/assets/script/swiper.min.js'
Vue.config.productionTip = false
import getData from './lib/getData.js'
import VueLazyload from 'vue-lazyload'
import statistics from './lib/Statistics.js'
import './lib/zlanstat.js'
Vue.use(getData)

Vue.use(statistics)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading:'http://gdtvimg.weixinmvp.com/res/gdtvimg/20180404/a8f431e43e32406aad3168bb6aaba31c.png',
  attempt: 1,
  listenEvents:['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend','touchstart',"touchmove",'touchend'],
  adapter: {
    loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
 
    },
    loading (listender, Init) {
    },
    error (listender, Init) {
    }
}
})
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
