<template>
    <div class="content">
        <Header></Header>
        <!-- <router-view/> -->
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './header'
import Footer from './Footer'
import Todo from '@/components/todo.vue'
export default {
    data(){
        return {

        }
    },
    components:{
        Header,
        Footer,
        Todo
    }
}
</script>

<style lang="">
    
</style>