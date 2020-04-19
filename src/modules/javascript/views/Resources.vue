<template>
  <div class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-top-el">Back home</router-link>

      <!-- Learn Web Development -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>Learn Web Development</caption>
          <tbody>
            <tr>
              <td>
                <a href="https://dmitripavlutin.com/javascript-classes-complete-guide/" target="_blank">The Complete Guide to JavaScript Classes</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div><!-- /.c-table-responsive -->      
    </div><!-- /.l-wrap -->
  </div>
</template>

<script>
  export default {
    name: 'JavaScriptResources'
  }
</script>