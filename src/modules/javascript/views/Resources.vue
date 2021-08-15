<template>
  <div class="u-bg-gray">
    <div class="l-wrap">
      <div class="c-content">
        <Sidenav />
        <div class="c-content__main">
          <div class="c-copy">
            <section class="c-box">
              <h2 class="u-mb-40 u-underline">
                Curated List of JavaScript Learning Resources
              </h2>
              <div class="u-mb-40">
                <h3 class="u-mb-20">Blogs to follow</h3>
                <ul>
                  <li>
                    <a href="https://tylermcginnis.com/blog/"
                      >Tyler McGinnis Blog</a
                    >
                  </li>
                  <li>
                    <a href="https://2ality.com/">Dr. Axel Rauschmayer Blog</a>
                  </li>
                  <li>
                    <a href="https://humanwhocodes.com/"
                      >Nicholas C. Zakas Blog</a
                    >
                  </li>
                  <li><a href="https://css-tricks.com/">CSS Tricks</a></li>
                  <li>
                    <a href="https://gomakethings.com/">Chris Ferdinandi</a>
                  </li>
                  <li><a href="https://laracasts.com/">Laracast</a></li>
                </ul>
              </div>
              <div class="u-mb-40">
                <h3 class="u-mb-20">Development Tools</h3>
                <ul>
                  <li><a href="https://caniuse.com/">Can I Use?</a></li>
                  <li>
                    <a href="http://kangax.github.io/compat-table/es6/"
                      >ECMAScript compatibility table</a
                    >
                  </li>
                  <li>
                    <a href="https://tylermcginnis.com/javascript-visualizer/"
                      >JavaScript Visualizer</a
                    >
                  </li>
                  <li>
                    <a href="https://vanillajstoolkit.com/"
                      >The Vanilla JS Toolkit</a
                    >
                  </li>
                  <li><a href="https://plainjs.com/">Plain JS</a></li>
                  <li><a href="https://html5test.com/">HTML5Test</a></li>
                </ul>
              </div>
              <div class="u-mb-40">
                <h3 class="u-mb-20">Series</h3>
                <ul>
                  <li>
                    <a href="https://atom-morgan.github.io/javascript/"
                      >Code Companion series by Adam Morgan</a
                    >
                  </li>
                  <li>
                    <a href="https://javascript.christmas/"
                      >Javascript Christmas</a
                    >
                  </li>
                </ul>
              </div>
              <div class="u-mb-40">
                <h3 class="u-mb-20">Articles</h3>
                <ul>
                  <li>
                    <a
                      href="https://dmitripavlutin.com/javascript-classes-complete-guide/"
                      target="_blank"
                      >The Complete Guide to JavaScript Classes</a
                    >
                  </li>
                </ul>
              </div>
              <div class="u-mb-40">
                <h3 class="u-mb-20">Courses</h3>
                <ul>
                  <li>
                    <a
                      href="http://learnwith.hasinhayder.com/js/"
                      target="_blank"
                      >Begining JavaScript</a
                    >
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/Sidenav.vue";
export default {
  name: "Resources",
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