<template>
  <div class="u-bg-gray">
    <div class="l-wrap">
      <div class="c-content">
        <Sidenav />
        <div class="c-content__main c-copy">

          <!-- STRING LITERALS VS OBJECTS -->
          <section class="c-copy">
            <h1 class="u-mb-20">JavaScript Strings</h1>
            <div class="c-box">
              <h2 class="u-mb-20">What is the difference between string literals and string objects in JavaScript?</h2>
              <p>
                String literals (denoted by double or single quotes) and strings returned from String calls in a
                non-constructor
                context (i.e., without using the new keyword) are primitive strings. JavaScript automatically converts
                primitives
                to String objects, so that it's possible to use String object methods for primitive strings. In contexts where
                a
                method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap
                the
                string primitive and call the method or perform the property lookup.
              </p>
              <p>
                <a
                  href="https://stackoverflow.com/questions/17256182/what-is-the-difference-between-string-literals-and-string-objects-in-javascript">Reference</a>
              </p>
              <h3 class="u-mt-40">Explanation</h3>
              <p>Whenever we try to access a property/method on a primitive string, JavaScript automatically converts the
                primitive string into a string object. So, <code>'Saabbir.length'</code> converts into <code>new
                  String('Saabbir').length</code> behind the scene. That's why we can access all of those string methods on a
                primitive string like <strong>Saabbir</strong>.</p>
            </div><!-- /.c-box -->
          </section>

          <!-- STRING OBJECT -->
          <section class="u-mt-20">
            <div class="c-box">
              <h2 class="u-mb-20">What is a string object?</h2>
              <p>Strings created from <code>String</code> constructor function in a constructor context (i.e, using the <code>new</code> keyword) are string object.</p>

              <h3 class="u-mt-40">Example:</h3>
              <p>
                <pre class="language-javascript line-numbers"><code>new String('Saabbir Hossain')</code></pre>
              </p>

              <h3 class="u-mt-40">Note:</h3>
              <ul class="u-mt-20">
                <li>
                  <p>Without using <code>new</code> operator, <code>String</code> function calls always returns string
                    primitive
                    value.</p>
                </li>
                <li>
                  <p><code>String</code> function takes any types of data as an argument and converts it into it's
                    corresponding
                    primitive string value. So, <code>String(100)</code> will return the primitive string <code>"100"</code>.
                    In
                    here, the number value <code>100</code> gets converted into its corresponding <code>"100"</code> string
                    value.
                  </p>
                </li>
              </ul>
            </div><!-- /.c-box -->
          </section>

          <!-- STRING PROTOTYPE CHAIN -->
          <section class="u-mt-20">
            <div class="c-box">
              <h2 class="u-mb-20">String Prototype Chain:</h2>
              <pre class="language-javascript line-numbers"><code>new String('string').__proto__ === String.prototype
String.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null</code></pre>
            </div><!-- /.c-box -->
          </section>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/Sidenav.vue";
export default {
  name: "Strings",
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
  mounted() {
    window.Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
</style>