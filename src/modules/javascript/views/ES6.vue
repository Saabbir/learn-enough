<template>
  <div class="u-bg-gray">
    <div class="l-wrap">
      <div class="c-content">
        <Sidenav />
        <div class="c-content__main">
          <section class="c-box c-copy">
            <h2 class="u-mb-20">The most important features of ES2015</h2>
            <ul class="u-mt-20">
              <li>
                Block Scoping (<a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"
                  >Let</a
                >
                and
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
                  >Const</a
                >)
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
                  >Template Literals</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
                  >Arrow Functions</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters"
                  >Default Parameters</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"
                  >Rest Parameters</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
                  >Spread Syntax</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer"
                  >Enhanced Object Initializer</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions"
                  >Enhanced Object Method Definitions</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
                  >Destructuring Assignment</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
                  >Classes</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"
                  >Generator functions</a
                >
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
                  >Promise</a
                >
              </li>
            </ul>
          </section>
          <!-- /.c-box -->
          <!-- Let and Const -->
          <section id="let-and-const" class="c-box u-bottom-el">
            <h2 class="u-mb-20">Let and Const</h2>
            <h3 class="u-mt-20">Useful articles:</h3>
            <ul class="u-mt-20">
              <li>
                <a href="https://mathiasbynens.be/notes/es6-const"
                  >Mathias Bynens article on <code>let</code> and
                  <code>const</code></a
                >
              </li>
            </ul>
            <details class="u-mt-20" open>
              <summary>
                Mathias Bynens article summary on <code>let</code> and
                <code>const</code>
              </summary>
              <ul class="u-mt-20">
                <li>use <code>const</code> by default</li>
                <li>only use <code>let</code> if rebinding is needed</li>
                <li>(<code>var</code> shouldn’t be used in ES2015)</li>
              </ul>
            </details>
          </section>
          <!-- /.c-box -->

          <div class="c-box u-mt-20">
            <!-- Further reading -->
            <div class="c-table-responsive">
              <table class="c-table">
                <caption>
                  Further reading
                </caption>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://www.telerik.com/blogs/es6-syntax-features-and-additions"
                        target="_blank"
                        >ES6 Syntax, Features and Additions: A Reference
                        Guide</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="https://bytearcher.com/articles/roadmap-for-learning-javascript-language/"
                        target="_blank"
                        >Roadmap for learning the JavaScript language</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.c-table-responsive -->
          </div>
        </div>
        <!-- /.l-col -->
      </div>
      <!-- /.l-row -->
    </div>
    <!-- /.l-wrap -->
  </div>
</template>

<script>
import Sidenav from "../components/Sidenav.vue";
export default {
  name: "ES6",
  components: {
    Sidenav,
  },
};
</script>