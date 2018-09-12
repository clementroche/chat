<template>
    <div>
        <input type="text" v-model="message" v-on:keyup.enter="submit" placeholder="Evrivez votre message"><button @click="submit">Envoyer</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: ''
        }
    },
    methods: {
        submit () {
            if(this.message != '')
                this.$emit('messageSent', this.message)
                this.message = ''
        }
    }
}
</script>

