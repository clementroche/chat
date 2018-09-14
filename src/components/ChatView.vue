<template>
<transition appear name="fade-left">
    <div id="chatview">
        <UsersList></UsersList>
        <ChatBox></ChatBox>
        <Sidebar></Sidebar>
    </div>
</transition>
</template>


<script>
import UsersList from '@/components/UsersList.vue'
import ChatBox from '@/components/ChatBox.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'ChatView',
  data () {
    return {
      title: 'Chat.vue'
    }
  },
  components: {
    UsersList,
    ChatBox,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
  #chatview {
    display: flex;
    height: 100%;
  }
</style>
