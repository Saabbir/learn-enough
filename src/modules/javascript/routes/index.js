export default [
  {
    path: '/javascript/introduction',
    name: 'JavaScript_Introduction',
    component: () => import(/* webpackChunkName: "JavaScript_Introduction" */ '@/modules/javascript/views/Introduction.vue')
  },
  {
    path: '/javascript/data-types',
    name: 'JavaScript_Data_Types',
    component: () => import(/* webpackChunkName: "JavaScript_Data_Types" */ '@/modules/javascript/views/DataTypes.vue')
  },
  {
    path: '/javascript/strings',
    name: 'JavaScript_Strings',
    component: () => import(/* webpackChunkName: "JavaScript_Strings" */ '@/modules/javascript/views/Strings.vue')
  },
  {
    path: '/javascript/functions',
    name: 'JavaScript_Functions',
    component: () => import(/* webpackChunkName: "JavaScript_Functions" */ '@/modules/javascript/views/Functions.vue')
  },
  {
    path: '/javascript/arrays',
    name: 'JavaScript_Arrays',
    component: () => import(/* webpackChunkName: "JavaScript_Arrays" */ '@/modules/javascript/views/Arrays.vue')
  },
  {
    path: '/javascript/objects',
    name: 'JavaScript_Objects',
    component: () => import(/* webpackChunkName: "JavaScript_Objects" */ '@/modules/javascript/views/Objects.vue')
  },
  {
    path: '/javascript/json',
    name: 'JavaScript_JSON',
    component: () => import(/* webpackChunkName: "JavaScript_JSON" */ '@/modules/javascript/views/JSON.vue')
  },
  {
    path: '/javascript/under-the-hood',
    name: 'JavaScript_Under_The_Hood',
    component: () => import(/* webpackChunkName: "JavaScript_Under_The_Hood" */ '@/modules/javascript/views/UnderTheHood.vue')
  },
  {
    path: '/javascript/client-side-javascript',
    name: 'JavaScript_Client_Side',
    component: () => import(/* webpackChunkName: "JavaScript_Client_Side" */ '@/modules/javascript/views/ClientSideJS.vue')
  },
  {
    path: '/javascript/async-js',
    name: 'JavaScript_Async',
    component: () => import(/* webpackChunkName: "JavaScript_Async" */ '@/modules/javascript/views/AsyncJS.vue')
  },
  {
    path: '/javascript/learning-resources',
    name: 'JavaScript_Learning_Resources',
    component: () => import(/* webpackChunkName: "JavaScript_Learning_Resources" */ '@/modules/javascript/views/Resources.vue')
  },
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