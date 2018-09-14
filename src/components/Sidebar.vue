<template>
    <div id="sidebar">
        <div class="img-container" @click="logout()">
            <img src="../assets/svg/logout.svg" alt="">
        </div>
    </div>
</template>

<script>
import store from '@/store.js'

export default {
    methods: {
        logout () {
            store.user = null
            this.$router.replace('login')
        }
    }
}
</script>


<style lang="scss" scoped>
#sidebar{
    width:75px;
    background-color:#E5F5F8;
    margin-left: auto;
}

.img-container{
    width: 30px;
    height: 40px;
    margin:25px auto;
}
</style>
