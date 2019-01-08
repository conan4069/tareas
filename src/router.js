import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home/HelloWorld.vue'
import base from './components/base/base.vue'
import task from './components/task/task.vue'
import groups from './components/groups/groups.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/base',
      name: 'base',
      component: base
    },
    {
      path: '/task',
      name: 'task',
      component: task
    },
    {
      path: '/groups',
      name: 'groups',
      component: groups
    }
  ]
})
