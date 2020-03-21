<template>
  <main class="site-main" role="main">
    <div class="l-wrap">
      <div class="l-row">
        <div class="l-col l-col--md-10 l-col--offset-md-1">
          <section class="c-box c-copy">
            <h2 class="u-top-el">The most important features of ES2015</h2>
            <ul class="u-bottom-el">
              <li>Block Scoping (<a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">Let</a> and <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">Const</a>)
              </li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">Template
                  Literals</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow
                  Functions</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">Default
                  Parameters</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Rest
                  Parameters</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">Spread
                  Syntax</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Enhanced
                  Object Initializer</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions">Enhanced
                  Object Method Definitions</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Destructuring
                  Assignment</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">Classes</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*">Generator
                  functions</a></li>
              <li><a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>
              </li>
            </ul>
          </section><!-- /.c-box -->
          <!-- Let and Const -->
          <section id="let-and-const" class="c-box u-bottom-el">
            <h2 class="u-top-el">Let and Const</h2>
            <h3 class="u-middle-el">Useful articles:</h3>
            <ul class="u-middle-el">
              <li><a href="https://mathiasbynens.be/notes/es6-const">Mathias Bynens article on <code>let</code> and
                  <code>const</code></a></li>
            </ul>
            <details class="u-bottom-el" open>
              <summary>Mathias Bynens article summary on <code>let</code> and <code>const</code></summary>
              <ul class="u-bottom-el">
                <li>use <code>const</code> by default</li>
                <li>only use <code>let</code> if rebinding is needed</li>
                <li>(<code>var</code> shouldn’t be used in ES2015)</li>
              </ul>
            </details>
          </section><!-- /.c-box -->
          <section class="c-box">
            <h2>Tips and tricks</h2>
            <blockquote>
              <h3>Operator Precedence</h3>
              <h4>My Dear Aunt Sally</h4>
              <p><strong>M</strong>y ( Multiplication ) <strong>D</strong>ear ( Division ) <strong>A</strong>unt (
                Addition ) <strong>S</strong>ally ( Subtraction )</p>
            </blockquote>
          </section>
        </div><!-- /.l-col -->
      </div><!-- /.l-row -->
    </div><!-- /.l-wrap -->
  </main>
</template>

<script>
  export default {
    name: 'ES6'
  }
</script>