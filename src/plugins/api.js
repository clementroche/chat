import io from 'socket.io-client'

const socket = io.connect('https://bddi-2019-chat.herokuapp.com')

const api = {

  get connected () {
    return socket.connected
  },
  userRegister (username, avatar = '') {
      console.log(username)
    return new Promise((resolve, reject) => {
      socket.once('user registered', (user) => {
        resolve(user)
      })
      socket.once('error', (error) => {
        reject(error)
      })
      emitProxy('user register', {
        username,
        avatar
      })
    })
  },
  messageSend (message = '') {
    emitProxy('message new', message)
  },
  commandeSend (command, value = '') {
    this.messageSend(`/${command} ${value}`)
  },
  onMessage (cb) {
    socket.on('message new', cb)
  },
  onUsersUpdate (cb) {
    socket.on('users update', cb)
  },
  onError (cb) {
    socket.on('chat error', cb)
  }

}

function emitProxy (event, ...args) {
  if (socket.connected) {
    socket.emit(event, ...args)
  } else {
    console.log('Socket disconnected... Waiting for connect.')
    socket.on('connect', () => {
      console.log('Socket reconnected. Emiting.')
      socket.emit(event, ...args)
    })
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$api = Vue.$api = api
  }
}
