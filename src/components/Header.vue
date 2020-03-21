<template>
  <header class="c-site-header" role="banner">
    <div class="l-wrap l-wrap--full">
      <nav class="c-site-header__navigation" role="navigation">
        <div class="c-site-header__logo">
          <router-link :to="{ name: 'Home' }">
            <img src="../assets/logo-white.png" alt="Logo">
          </router-link>
        </div>
        <button class="toggle-mobile-nav"></button>
        <ul class="menu">
          <li>
            <router-link :to="{ name: 'CommandLine' }">Command Line</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'TextEditor' }">Text Editor</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Git' }">Git</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'JavaScript' }">JavaScript</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Php' }">PHP</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'WordPress' }">WordPress</router-link>
          </li>
        </ul>
      </nav>
    </div><!-- /.l-wrap -->
  </header>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    /**
     * Mobile Menu Functionality
     */
    (function(){
      const menuToggleBtn = document.querySelector('.toggle-mobile-nav')
      const menu = document.querySelector('.menu')
      menuToggleBtn.addEventListener('click', function() {
        menu.classList.toggle('show')
        this.classList.toggle('active')
      })
    })()
  }
}
</script>