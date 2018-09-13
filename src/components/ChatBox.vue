<template>
    <div>
        <MessagesList :messages="messages"></MessagesList>
        <SendBox @messageSent="sendMessage"></SendBox>
    </div>
</template>

<script>
import SendBox from '@/components/SendBox.vue'
import MessagesList from '@/components/MessagesList.vue'
import store from '@/store.js'

export default {
  name: 'ChatBox',
  methods: {
      sendMessage (msg) {
          console.log(msg)
          //store.messages.push(msg)
          this.$api.messageSend(msg)
      }
  },
  computed: {
      messages: () => store.messages
  },
  components: {
    SendBox,
    MessagesList
  }
}
</script>