<template>
    <div>

        {{test}}
        <a>11</a>
    </div>
</template>

<script>
import {test} from "../services"
    export default {
    components:{
    
    },
        name:'nameTest',
        data(){
            return{
                test:'测试页面'
            }
        },
        created(){
            test().then(res=>{
                console.log(res)
            })
        },
    }
</script>

<style scoped>

</style>