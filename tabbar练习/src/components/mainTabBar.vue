<template>
  <div >
      <tab-bar>
      <tab-bar-item path='/home' activeColor = 'blue'>
        <img slot='item-icon' src="../assets/img/tabbar/default.jpg" alt="">
        <img slot='item-icon-active' src="../assets/img/tabbar/购物车.png" alt="">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor = 'blue'>
        <img slot='item-icon' src="../assets/img/tabbar/default.jpg" alt="">
        <img slot='item-icon-active' src="../assets/img/tabbar/购物车.png" alt="">
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor = 'blue'>
        <img slot='item-icon' src="../assets/img/tabbar/default.jpg" alt="">
        <img slot='item-icon-active' src="../assets/img/tabbar/购物车.png" alt="">
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor = 'blue'>
        <img slot='item-icon' src="../assets/img/tabbar/default.jpg" alt="">
        <img slot='item-icon-active' src="../assets/img/tabbar/购物车.png" alt="">
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
  
</template>

<script>
  import TabBar from './tabbar/tabbar'
  import TabBarItem from './tabbar/tabberItem'
export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>