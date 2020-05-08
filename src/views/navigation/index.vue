<template>
    <div>
        <router-view></router-view>
      <navigation-form/>
    </div>
</template>

<script>
    import NavigationForm from '@/components/navigation'
    export default {
        name:'Navigation',
        components:{NavigationForm},
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>