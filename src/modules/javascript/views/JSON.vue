<template>
  <div class="u-bg-gray">
    <div class="l-wrap">
      <div class="c-content">
        <Sidenav />
        <div class="c-content__main c-copy">
          <!-- JSON -->
          <section>
            <div class="c-box">
              <h2 class="u-mb-20">JSON in JavaScript</h2>
              <p>
                JSON isn't really a part of JavaScript. It's a subset of
                JavaScript. Stands for JavaScript object notation. Because it's
                inspired by JavaScript object literal syntax. Anything that is
                valid JSON is also valid JavaScript object literal syntax but
                not all object literal syntax is valid JSON. In JSON, properties
                have to be wrapped in quotes.
              </p>
            </div>
            <!-- /.c-box -->
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/Sidenav.vue";
export default {
  name: "JSON",
  components: {
    Sidenav,
  },
  beforeMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  },
};
</script>

<style lang="scss" scoped>
</style>