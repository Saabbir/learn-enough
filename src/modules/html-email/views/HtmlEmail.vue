<template>
  <div class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-top-el">Back home</router-link>

      <!-- Learn Enough HTML Email -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>Learn Enough HTML Email</caption>
          <thead>
            <tr>
              <th>Lorem</th>
              <th>Ipsum</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info">
              <td colspan="2">Lorem ipsum</td>
            </tr>
            <tr>
              <td><code>lorem</code></td>
              <td>ipsum</td>
            </tr>
          </tbody>
        </table>
      </div><!-- /.c-table-responsive -->

      <!-- Email Testing Clients -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>Email Testing Clients</caption>
          <thead>
            <tr>
              <th>Client</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info">
              <td colspan="2"><strong><small>Web Email Client</small></strong></td>
            </tr>
            <tr>
              <td>AOL Mail</td>
              <td><i class="fa fa-check u-color-valid"></i></td>
            </tr>
            <tr>
              <td>G Suite</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Gmail</td>
              <td><i class="fa fa-check u-color-valid"></i></td>
            </tr>
            <tr>
              <td>Google Inbox</td>
              <td><i class="fa fa-check u-color-valid"></i></td>
            </tr>
            <tr>
              <td>Outlook.com</td>
              <td><i class="fa fa-check u-color-valid"></i></td>
            </tr>
            <tr>
              <td>Yahoo Mail</td>
              <td><i class="fa fa-check u-color-valid"></i></td>
            </tr>
            <tr class="info">
              <td colspan="2"><strong><small>Desktop Email Client</small></strong></td>
            </tr>
            <tr>
              <td>AOL Desktop</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Apple Mail</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>IBM Notes</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2000</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2002</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2003</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2007</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2010</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2011 for Mac</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2013</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook 2016</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook for Mac</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Outlook Express</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Postbox</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Thunderbird</td>
              <td><i class="fa fa-check u-color-valid"></i></td>
            </tr>
            <tr>
              <td>Windows 10 Mail</td>
              <td><i class="fa fa-check u-color-valid"></i></td>
            </tr>
            <tr>
              <td>Windows Live Mail</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
          </tbody>
        </table>
      </div><!-- /.c-table-responsive -->

    </div><!-- /.l-wrap -->
  </div>
</template>

<script>
  export default {
    name: 'HtmlEmail'
  }
</script>

<style lang="scss" scoped>

</style>