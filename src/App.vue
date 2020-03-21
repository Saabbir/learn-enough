<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
/*
 * This comment is necessary otherwise `style-resources-loader` plugin won't work.
*/ 
</style>