import Vue from 'vue'
import VueRouter from 'vue-router'

import JavaScriptRoutes from '@/modules/javascript/routes';

Vue.use(VueRouter)

const routes = [
  ...JavaScriptRoutes,
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../modules/home/views/Home.vue')
  },
  {
    path: '/command-line',
    name: 'CommandLine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "command-line" */ '../modules/command-line/views/CommandLine.vue')
  },
  {
    path: '/text-editor',
    name: 'TextEditor',
    component: () => import(/* webpackChunkName: "text-editor" */ '../modules/text-editor/views/TextEditor.vue')
  },
  {
    path: '/git',
    name: 'Git',
    component: () => import(/* webpackChunkName: "git" */ '../modules/git/views/Git.vue')
  },
  {
    path: '/css',
    name: 'Css',
    component: () => import(/* webpackChunkName: "css" */ '../modules/css/views/Css.vue')
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    component: () => import(/* webpackChunkName: "javascript" */ '../modules/javascript/views/JavaScript.vue')
  },
  {
    path: '/php',
    name: 'Php',
    component: () => import(/* webpackChunkName: "php" */ '../modules/php/views/Php.vue')
  },
  {
    path: '/wordpress',
    name: 'WordPress',
    component: () => import(/* webpackChunkName: "wordpress" */ '../modules/wordpress/views/WordPress.vue')
  },
  {
    path: '/vue',
    name: 'Vue',
    component: () => import(/* webpackChunkName: "wordpress" */ '../modules/vue/views/Vue.vue')
  },
  {
    path: '/html-email',
    name: 'HtmlEmail',
    component: () => import(/* webpackChunkName: "html-email" */ '../modules/html-email/views/HtmlEmail.vue')
  },
  {
    path: '/regex',
    name: 'Regex',
    component: () => import(/* webpackChunkName: "regex" */ '../modules/regex/views/Regex.vue')
  },
  {
    path: '/web-development',
    name: 'WebDevelopment',
    component: () => import(/* webpackChunkName: "web-development" */ '../modules/web-development/views/WebDevelopment.vue')
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
