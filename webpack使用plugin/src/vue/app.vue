<template>
    <div class='title'>
        <h2>{{message}}</h2>
        <button @click='btnClick'>button</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue'
    export default {
        name:'App',
        components:{
            Cpn}, 
        data(){
            return {
                message:'hello webpack',
                name:'why' 
        }
        },
        methods:{
            btnClick(){
            }
        }
    }
</script>
    
<style scoped>
    .title{
        color:green;   
    }
</style>