<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components:{
    TheHeader
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

html, body {
  margin:0;
}

body{
  width:100vw;
  height: 100vh;
}

#app{
  width:100%;
  height: 100%;
}

*{
  box-sizing: border-box;
}
</style>