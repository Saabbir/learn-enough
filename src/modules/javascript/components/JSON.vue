<template>
  <div class="c-copy">

    <!-- JSON -->
    <section>
      <div class="c-box">
        <h2 class="u-top-el">JSON in JavaScript</h2>
        <p>
          JSON isn't really a part of JavaScript. It's a subset of JavaScript. Stands for JavaScript object notation.
          Because it's inspired by JavaScript object literal syntax. Anything that is valid JSON is also valid
          JavaScript
          object literal syntax but not all object literal syntax is valid JSON. In JSON, properties have to be wrapped
          in
          quotes.
        </p>
      </div><!-- /.c-box -->
    </section>
    
  </div>
</template>

<script>
  export default {
    name: 'JSON',
    beforeMount() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>