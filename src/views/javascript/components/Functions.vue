<template>
  <div class="c-copy">

    <!-- FUNCTION -->
    <section class="c-copy">
      <h1 class="u-mb-20">JavaScript Function</h1>
      <div class="c-box">
        <h2 class="u-top-el">What is a function in JavaScript?</h2>
        <p>A function is a data/value in JavaScript, which can be stored in a variable/identifier and called by that
          identifier. In JavaScript, functions are regular objects with the additional capability of being callable.</p>
        <blockquote class="u-middle-el">
          <p>Functions are objects in JavaScript. It differs from others as it's callable. This is a special and unique
            feature to this object subtype.</p>
        </blockquote>
        <h3 class="u-middle-el">Further Reading:</h3>
        <ul class="u-bottom-el">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">MDN Guide on Functions</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions">MDN Reference on
              Functions</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function">MDN Reference
              on
              Function Expression</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">MDN
              Reference on Function Global Object</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">Functions
              Default Parameters on MDN</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Functions
              Rest Parameters on MDN</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN
              Reference on Arrow Functions</a>
          </li>
        </ul>
      </div><!-- /.c-box -->
      <blockquote class="u-middle-el">
        <p>JavaScript function can or cannot return a value</p>
      </blockquote>
      <blockquote class="u-bottom-el">
        <p>If a JavaScript function doesn't return any value, it returns <code>undefined</code></p>
      </blockquote>
    </section>

    <!-- FUNCTION CURRYING -->
    <section class="u-bottom-el">
      <div class="c-box">
        <h2 class="u-top-el">Function Currying</h2>
        <p>
          Creating a copy of a function but with some preset parameters.
        </p>
      </div><!-- /.c-box -->
    </section>
    
  </div>
</template>

<script>
  export default {
    name: 'Functions',
    beforeMount() {
      window.scrollTo({
        top: 0,
        left: 0
      })
    },
  }
</script>