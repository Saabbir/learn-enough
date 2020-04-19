export default [
  {
    path: '/javascript/es6',
    name: 'ES6',
    component: () => import(/* webpackChunkName: "es6" */ '@/modules/javascript/views/ES6.vue')
  },
  {
    path: '/javascript/whole-javascript',
    name: 'WholeJavaScript',
    component: () => import(/* webpackChunkName: "whole-javascript" */ '@/modules/javascript/views/WholeJavaScript.vue')
  },
]