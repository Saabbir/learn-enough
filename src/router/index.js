import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/command-line',
    name: 'CommandLine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "command-line" */ '../views/command-line/CommandLine.vue')
  },
  {
    path: '/text-editor',
    name: 'TextEditor',
    component: () => import(/* webpackChunkName: "text-editor" */ '../views/TextEditor.vue')
  },
  {
    path: '/git',
    name: 'Git',
    component: () => import(/* webpackChunkName: "git" */ '../views/Git.vue')
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    component: () => import(/* webpackChunkName: "javascript" */ '../views/javascript/JavaScript.vue')
  },
  {
    path: '/php',
    name: 'Php',
    component: () => import(/* webpackChunkName: "php" */ '../views/php/Php.vue')
  },
  {
    path: '/wordpress',
    name: 'WordPress',
    component: () => import(/* webpackChunkName: "wordpress" */ '../views/WordPress.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
