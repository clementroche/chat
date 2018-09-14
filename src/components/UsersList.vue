<template>
    <div id="userlist">
        <h1>the bottle</h1>
        <div class="currentuser">
            <div class="img-container bounceIn">
                <img :src="currentUser.avatar" alt="">
            </div>
            <div class="username fadeIn">{{ currentUser.username }}</div>
        </div>
        <div class="container fadeIn">
        <div class="counter">Connectés : {{ users.length }}</div>
        <div class="overflow">
        <User v-for="(user,index) in users" :key="index" :user="user" v-if="user.username != currentUser.username"></User>
        </div>
        </div>
    </div>
</template>

<script>
import User from '@/components/User.vue'
import store from '@/store.js'

export default {
  name: 'UsersList',
  computed: {
      users: () => store.users,
      currentUser: () => store.user
  },
  components: {
      User
  }
}
</script>


<style lang="scss" scoped>
#userlist{
    width:40%;
    background-color:#E5F5F8;
    display: flex;
    flex-direction: column;
}

h1{
    text-transform: uppercase;
    font-family: 'Courier New', Courier, monospace;
    margin:0;
    text-align:center;
    font-weight: normal;
    color: #757575;
    font-size: 36px;
    margin-top: 75px;
}

.container{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top:150px;
    animation-duration: 1.75s;
    animation-delay: 0.75s;
    animation-fill-mode: backwards;
}

.counter{
    padding-left: 50px;
    margin-bottom: 25px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
}

.overflow{
    height: 268px;
    overflow: auto;
    margin:0 auto;
}

.currentuser{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 75px;
}

.currentuser .img-container{
    height: 170px;
    width: 170px;
    border: 16px #FFFFFF solid;
    border-radius: 100px;
    animation-delay: 0.75s;
    animation-duration: 0.75s;
    animation-fill-mode: backwards;
}

.currentuser .img-container img {
    width: 100%;
    border-radius: 100px;
}

.currentuser .username{
    font-family: 'Courier New', Courier, monospace;
    font-size: 30px;
    font-weight: normal;
    margin-top:10px;
    animation-delay: 1s;
    animation-duration: 0.75s;
    animation-fill-mode: backwards;
}

</style>