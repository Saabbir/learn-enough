<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    'app-header': Header,
  }
}
</script>

<style lang="scss">
/*
 * This comment is necessary otherwise `style-resources-loader` plugin won't work.
*/ 
</style>