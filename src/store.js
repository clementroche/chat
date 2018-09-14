import Vue from 'vue'

const store = new Vue({
  data() {
    return {
      messages: [],
      user: null,
      users: [],
      defaultAvatars: ['http://rocheclement.fr/ext/01-avatar.svg', 'http://rocheclement.fr/ext/02-avatar.svg', 'http://rocheclement.fr/ext/03-avatar.svg']
    }
  },
  watch: {
    users() {
      this.users.forEach(user => {
        if (user.avatar === null || (user.avatar != null && !user.avatar.includes('http') || !user.avatar.includes('http'))) {
          user.avatar = this.defaultAvatars[Math.floor(Math.random() * this.defaultAvatars.length)]
        }
      })
    }
  },
  created() {
    Vue.nextTick(() => {
      //  @ts-ignore
      Vue.$api.onError((data) => {
        console.error('Error:', data)
      })

      //  @ts-ignore
      Vue.$api.onMessage((data) => {
        store.users.forEach(user => {
          if (data.message.user.username === user.username) {
            data.message.user.avatar = user.avatar
          }
        })
        store.messages.push(data.message)
      })

      //  @ts-ignore
      Vue.$api.onUsersUpdate(({
        type,
        user,
        users
      }) => {
        if (store.users.length === 0) {
          store.users = users
        }
        if (type === 'join') {
          //  push
          store.users.push(user)
        }
        if (type === 'left') {
          for (let i = 0; i < store.users.length; i++) {
            if (store.users[i].username === user[0].username) {
              store.users.splice(i, 1)
            }
          }
        }
      })
    })
  }
})

export default store
