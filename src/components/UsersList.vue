<template>
    <div id="userlist">
        <User v-for="(user,index) in users" :key="index" :user="user"></User>
    </div>
</template>

<script>
import User from '@/components/User.vue'
import store from '@/store.js'

export default {
  name: 'UsersList',
  computed: {
      users: () => store.users
  },
  components: {
      User
  }
}
</script>


<style lang="scss" scoped>
#userlist{
    width:40%;
}
</style>