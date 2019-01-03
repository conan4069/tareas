import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenNow:"Ventajas de vue"
  },
  getters:{
    getScreen: state => {
        return state.screenNow
    }
  },
  mutations: {
    setScreen(state,newScreen){
        state.screenNow = newScreen
    }
  },
  actions: {
    setScreen({commit},newScreen){
        commit("setScreen",newScreen)
    }
  }
})
