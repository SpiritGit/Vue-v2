<template>
  <div id="app">
    <router-link to='/home' tag='button'>首页</router-link>
    <router-link to='/about' tag='button'>关于</router-link>
    <router-link :to="'/user/'+userId" tag='button'>用户</router-link>
    <router-link :to="{path:'/profile', query:{name:'why'}}" tag='button'>档案</router-link>

    <!-- 使用keep-alive使得切换页面的时候当前页面不会被销毁，提高效率 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'ZSS'
    }
  }
}
</script>

<style>
  .router-link-active{
    color:red;
  }
</style>
