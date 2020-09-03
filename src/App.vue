<template>
  <div id="app">
    <div class="cover"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app{
  position: absolute;
  left:0;
  top:0;
  right: 0;
  bottom:0;
}
.cover{
  position: absolute;
  left:0;
  top:0;
  right: 0;
  bottom:0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>
