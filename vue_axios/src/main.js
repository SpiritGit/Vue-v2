import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//本身支持promise
// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res =>{
//   console.log(res)
// })

//发送多个请求
// axios.all([ axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{type:'sell', page:5}
// }) ]).then(axios.spread((res1,res2) => {
//   console.log(res1)
//   console.log(res2)
// }))




//配置公用内容
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
axios.all([axios({
  url:'/home/multidata'
}),axios({
  url:'/home/data',
  params:{type:'sell',page:5}
})]).then(axios.spread((res1,res2) => {
  console.log(res1)
  console.log(res2)
}))