import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')


Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}