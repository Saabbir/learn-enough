<template>
  <div class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-mb-20 u-text-underline"
        >Back home</router-link
      >

      <!-- Learn enough regular expressions -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Learn enough regular expressions
          </caption>
          <thead>
            <tr>
              <th>Lorem</th>
              <th>Ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Lorem</code></td>
              <td>Lorem ipsum dolor site amet</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->

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
                  href="https://tutorialzine.com/2014/12/learn-regular-expressions-in-20-minutes"
                  target="_blank"
                  >Learn Regular Expressions in 20 Minutes</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285"
                  target="_blank"
                  >Regex tutorial — A quick cheatsheet by examples</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://blog.patricktriest.com/you-should-learn-regex/"
                  target="_blank"
                  >YOU SHOULD LEARN REGEX</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://github.com/ziishaned/learn-regex"
                  target="_blank"
                  >Learn regex the easy way</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://regexone.com/" target="_blank">regexone</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.regexpal.com/" target="_blank">regexpal</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://regexr.com/" target="_blank">regexr</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->
    </div>
    <!-- /.l-wrap -->
  </div>
</template>

<script>
export default {
  name: "Regex",
};
</script>