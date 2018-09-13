<template>
    <div id="messagelist">
        <ul ref="ul">
            <MessagesListMessage v-for="(message, index) in messages" :key="index" :message="message"></MessagesListMessage>
        </ul>
    </div>
</template>

<script>
import MessagesListMessage from '@/components/MessagesListMessage.vue'

export default {
  name: 'MessageList',
  props: ['messages'],
  components: {
      MessagesListMessage
  },
  methods: {
      scrollToBottom () {
          setTimeout(() => {
              this.$refs.ul.scrollTo(0,100000*1000000)
          },0)
      }
  }
}
</script>

<style lang="scss" scoped>
#messagelist{
    height: 85%;
    padding-top:150px;
    padding-bottom:75px;
}
ul{
    height: 100%;
    margin:0;
    padding:0;
    list-style: none;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:0 15px;
}
</style>
