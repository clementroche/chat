<template>
    <div id="login">
        {{ title }}
    </div>
</template>


<script>
export default {
  name: 'LoginView',
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