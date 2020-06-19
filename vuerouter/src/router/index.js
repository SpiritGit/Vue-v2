import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
//通过Vue.use安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path:'',
        // 使用重定向将首页默认显示
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:About
    }
]
const router = new VueRouter({
    routes,
    mode:'history'  //去除url中产生的#
})

//router对象传入Vue实例中
export default router