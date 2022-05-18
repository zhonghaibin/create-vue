import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import app from './modules/app'

Vue.use(Vuex)

const modules = {}
const files = require.context('./modules', false, /\.js$/)
files.keys().forEach((key) => {
  modules[key.replace(/(modules|\/|\.|js)/g, '')] = {
    ...files(key).default,
    namespaced: true,
  }
})

const store = new Vuex.Store({
  modules: {
    app,
    user,
  },
})
console.log(store, 'store')
export default store
