<template>
    <div id="sendbox" class="fadeInUp">
        <input type="text" v-model="message" v-on:keyup.enter="submit" :placeholder="placeholder" @focus="resetPlaceholder" @blur="setPlaceholder"><button @click="submit">Envoyez</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: '',
            placeholder:'Ecrivez votre message...'
        }
    },
    methods: {
        submit () {
            if(this.message != '')
                this.$emit('messageSent', this.message)
                this.message = ''
                let audio = new Audio(require('@/assets/media/send-message3.mp3'));
                audio.play();
        },
        resetPlaceholder() {
            this.placeholder = ''
        },
        setPlaceholder() {
            this.placeholder = 'Ecrivez votre nom...'
        },
    }
}
</script>

<style lang="scss" scoped>
#sendbox{
    display:flex;
    align-items:center;
    justify-content: center;
}

input{
  height: 35px;
  width: 460px;
  border-radius: 1000px;
  border: none;
  box-shadow: 0px 2px 4px #B0B0B0;
  text-align: left;
  font-family: 'Courier New', Courier, monospace;
  font-weight: normal;
  color: #D8D8D8;
  font-size: 14px;
  padding:0 25px;
  margin-right: 25px;
}

input:focus{
  outline: none;
}

button{
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
  margin:0;
}
</style>

