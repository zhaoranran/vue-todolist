<template>
    <div id="footer">
        <span>Written by {{name}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'Jokcy'
        }
    }
}
</script>

<style scoped>
    #footer{
        margin-top: 40px;
        text-align: center;
        color:#bfbfbf;
        font-size: 10px;
        text-shadow: 0 1px 0;
    }
</style>