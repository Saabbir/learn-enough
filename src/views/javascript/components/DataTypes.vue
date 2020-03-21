<template>
  <div class="c-copy">
    
    <!-- Data Types -->
    <section>
      <div class="c-box">
        <h2 class="u-top-el">How many data types in JavaScript?</h2>
        <p>The latest ECMAScript standard defines seven data types:</p>
        <ul class="u-middle-el u-pl-20">
          <li>Six data types that are primitives:
            <ul>
              <li>Null</li>
              <li>Undefined</li>
              <li>String</li>
              <li>Number</li>
              <li>Boolean</li>
              <li>Symbol ( New in ECMAScript 6 )</li>
            </ul>
          </li>
          <li>and Object ( including function and array )</li>
        </ul>
        <h3 class="u-middle-el">References</h3>
        <ul class="u-bottom-el u-pl-20">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">Read MDN on data types in
              JavaScript</a>
          </li>
          <li>
            <a href="https://codeburst.io/javascript-data-types-explained-347555cd2d4d">Read Codburst blog post on
              Medium</a>
          </li>
        </ul>
      </div><!-- /.c-box -->
    </section>

    <!-- Undefined -->
    <section class="u-middle-el">
      <div class="c-box">
        <h2 class="u-top-el">What is Undefined in JavaScript?</h2>
        <p>
          It's a special value. Special keyword. A primitive data type.
          It is initially set to all the variables in the creation phase of the execution context by the JavaScript
          engine. But you can also set it by yourself in any variable as this is a primitive data type. But never do
          that. It will be hard to debug later. Leave it for the JavaScript engine so that you know when you see a
          undefined value of a variable that you never set it.
        </p>
      </div><!-- /.c-box -->
    </section>
  </div>
</template>

<script>
  export default {
    name: 'DataTypes',
    beforeMount() {
      window.scrollTo({
        top: 0,
        left: 0
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>