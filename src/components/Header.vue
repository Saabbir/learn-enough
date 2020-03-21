<template>
  <header class="c-site-header" role="banner">
    <div class="l-wrap">
      <nav class="c-site-header__navigation" role="navigation">
        <div class="c-site-header__logo">
          <a href="#">
            <img src="../assets/logo-white.png" alt="Logo">
          </a>
        </div>
        <button class="toggle-mobile-nav"></button>
        <ul class="menu">
          <li><a href="#">Command Line</a></li>
          <li><a href="#">Text Editor</a></li>
          <li><a href="#">Git</a></li>
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">PHP</a></li>
          <li><a href="#">and more...</a></li>
        </ul>
      </nav>
    </div><!-- /.l-wrap -->
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>