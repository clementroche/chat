<template>
    <li>{{ message.user.username }}: {{ message.text}}</li>
</template>

<script>
export default {
  name: 'MessageListMessage',
  props: ['message']
}
</script>
