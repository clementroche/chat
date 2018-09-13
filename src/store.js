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
        store.users = users
        if (type === 'join') {
          //  push
        }

        if (type === 'left') {
          // splice index
        }
      })
    })
  }
})

export default store
