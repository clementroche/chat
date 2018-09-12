<template>
    <div>
        <input type="text" v-model="message"><button @click="sendMessage">SEND</button>
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
        sendMessage () {
            this.$emit('messageSent', this.message)
            this.message = ''
        }
    }
}
</script>

