<template>
    <div id="login">
        {{ title }}
        <router-link to="Chat">Chat</router-link>
    </div>
</template>


<script>
export default {
  name: 'Login',
  data () {
    return {
      title: 'Login.vue'
    }
  }
}
</script>

<style scoped lang="scss">

$color-red: #FF0000;

a{
    color: $color-red;
}

</style>