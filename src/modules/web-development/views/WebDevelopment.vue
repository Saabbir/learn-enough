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
                <a href="https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm" target="_blank">How Does the Internet Work?</a> [<strong>Stanford University</strong>]
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
    name: 'WebDevelopment'
  }
</script>