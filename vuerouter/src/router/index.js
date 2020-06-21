import VueRouter from 'vue-router'
import Vue from 'vue'


//以下直接导入不是懒加载
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'



//以下为懒加载写法
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessages = () => import('../components/HomeMessages.vue')
const Profile = () => import('../components/profile.vue')

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
        component:Home,
        meta:{
            title:'首页'
        },
        children:[
            // {
            //     path:'',
            //     redirect:'news'
            // },
            {
                path:'news',
                component:HomeNews,
            },
            {
                path:'messages',
                component:HomeMessages,
            }
        ]
    },
    {
        path:'/about',
        component:About,
        meta:{
            title: '关于'
        },
    },
    {
        path:'/user/:userId',
        component:User,
        meta:{
            title:'用户'
        },
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            title:'档案'
        },
    }
]
const router = new VueRouter({
    routes,
    mode:'history'  //去除url中产生的#
})

//全局导航守卫，这里设置网页title （前置钩子）
router.beforeEach(function(to,from,next){
    document.title = to.matched[0].meta.title//matched[0]永远取第一个，而不是子组件
    next()
})



//router对象传入Vue实例中
export default router