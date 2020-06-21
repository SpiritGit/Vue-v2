<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click='addition'>+</button>
    <button @click='subtrac'>-</button>
    <button @click='addCount(5)'>+5</button>
    <h2>{{$store.getters.powerCounter}}</h2>
    <button @click='updateInfo'>修改counter</button>
    <hello-vuex></hello-vuex>
    <router-view/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data(){
    return {
      message: '我是App组件',
    }
  },
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtrac(){
      this.$store.commit('decrement')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
    },
    updateInfo(){
      this.$store.dispatch('UpdateInfo')
    }
  }
}
</script>

<style>

</style>
