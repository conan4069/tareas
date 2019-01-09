import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenNow:"Ventajas de vue",
    groups:localStorage.getItem('groups') == undefined ?
      []:localStorage.getItem('groups'),
    tasks:localStorage.getItem('task') == undefined ?
      []:localStorage.getItem('task')
  },
  getters:{
    getScreen: state => {
      return state.screenNow
    },
    getGroups: state => {
      return state.groups
    },
    getTasks: state => {
      return state.tasks
    }
  },
  mutations: {
    setScreen(state,newScreen){
      state.screenNow = newScreen
    },
    setTasks(state,newTasks){
      state.tasks = newTasks
    },
    setGroups(state,newGroups){
      state.group = newGroups
    }
  },
  actions: {
    setScreen({commit},newScreen){
      commit("setScreen",newScreen)
    },
    setTasks({commit},newTasks){
      commit("setTasks",newTasks)
    },
    setGroups({commit},newGroups){
      commit("setGroups",newGroups)
    }
  }
})
