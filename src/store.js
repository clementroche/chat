import Vue from 'vue'

const store = new Vue({
  data: {
    messages: [],
    user: null,
    users: []
  },
  created () {
    Vue.nextTick(() => {
      //  @ts-ignore
      Vue.$api.onError((data) => {
        console.error('Error:', data)
      })

      //  @ts-ignore
      Vue.$api.onMessage((data) => {
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
        console.log('usersUpdate')
        if (type === 'join') {
          //  push
          store.users.push(user)
        }
        if (type === 'left') {
          console.log(user[0])
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
