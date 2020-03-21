<template>
  <section class="u-section-padding">
    <div class="l-wrap">
      <div class="l-row">
        <div class="l-col l-col--lg-10 l-col--offset-lg-1">
          <!-- BACK HOME -->
          <router-link :to="{ name: 'Home' }" class="u-top-el">Back home</router-link>

          <div class="c-copy">
            <article id="overview" class="u-top-el">
              <header class="u-top-el">
                <h1><a href="https://en.wikipedia.org/wiki/PHP">PHP</a> stands for Hypertext Preprocessor</h1>
              </header>

              <p>PHP is a server-side language. It means it runs on server. In order to run the php script, we need a
                web server. Learn more about <a
                  href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server">what is
                  a web server?</a> In the web server, there is a program called PHP interpreter which is reponsible for
                processing the PHP code.</p>

              <p>PHP can be embedded directly into the HTML code. However the file extension needs to be
                <code>.php</code> in order to process the PHP script by the PHP interpreter. If the file extension is
                <code>.html</code> the browser will ignore the PHP code by commenting it out.</p>

              <p>The PHP script starts with the opening PHP tag and ends with the closing PHP tag. We call it PHP code
                block. The PHP code block looks like this:</p>
              <div class="u-middle-el"><img src="../assets/php-code-block.png" alt="PHP Code Block"></div>
              <p>Everything inside this code block is the PHP code and everything outside this code block can be any
                HTML code.</p>
            </article>
            <div class="c-table-responsive u-bottom-el">
              <table class="c-table">
                <caption>Built-in PHP Functions</caption>
                <thead>
                  <tr>
                    <th>Function Name</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="inline">count()</code></td>
                    <td>Count all elements in an array, or something in an object</td>
                  </tr>
                  <tr>
                    <td><code class="inline">microtime()</code></td>
                    <td>Return current Unix timestamp with microseconds</td>
                  </tr>
                  <tr>
                    <td><code class="inline">DateTime()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">DateTime::createFromFormat()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">date()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">var_dump()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">print_r()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">gettype()</code></td>
                    <td>Returns type of the given value</td>
                  </tr>
                  <tr>
                    <td><code class="inline">isset()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">is_array()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">strlen()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">strpos()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">array_keys()</code></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><code class="inline">array_walk()</code></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->
            <div class="c-table-responsive u-bottom-el">
              <table class="c-table">
                <caption>Built-in PHP Keywords</caption>
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code class="inline">echo</code></td>
                    <td>Prints output to the the page</td>
                  </tr>
                  <tr>
                    <td><code class="inline">include</code></td>
                    <td>Include additional code from other files</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->
          </div>
        </div><!-- /.l-col -->
      </div><!-- /.l-row -->
    </div><!-- /.l-wrap -->
  </section>
</template>

<script>
  export default {
    name: 'Php'
  }
</script>