<template>
    <div>
        <MessagesList :messages="messages"></MessagesList>
        <SendBox @messageSent="sendMessage"></SendBox>
    </div>
</template>

<script>
import SendBox from '@/components/SendBox.vue'
import MessagesList from '@/components/MessagesList.vue'

export default {
  name: 'ChatBox',
  data () {
      return {
          messages: [
              'yo',
              'salut'
          ]
      }
  },
  methods: {
      sendMessage (msg) {
          console.log(msg)
          this.messages.push(msg)
      }
  },
  components: {
    SendBox,
    MessagesList
  }
}
</script>