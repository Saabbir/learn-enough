<template>
  <div class="u-bg-gray">
    <div class="l-wrap">
      <div class="c-content">
        <Sidenav />
        <div class="c-content__main c-copy">
          <h1 class="u-mb-20">JavaScript Introduction</h1>
          <blockquote class="u-mb-20">
            <p>
              JavaScript porgrams are based on a lot of small and complex
              statements. A statement is based on a lot of small and complex
              expressions.
            </p>
          </blockquote>

          <!-- History of JavaScript -->
          <section>
            <div class="c-box">
              <h2 class="u-mb-20">JavaScript History</h2>
              <p>
                JavaScript first created by Brendan Eich at Netscape. Intial
                name of the language was Mocha then LiveScript then JavaScript
                to attract Java Developers at that time. Though JavaScript has
                very little common with Java. JavaScript is not lighter version
                of Java. Both are completly independent programming language.
              </p>

              <h3 class="u-mt-40">Further reading:</h3>
              <ul class="u-mt-20 u-pl-20">
                <li>
                  <a href="https://en.wikipedia.org/wiki/JavaScript#History"
                    >JavaScript History Section on Wikipedia</a
                  >
                </li>
                <li>
                  <a
                    href="https://auth0.com/blog/a-brief-history-of-javascript/"
                    >Brief History of JavaScript on Auth Blog</a
                  >
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "@/modules/javascript/components/Sidenav.vue";
export default {
  components: {
    Sidenav,
  },
  name: "Introduction",
  beforeMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  },
};
</script>