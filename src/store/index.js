import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import nuevos from './nuevos'
import users from './users'


export default new Vuex.Store({
  state: {
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    nuevos,
    users
  }
})
