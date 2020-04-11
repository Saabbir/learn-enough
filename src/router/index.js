import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../modules/Home.vue'

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
    component: () => import(/* webpackChunkName: "command-line" */ '../modules/command-line/CommandLine.vue')
  },
  {
    path: '/text-editor',
    name: 'TextEditor',
    component: () => import(/* webpackChunkName: "text-editor" */ '../modules/TextEditor.vue')
  },
  {
    path: '/git',
    name: 'Git',
    component: () => import(/* webpackChunkName: "git" */ '../modules/Git.vue')
  },
  {
    path: '/css',
    name: 'Css',
    component: () => import(/* webpackChunkName: "css" */ '../modules/css/Css.vue')
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    component: () => import(/* webpackChunkName: "javascript" */ '../modules/javascript/views/JavaScript.vue')
  },
  {
    path: '/php',
    name: 'Php',
    component: () => import(/* webpackChunkName: "php" */ '../modules/php/Php.vue')
  },
  {
    path: '/wordpress',
    name: 'WordPress',
    component: () => import(/* webpackChunkName: "wordpress" */ '../modules/WordPress.vue')
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
