<template>
  <div class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-mb-20">Back home</router-link>

      <!-- Learn Enough Vim -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>Learn Enough CSS Grid</caption>
          <thead>
            <tr class="thead-tr">
              <th>Property</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info">
              <td colspan="2">Grid container properties</td>
            </tr>
            <tr>
              <td><code>grid-template-columns</code></td>
              <td>Defines the columns of a grid container.</td>
            </tr>
            <tr>
              <td><code>grid-template-rows</code></td>
              <td>Defines the rows of a grid container.</td>
            </tr>
            <tr>
              <td><code>grid-column-gap</code></td>
              <td>Defines the gutter between the columns of a grid container.</td>
            </tr>
            <tr>
              <td><code>grid-row-gap</code></td>
              <td>Defines the gutter between the rows of a grid container.</td>
            </tr>
            <tr>
              <td><code>grid-gap</code></td>
              <td>Defines gutter between the rows and columns of a grid container.</td>
            </tr>
            <tr>
              <td><code>grid-auto-rows</code></td>
              <td>Defines the size of grid rows that were created implicitly.</td>
            </tr>
            <tr>
              <td><code>grid-auto-columns</code></td>
              <td>Defines the size of grid columns that were created implicitly.</td>
            </tr>
            <tr>
              <td><code>grid-auto-flow</code></td>
              <td>Defines the position of auto-generated grid items.</td>
            </tr>
            <tr>
              <td><code>grid-template-areas</code></td>
              <td>Defines areas within a grid container.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Grid item properties</td>
            </tr>
            <tr>
              <td><code>grid-column-start</code></td>
              <td>Defines the column start position of a grid item.</td>
            </tr>
            <tr>
              <td><code>grid-column-end</code></td>
              <td>Defines the column end position of a grid item.</td>
            </tr>
            <tr>
              <td><code>grid-row-start</code></td>
              <td>Defines the row start position of a grid item.</td>
            </tr>
            <tr>
              <td><code>grid-row-end</code></td>
              <td>Defines the row end position of a grid item.</td>
            </tr>
            <tr>
              <td><code>grid-column</code></td>
              <td>Shorthand property for <code>grid-column-start</code> and <code>grid-column-end</code>.</td>
            </tr>
            <tr>
              <td><code>grid-row</code></td>
              <td>Shorthand property for <code>grid-row-start</code> and <code>grid-row-end</code>.</td>
            </tr>
            <tr>
              <td><code>grid-area</code></td>
              <td>Define a name for grid item.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Grid Terminology</td>
            </tr>
            <tr>
              <td><strong>Grid container</strong></td>
              <td>The container that holds the entire CSS grid.</td>
            </tr>
            <tr>
              <td><strong>Grid item</strong></td>
              <td>Any element that is a direct child of a grid container.</td>
            </tr>
            <tr>
              <td><strong>Grid lines</strong></td>
              <td>The vertical and horizontal lines that divide the grid and separate the columns and rows.</td>
            </tr>
            <tr>
              <td><strong>Grid cell</strong></td>
              <td>A single unit of a CSS grid.</td>
            </tr>
            <tr>
              <td><strong>Grid track</strong></td>
              <td>The space between two grid lines. This space can be horizontal or vertical.</td>
            </tr>
            <tr>
              <td><strong>Gutter</strong></td>
              <td>The space between rows and columns in a grid.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Grid Functions</td>
            </tr>
            <tr>
              <td><strong>repeat()</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>minmax()</strong></td>
              <td></td>
            </tr>
            <tr class="info">
              <td colspan="2">Grid Keywords</td>
            </tr>
            <tr>
              <td><strong>auto-fill</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>auto-fit</strong></td>
              <td></td>
            </tr>
            <tr class="info">
              <td colspan="2">Grid Units</td>
            </tr>
            <tr>
              <td><strong>fr</strong></td>
              <td></td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="info">
              <td colspan="2">Learn More About CSS Grid</td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://cssreference.io/css-grid/" target="_blank">https://cssreference.io/css-grid/</a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">A Complete Guide to CSS Grid by <strong>CSS Tricks</strong></a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://mozilladevelopers.github.io/playground/css-grid" target="_blank">Introduction to css grid layout on <strong>Mozilla Playground</strong></a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://gridbyexample.com/what/" target="_blank">Grid by Example</a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://alistapart.com/article/the-story-of-css-grid-from-its-creators/" target="_blank">The Story of CSS Grid, <strong>from Its Creators</strong></a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://www.smashingmagazine.com/2018/05/guide-css-layout/" target="_blank">Getting Started With CSS Layout on <strong>Smashing Magazine</strong></a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank">CSS Grid Layout on <strong>MDN</strong></a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://cssgrid.io/" target="_blank">CSS Grid Free course by <strong>Wes Bos</strong></a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://tympanus.net/codrops/css_reference/grid/" target="_blank">CSS Grid Reference on <strong>Codrops</strong></a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="http://cssgridgarden.com/" target="_blank">CSS Garden</a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <a href="https://laracasts.com/series/css-grids-for-everyone" target="_blank">CSS Grids for Everyone on <strong>laracasts</strong></a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div><!-- /.l-wrap -->
  </div>
</template>

<script>
  export default {
    name: 'Css'
  }
</script>