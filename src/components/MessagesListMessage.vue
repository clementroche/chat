<template>
    <li>
      <div class="message" :class="{'current':(message.user.username === currentUser.username)}">
        <div class="left">
          <div class="img-container">
            <img :src="message.user.avatar" alt="" v-if="message.user.avatar.includes('http')">
            <img src="http://rocheclement.fr/ext/02-avatar.svg" alt="" v-else>
          </div>
          <span class="time">10:25</span>
        </div>
        <div class="right">
          <span class="username">{{ message.user.username }}</span>
          <span class="text">{{ message.text}}</span>
        </div>
      </div>
    </li>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'MessageListMessage',
  props: ['message'],
  computed: {
    currentUser: () => store.user
  }
}
</script>

<style lang="scss">
  .message{
    display: flex;
    flex-direction: row;
    margin-bottom:50px;
  }

  .message.current{
    justify-content: flex-end;
  }

  .message.current .left{
    order:5;
    margin-right:0;
    margin-left: 15px;
  }

  .right,.left{
    display: flex;
    flex-direction: column;
  }

  span.text{
    width:250px;
  }

  .left{
    justify-content: flex-end;
    margin-right:15px;
    align-items: center;
  }

  .username{
    text-align: left;
    font-family: 'Courier New', Courier, monospace;
    font-weight: normal;
    color: #757575;
    font-size: 14px;
    margin-bottom:4px;
  }

  .text{
    font-family: 'Courier New', Courier, monospace;
    background-color: #EEEEEE;
    padding:15px;
    color: #757575;
    font-size: 16px;
    border-radius: 12px;
  }

  .img-container{
    border-radius: 100px;
    height: 35px;
    width: 35px;
  }

  .img-container img{
    border-radius: 100px;
    width:100%;
  }

  .time{
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    color: #757575;
    margin-top:5px;
  }
</style>

