import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import nuevos from './nuevos'
import users from './users'
import carrito from './carrito'


export default new Vuex.Store({
  state: {
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    nuevos,
    users,
    carrito
  }
})
