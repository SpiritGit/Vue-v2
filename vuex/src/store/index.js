import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        counter:1000
    },
    mutations:{
        //方法，默认有个state参数
        //mutations里不要使用异步操作
        //修改state必须通过mutations，方便devtools记录
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        incrementCount(state,count){
            state.counter+=count
        },
        updateInfo(state){
            state.counter = '-10'
        }
    },
    actions:{
        //类似mutations，但是可以进行异步操作,默认有个context参数
        UpdateInfo(context){
            setTimeout( ()=> {
                context.commit('updateInfo')
            },1000)
        }
    },
    getters:{
        //类似于computed属性
        powerCounter(state){
            return state.counter*state.counter
        }
    },
    modules:{
        //模块化，防止以上内容过多
        //语法：
        //a:moduleA  其中moduleA在上面定义好，里面可以放state，getters，mutations，actions
        //在App里或其他页面调用：$store.state.a.xxx
    }
})

export default store