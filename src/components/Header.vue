<template>
  <header class="c-site-header" role="banner">
    <div class="l-wrap">
      <nav class="c-site-header__navigation" role="navigation">
        <div class="c-site-header__logo">
          <router-link :to="{ name: 'Home' }" class="c-site-header__logo-link">
            <span class="c-site-header__logo-text-learn">learn</span>
            <span class="c-site-header__logo-text-enough">Enough</span>
          </router-link>
        </div>
        <button class="c-toggle-mobile-nav"></button>
        <ul class="c-menu">
          <li>
            <router-link :to="{ name: 'CommandLine' }"
              >Command Line</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'TextEditor' }">Text Editor</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Git' }">Git</router-link>
          </li>
          <li class="c-dropdown-menu-wrapper">
            <router-link :to="{ name: 'JavaScript' }">JavaScript</router-link>
            <Sidenav className="c-dropdown-menu" />
          </li>
          <li>
            <router-link :to="{ name: 'Php' }">PHP</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'WordPress' }">WordPress</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.l-wrap -->
  </header>
</template>

<script>
import Sidenav from "@/modules/javascript/components/Sidenav.vue";
export default {
  name: "Header",
  components: {
    Sidenav,
  },
  mounted() {
    /**
     * Mobile Menu Functionality
     */
    !(function () {
      const menuToggleBtn = document.querySelector(".c-toggle-mobile-nav");
      const menu = document.querySelector(".c-menu");

      function hideDropdownMenu() {
        menu.classList.remove("is-visible");
        menuToggleBtn.classList.remove('is-active');
      }

      function toggleDropdownMenu() {
        menu.classList.toggle("is-visible");
        menuToggleBtn.classList.toggle('is-active');
      }
      
      menu.querySelectorAll('a').forEach(el => el.addEventListener('click', hideDropdownMenu));
      menuToggleBtn.addEventListener("click", toggleDropdownMenu);
    })();
  },
};
</script>