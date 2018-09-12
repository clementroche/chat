<template>
    <div>
        <User v-for="(user,index) in users" :key="index" :user="user"></User>
    </div>
</template>

<script>
import User from '@/components/User.vue'

export default {
  name: 'UsersList',
  data () {
      return {
          users:[
              'user1',
              'user2',
              'user3'
          ]
      }
  },
  components: {
      User
  }
}
</script>