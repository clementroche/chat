<template>
    <div id="chat">
        {{ title }}
        <router-link to="login">Login</router-link>
        <UsersList></UsersList>
        <ChatBox></ChatBox>
    </div>
</template>


<script>
import UsersList from '@/components/UsersList.vue'
import ChatBox from '@/components/ChatBox.vue'

export default {
  name: 'ChatView',
  data () {
    return {
      title: 'Chat.vue'
    }
  },
  components: {
    UsersList,
    ChatBox
  }
}
</script>