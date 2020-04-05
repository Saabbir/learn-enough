<template>
  <div class="c-copy">

    <h1 class="u-mb-20">JavaScript Objects</h1>

    <!-- Object -->
    <section class="u-middle-el">
      <div class="c-box">
        <h2 class="u-top-el">What is Object?</h2>
        <p>
          A collection of name value pairs. It's that simple.
        </p>
      </div><!-- /.c-box -->
    </section>

    <!-- Object Dillema -->
    <section>
      <div class="c-box">
        <h2 class="u-top-el">Function and Object dillema</h2>
        <p class="u-first-letter">Every function objects (including constructor functions) in javascript created from
          <code>Function</code> constructor. So, it is the last constructor function in the chain.</p>
        <h3 class="u-middle-el">Examples:</h3>
        <ul class="u-middle-el">
          <li>
            <p><code>(function(){}).constructor.name === 'Function'</code> returns true.</p>
          </li>
          <li>
            <p><code>Function.constructor.name === 'Function'</code> returns true.</p>
          </li>
          <li>
            <p><code>Object.constructor.name === 'Function'</code> returns true.</p>
          </li>
          <li>
            <p><code>Array.constructor.name === 'Function'</code> returns true.</p>
          </li>
          <li>
            <p><code>String.constructor.name === 'Function'</code> returns true.</p>
          </li>
          <li>
            <p><code>Number.constructor.name === 'Function'</code> returns true.</p>
          </li>
          <li>
            <p><code>Boolean.constructor.name === 'Function'</code> returns true.</p>
          </li>
        </ul>
        <div class="u-section-divider"></div>
        <p class="u-first-letter">Every function object (created from <code>Function</code> constructor) inherited some
          properties/methods from <code>Function.prototpe</code> object. That is unique to function objects only. Like
          <code>call</code>, <code>apply</code> methods only available to function objects. These methods are defined
          directly into the <code>Function.prototype</code> object.</p>
        <h3 class="u-middle-el">Examples</h3>
        <ul class="u-middle-el">
          <li><code>Function.prototype.hasOwnProperty('call') === true</code></li>
        </ul>
        <div class="u-section-divider"></div>
        <p class="u-first-letter">As far as we know, the instance objects has access to its constructor functions
          prototype
          object properties. But for two exceptions. One for <code>Function.prototype</code> object and second for
          <code>Object.prototype</code> object. Because all functions objects prototype chain ends with
          <code>Function.prototype</code> object and its prototype chain ends with <code>Object.prototype</code> object.
          Though the <code>Function.prototype</code> object is not created by <code>Object</code> constructor function,
          but
          still it has access ot <code>Object.prototype</code> object which is the last object in the prototype chain.
          Its
          prototype chain ends up with <code>null</code>.</p>
        <h3 class="u-middle-el">Examples:</h3>
        <ul class="u-bottom-el">
          <li>
            <p><code>Function.prototype.constructor.name === 'Function'</code> returns true.</p>
          </li>
          <li>
            <p><code>Function.prototype.__proto__ === Function.prototype</code> returns false.</p>
          </li>
          <li>
            <p><code>Function.prototype.__proto__ === Object.prototype</code> returns true.</p>
          </li>
        </ul>
      </div><!-- /.c-box -->
    </section>
    
  </div>
</template>

<script>
  export default {
    name: 'Objects',
    beforeMount() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      })
    },
  }
</script>