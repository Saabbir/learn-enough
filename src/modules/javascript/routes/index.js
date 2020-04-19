export default [
  {
    path: '/javascript/resources',
    name: 'JavaScriptResources',
    component: () => import(/* webpackChunkName: "javascript-resources" */ '@/modules/javascript/views/Resources.vue')
  },
]