<template>
    <div id="messagelist">
        <transition-group tag="ul" ref="ul" name="list">
            <MessagesListMessage v-for="(message, index) in messages" :key="index" :message="message"></MessagesListMessage>
        </transition-group>
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
              this.$refs.ul.$el.scrollTo(0,100000*1000000)
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

.list-enter-active, .list-leave-active {
  transition: all 0.5s ease-out;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
    transform: scale(0.5)
}
</style>
