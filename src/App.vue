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

<style src="./assets/css/animate.css">

</style>


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
  overflow: hidden;
}

*{
  box-sizing: border-box;
}



.fade-left-enter-active, .fade-left-leave-active {
  transition: 0.5s ease-out;
}
.fade-left-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100vw)
}

.fade-left-leave-to{
  opacity: 0;
  transform: translateX(100vw)
}

.fade-right-enter-active, .fade-right-leave-active {
  transition: 0.5s ease-out;
}
.fade-right-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100vw)
}

.fade-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100vw)
}





/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
::-webkit-scrollbar {
  width: 10px;
  height: 8px;
  background: linear-gradient(to left,rgba(255,255,255,0.001) 34%, rgba(216,216,216,1) 35%, rgba(216,216,216,1) 65%,rgba(255,255,255,0.001) 65%); /* or add it to the track */
}
/* Add a thumb */
::-webkit-scrollbar-thumb {
    background: rgba(216,216,216,1);
    border-radius: 100px;
}
</style>