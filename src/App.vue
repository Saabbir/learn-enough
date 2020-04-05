<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>

    <button id="back-to-top">↑</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    'app-header': Header,
  },
  mounted() {
    !function () {
      const viewportHeight = window.innerHeight
      const backToTopEl    = document.querySelector('#back-to-top')

      window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > (viewportHeight / 2)) {
          backToTopEl.classList.add('is-visible')
        } else {
          backToTopEl.classList.remove('is-visible')
        }
      })

      backToTopEl.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
      })
    }()
  },
}
</script>

<style lang="scss">
/*
 * This comment is necessary otherwise `style-resources-loader` plugin won't work.
*/ 
</style>