<template>
  <div class="u-bg-gray">
    <div class="l-wrap">
      <div class="c-content">
        <Sidenav />
        <div class="c-content__main c-copy">
          <h1 class="u-mb-20">Learn enough JavaScript</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            aperiam a ipsum inventore ullam et voluptatem blanditiis voluptas
            corrupti officiis quia, fugit dicta? A nobis sequi non impedit minus
            molestias.
          </p>
          <section class="c-box u-mt-20">
            <h2 class="u-mb-20">Tips and tricks</h2>
            <blockquote>
              <p class="u-mb-20">How to remember Operator Precedence?</p>
              <h4>My Dear Aunt Sally</h4>
              <p>
                <strong>M</strong>y ( Multiplication ) <strong>D</strong>ear (
                Division ) <strong>A</strong>unt ( Addition )
                <strong>S</strong>ally ( Subtraction )
              </p>
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "@/modules/javascript/components/Sidenav.vue";
export default {
  name: "JavaScript",
  methods: {
    toggleSidenav() {
      this.$refs.sidenav.classList.toggle("c-sidenav--is-open");
    },
  },
  components: {
    Sidenav,
  },
  mounted() {
    window.Prism.highlightAll();
  },
};
</script>