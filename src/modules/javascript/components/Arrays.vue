<template>
  <div class="c-copy">

    <!-- ARRAY PROPERTIES -->
    <section>
      <div class="c-box">
        <h2 class="u-top-el">Most used array methods:</h2>
        <ul class="u-bottom-el">
          <li><a href="#">push()</a></li>
          <li><a href="#">pop()</a></li>
          <li><a href="#">shift()</a></li>
          <li><a href="#">unshift()</a></li>
          <li><a href="#">includes()</a></li>
          <li><a href="#">indexOf()</a></li>
          <li><a href="#">slice()</a></li>
          <li><a href="#">splice()</a></li>
          <li><a href="#">concat()</a></li>
          <li><a href="#">join()</a></li>
          <li><a href="#">forEach()</a></li>
          <li><a href="#">every()</a></li>
          <li><a href="#">some()</a></li>
          <li><a href="#">find()</a></li>
          <li><a href="#">findIndex()</a></li>
          <li><a href="#">filter()</a></li>
          <li><a href="#">sort()</a></li>
          <li><a href="#">reduce()</a></li>
        </ul>
      </div><!-- /.c-box -->
    </section>
    
  </div>
</template>

<script>
  export default {
    name: 'Arrays',
    beforeMount() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      })
    },
  }
</script>