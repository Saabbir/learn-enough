<template>
  <div class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-mb-20 u-text-underline"
        >Back home</router-link
      >

      <!-- Learn enough Vim -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Learn enough Vim
          </caption>
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info">
              <td colspan="2">Mode</td>
            </tr>
            <tr>
              <td><code class="inline">i</code></td>
              <td>
                Press i to enable insert mode. In this mode you write the normal
                text.
              </td>
            </tr>
            <tr>
              <td><code class="inline">esc</code></td>
              <td>
                Press esc to enable normal mode. In this mode you write the vim
                commands.
              </td>
            </tr>
            <tr class="info">
              <td colspan="2">Exiting</td>
            </tr>
            <tr>
              <td><code class="inline">:w</code></td>
              <td>write (save) the file, but don't exit</td>
            </tr>
            <tr>
              <td><code class="inline">:wq</code></td>
              <td>write (save) and quit</td>
            </tr>
            <tr>
              <td><code class="inline">:q</code></td>
              <td>quit (fails if there are unsaved changes)</td>
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
  name: "TextEditor",
};
</script>