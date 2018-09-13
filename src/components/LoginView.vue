<template>
<div id="login">
  <the-header></the-header>
      <div class="top"></div>
      <div class="bottom">
        <div class="avatars">
          <div class="img-container" v-if="index != 0 && index != 4" v-for="(avatar,index) in avatars" :key="index" :class="{ 'current':(index == 2) }" @click="switchAvatar(index)">
            <img :src="'http://rocheclement.fr/ext/' + avatar + '.svg'" alt="">
          </div>
        </div>
        <form action="" @submit.prevent="login">
          <input type="text" name="" id="" v-model="pseudo" :placeholder="placeholder" @focus="resetPlaceholder" @blur="setPlaceholder">
          <input type="text" name="" id="" v-model="avatar" hidden>
          <button type="submit">valider</button>
        </form>
      </div>
    </div>
</template>


<script>
import store from '@/store'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'LoginView',
  data () {
    return {
      placeholder:'Ecrivez votre nom...',
      title: 'Login.vue',
      pseudo:'',
      avatar:'',
      currentAvatar:3,
      avatars: [
        '03-avatar','01-avatar','02-avatar','03-avatar','01-avatar'
      ]
    }
  },
  methods : {
    login() {
      if(this.pseudo.length>0){
        this.$api.userRegister(
          this.user.username,
          this.user.avatar
        )
        .then((user) => {
          store.user = user
          this.$router.push({ name: 'chat' })
        })
      }
    },
    resetPlaceholder() {
      this.placeholder = ''
    },
    setPlaceholder() {
      this.placeholder = 'Ecrivez votre nom...'
    },
    // importImage(url) {
    //   return require('@/assets/svg/'+ url +'.svg')
    // },
    switchAvatar(index){
      if(index === 3){
        this.avatars.push(this.avatars[2])
        this.avatars.shift()
      } else if (index === 1) {
        this.avatars.unshift(this.avatars[2])
        this.avatars.pop()
      }
    }
  },
  computed: {
    user () {
      return {
        username: this.pseudo,
        avatar: 'http://rocheclement.fr/ext/' + this.avatars[3] + '.svg'
      }
    }
  },
  components:{
    TheHeader
  }
}
</script>

<style scoped lang="scss">

$color-red: #FF0000;

a{
    color: $color-red;
}

#login {
  height: 100vh;
}

.top, .bottom{
  height: 50%;
}

.top{
  background-color:#E5F5F8;
}

.bottom{
  position: relative;
}

.avatars{
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: -150px;
  width: 100%;
  justify-content: center;
}

.avatars .img-container:not(.current){
  width: 62px;
  height: 62px;
}

.avatars .img-container.current{
  width:300px;
  height: 300px;
  margin: 0 60px;
}

.avatars .img-container{
  border-radius:1000px;
  cursor: pointer;
}

.avatars .img-container img{
  width: 100%;
  border-radius:1000px;
  
}

form {
  position: absolute;
  top: 45%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

form input{
  height: 60px;
  width: 460px;
  border-radius: 1000px;
  border: none;
  box-shadow: 0px 2px 4px #B0B0B0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
  color: #757575;
  font-size: 18px;
}

form input:focus{
  outline: none;
}

form button{
  all:unset;
  margin-top:25px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
  background-image:url(../assets/svg/bouton-send-04.svg);
  background-size:cover;
  height: 23px;
  width: 67px;
  font-size:12px;
  background-position: -3px -3px;
  background-repeat: no-repeat;
  color:#ffffff;
  cursor: pointer;
}

</style>