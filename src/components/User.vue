<template>
    <div :class="{ 'current':currentuser }" class="user">
        <div class="img-container">
          <img :src="user.avatar" alt="">
          <div class="statut">
            <img src="../assets/svg/bouee-verte.svg" alt="">
          </div>
        </div>
        <div class="username">{{ user.username }}</div>
      </div>
</template>

<script>

export default {
  name: 'ChatBox',
  props:['user','currentuser']
}
</script>

<style lang="scss" scoped>
.user{
  background-color:#FFFFFF;
  width:50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 100px;
  padding:15px 20px;
  margin-bottom:10px;
  width: 275px;
  margin-left:25px;
  margin-right:25px;
}

.user .img-container{
  width:50px;
  height: 50px;
  border-radius: 100px;
  position: relative;
}

.user .img-container img{
  width:100%;
  border-radius: 100px;
}

.user .username{
      font-family: 'Courier New', Courier, monospace;
    margin:0;
    text-align:center;
    font-weight: normal;
    color: #D8D8D8;
    font-size: 20px;
}

.user .statut{
  position: absolute;
  height: 15px;
  width: 15px;
  bottom:0;
  right: 0px;
}
</style>
