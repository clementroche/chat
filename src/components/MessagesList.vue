<template>
    <ul>
        <MessagesListMessage v-for="(message, index) in messages" :key="index" :message="message"></MessagesListMessage>
    </ul>
</template>

<script>
import MessagesListMessage from '@/components/MessagesListMessage.vue'

export default {
  name: 'MessageList',
  props: ['messages'],
  components: {
      MessagesListMessage
  }
}
</script>
