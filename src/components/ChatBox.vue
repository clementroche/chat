<template>
    <div id="chatbox">
        <MessagesList :messages="messages" ref="messageList"></MessagesList>
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
  watch: {
      messages () {
          this.$refs.messageList.scrollToBottom();
      }
  },
  components: {
    SendBox,
    MessagesList
  }
}
</script>

<style lang="scss" scoped>
#chatbox{
    width:60%;
    // height: 80%;
    padding-right:75px;
}
</style>
