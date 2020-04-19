<template>
  <section class="u-section-padding">
    <div class="l-wrap">
      <div class="l-row">
        <div class="l-col l-col--lg-10 l-col--offset-lg-1">

          <!-- BACK HOME -->
          <router-link :to="{ name: 'Home' }" class="u-mb-20">Back home</router-link>

          <article class="c-copy">

            <!-- PHP Overview -->
            <section class="u-mb-20">

              <header class="u-mb-20">
                <h1><a href="https://en.wikipedia.org/wiki/PHP" target="_blank">PHP</a> stands for Hypertext Preprocessor</h1>
              </header>

              <p>
                PHP is a server-side language. It means it runs on server. In order to run the php script, we need a web server. Learn more about <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server" target="_blank">what is a web server?</a> In the web server, there is a program called PHP interpreter which is reponsible for processing the PHP code.
              </p>

              <p>
                PHP can be embedded directly into the HTML code. However the file extension needs to be <code>.php</code> in order to process the PHP script by the PHP interpreter. If the file extension is <code>.html</code> the browser will ignore the PHP code by commenting it out.
              </p>

              <p>
                The PHP script starts with the opening PHP tag and ends with the closing PHP tag. We call it PHP code block. The PHP code block looks like this:
              </p>

              <div class="u-mt-20">
                <img src="@/assets/php-code-block.png" alt="PHP Code Block">
              </div>

              <p>
                Everything inside this code block is the PHP code and everything outside this code block can be any HTML code.
              </p>

              <p>
                In PHP, variable declaration starts with <code>$</code> sign.
              </p>

              <p>In PHP, we use snake case for identifier.</p>

              <p>In PHP, we create arrays using <code>array()</code> function.</p>

              <p>
                String using double quotes allow interpolation. We can also wrap expression in curly braces for interpolation when we access array value.
              </p>

              <p>
                In PHP, semicolon is mandatory.
              </p>

              <p>
                In PHP, we use <code>.</code> sign for concatenation.
              </p>

              <p>
                In PHP, we use <code>-></code> sign to access an object property value. It's equivalent of JavaScript's <code>.</code> notation.
              </p>

              <p>
                PHP is not case sensitive. However PHP variables are case sensitive. <code>null</code> and <code>NULL</code> is same where variable <code>$a</code> and <code>$A</code> is not the same.
              </p>

              <p>PHP whitespace independent.</p>

              <p>
                In PHP, we can use <code>$array[]</code> syntax to push an item to the array.
              </p>

              <p>
                In PHP, we use <code>=></code> fat arrow syntax to associate key with value inside associative array. It's equivalent of JavaScript's <code>:</code> colon syntax inside object literal. Associative arrays in PHP are equivalent of JavaScript's object literal.
              </p>

              <p>
                In PHP, we use <code>(bool)</code> to convert a value into it's boolean counterpart. Like <code>(bool) array()</code> will return false because empty array() is considered falsy value in PHP. <a href="https://www.php.net/manual/en/language.types.boolean.php" target="_blank">Read more about converting to Boolean in PHP</a>. Also <a href="https://www.php.net/manual/en/language.types.type-juggling.php" target="_blank">Read about type casting in PHP</a>.
              </p>

            </section>

            <!-- Built-in PHP Constructs -->
            <div class="c-table-responsive u-middle-el">
              <table class="c-table">
                <caption>
                  <a href="https://www.php.net/manual/en/language.control-structures.php" target="_blank">Built-in PHP Constructs (control structures)</a>
                </caption>
                <thead>
                  <tr>
                    <th>Construct</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(construct, index) in data.builtInConstructs" :key="index">
                    <td><code>{{ construct.name }}</code></td>
                    <td>{{ construct.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->

            <!-- Built-in PHP Variable Handling Functions -->
            <div class="c-table-responsive u-middle-el">
              <table class="c-table">
                <caption>
                  <a href="https://www.php.net/manual/en/ref.var.php" target="_blank">Built-in PHP Variable Handling Functions</a>
                </caption>
                <thead>
                  <tr>
                    <th>Function Name</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(func, index) in data.variableHandlingFunctions" :key="index">
                    <td><code>{{ func.name }}</code></td>
                    <td>{{ func.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->

            <!-- Built-in PHP String Functions -->
            <div class="c-table-responsive u-middle-el">
              <table class="c-table">
                <caption>
                  <a href="https://www.php.net/manual/en/ref.strings.php" target="_blank">Built-in PHP String Functions</a>
                </caption>
                <thead>
                  <tr>
                    <th>Function Name</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(func, index) in data.stringFunctions" :key="index">
                    <td><code>{{ func.name }}</code></td>
                    <td>{{ func.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->

            <!-- Built-in PHP Array Functions -->
            <div class="c-table-responsive u-middle-el">
              <table class="c-table">
                <caption>
                  <a href="https://www.php.net/manual/en/ref.array.php" target="_blank">Built-in PHP Array Functions</a>
                </caption>
                <thead>
                  <tr>
                    <th>Function Name</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(func, index) in data.arrayFunctions" :key="index">
                    <td><code>{{ func.name }}</code></td>
                    <td>{{ func.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->

            <!-- Built-in PHP Miscellaneous Functions -->
            <div class="c-table-responsive u-middle-el">
              <table class="c-table">
                <caption>
                  <a href="https://www.php.net/manual/en/ref.misc.php" target="_blank">Built-in PHP Miscellaneous Functions</a>
                </caption>
                <thead>
                  <tr>
                    <th>Function Name</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(func, index) in data.miscFunctions" :key="index">
                    <td><code>{{ func.name }}</code></td>
                    <td>{{ func.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->

            <!-- PHP Superglobals -->
            <div class="c-table-responsive u-middle-el">
              <table class="c-table">
                <caption>
                  <a href="https://www.php.net/manual/en/language.variables.superglobals.php" target="_blank">PHP Superglobal Variables</a>
                </caption>
                <thead>
                  <tr>
                    <th>Superglobal Variable Name</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>$_SERVER</code></td>
                    <td>Server and execution environment information</td>
                  </tr>
                  <tr>
                    <td><code>$_GET</code></td>
                    <td>HTTP GET variables</td>
                  </tr>
                  <tr>
                    <td><code>$_POST</code></td>
                    <td>HTTP POST variables</td>
                  </tr>
                  <tr>
                    <td><code>$_SESSION</code></td>
                    <td>Session variables</td>
                  </tr>
                  <tr>
                    <td><code>$_COOKIE</code></td>
                    <td>HTTP Cookies</td>
                  </tr>
                  <tr>
                    <td><code>$_REQUEST</code></td>
                    <td>HTTP Request variables</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2">
                      <p>Several predefined variables in PHP are "superglobals", which means they are available in all scopes throughout a script.</p>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div><!-- /.c-table-responsive -->

            <!-- MySQLi Related Functions -->
            <div class="c-table-responsive u-middle-el">
              <table class="c-table">
                <caption>MySQLi Related Functions</caption>
                <thead>
                  <tr>
                    <th>Function Name</th>
                    <th>Short Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(func, index) in data.mysqliFunctions" :key="index">
                    <td><code>{{ func.name }}</code></td>
                    <td>{{ func.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- /.c-table-responsive -->

          </article>

        </div><!-- /.l-col -->
      </div><!-- /.l-row -->
    </div><!-- /.l-wrap -->
  </section>
</template>

<script>
  import data from '../data/data.js'

  export default {
    name: 'Php',
    data() {
      return {
        data
      }
    }
  }
</script>