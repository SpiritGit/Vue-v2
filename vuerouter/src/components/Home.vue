<template>
  <div>
      <h2>home</h2>
      <router-link to='/home/news' tag='button'>新闻</router-link>
      <router-link to='/home/messages' tag='button'>消息</router-link>

      <router-view></router-view>
  </div>
  
</template>

<script>
export default {
    name:'Home',
    data(){
      return{
        path:'/home/news'
      }
    },
    activated(){
      this.$router.push(this.path)
    },
}
</script>

<style>

</style>