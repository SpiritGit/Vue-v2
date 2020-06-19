const {add,mul} = require('./js/math.js')

console.log(add(20,30));
console.log(mul(90,30));


//刻意依赖css 让webpack打包
require('./css/normal.css')



import Vue from 'vue'
import App from './vue/app.vue'


new Vue({
    el:'#app',
    template:'<App></App>',
    components:{
        App
    }
})