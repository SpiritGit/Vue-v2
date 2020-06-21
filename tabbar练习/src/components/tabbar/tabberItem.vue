<template>
    <div class='tab-bar-item' @click = 'itemClick'>
        <div v-if='!isActive'><slot name='item-icon'></slot></div>
        <div v-else><slot name='item-icon-active'></slot></div>
        <div :style = 'activeStyle'><slot name='item-text'></slot></div>
        <!-- 这里套在div里面是为了让绑定的class生效而不被插槽替换掉 -->
    </div>
</template>

<script>
export default {
    props:{
        path: String,
        activeColor:{
            type: String,
            default: 'red'
        }
    },
    data(){
        return{
            
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !==-1
            //  == -1 表示找不到
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style>
    .tab-bar-item{
    text-align: center;
    flex: 1;
    /* 均匀等分 flex：1 */
    height: 49px;
    font-size: 14px;
  }

    .tab-bar-item img{
        width: 20px;
        height: 20px;
        margin-top: 3px;
        vertical-align: middle;
        /* vertical-align 去除图片与文字直接的间隙 */
    }
</style>