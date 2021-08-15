<template>
  <div class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-mb-20 u-text-underline"
        >Back home</router-link
      >

      <!-- Learn enough Vue -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Learn enough Vue
          </caption>
          <tbody>
            <tr class="info">
              <td colspan="2">Vue Directives</td>
            </tr>
            <tr>
              <td><code>v-text</code></td>
              <td>Updates the element’s textContent</td>
            </tr>
            <tr>
              <td><code>v-html</code></td>
              <td>Updates the element’s innerHTML</td>
            </tr>
            <tr>
              <td><code>v-show</code></td>
              <td>
                Toggles the element’s display CSS property based on the
                truthy-ness of the expression value.
              </td>
            </tr>
            <tr>
              <td><code>v-if</code></td>
              <td>
                Conditionally render the element based on the truthy-ness of the
                expression value.
              </td>
            </tr>
            <tr>
              <td><code>v-else</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>v-else-if</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>v-for</code></td>
              <td>
                Render the element or template block multiple times based on the
                source data.
              </td>
            </tr>
            <tr>
              <td><code>v-on</code></td>
              <td>Attaches an event listener to the element.</td>
            </tr>
            <tr>
              <td><code>v-bind</code></td>
              <td>
                Dynamically bind one or more attributes, or a component prop to
                an expression.
              </td>
            </tr>
            <tr>
              <td><code>v-model</code></td>
              <td>
                Create a two-way binding on a form input element or a component
              </td>
            </tr>
            <tr>
              <td><code>v-slot</code></td>
              <td>Denote named slots or slots that expect to receive props.</td>
            </tr>
            <tr>
              <td><code>v-pre</code></td>
              <td>
                Skip compilation for this element and all its children. You can
                use this for displaying raw mustache tags. Skipping large
                numbers of nodes with no directives on them can also speed up
                compilation.
              </td>
            </tr>
            <tr>
              <td><code>v-cloak</code></td>
              <td>
                This directive will remain on the element until the associated
                Vue instance finishes compilation.
              </td>
            </tr>
            <tr>
              <td><code>v-once</code></td>
              <td>Render the element and component once only.</td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://vuejs.org/v2/api/#Directives" target="_blank"
                  >More on Vue official api documentation.</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- /.l-wrap -->
  </div>
</template>

<script>
export default {
  name: "Vue",
};
</script>

<style lang="scss" scoped>
</style>