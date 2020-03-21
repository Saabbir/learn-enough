<template>
  <main class="site-main" role="main">
    <div class="l-wrap">
      <div class="l-row">
        <div class="l-col l-col--md-10 l-col--offset-md-1">
          <!-- BACK HOME -->
          <router-link :to="{ name: 'Home' }" class="u-top-el">Back home</router-link>
          
          <div class="c-copy">
            <h1 class="u-top-el">JavaScript Introduction</h1>
            <blockquote class="u-middle-el">
              <p>JavaScript porgrams are based on a lot of small and complex statements. A statement is based on a lot
                of small and complex expressions.</p>
            </blockquote>

            <!-- History of JavaScript -->
            <section>
              <div class="c-box">
                <h2 class="u-top-el">JavaScript History</h2>
                <p>JavaScript first created by Brendan Eich at Netscape. Intial name of the language was Mocha then
                  LiveScript then JavaScript to attract Java Developers at that time. Though JavaScript has very little
                  common with Java. JavaScript is not lighter version of Java. Both are completly independent
                  programming language.</p>
                <h3 class="u-middle-el">Further Read:</h3>
                <ul class="u-bottom-el u-pl-20">
                  <li>
                    <a href="https://en.wikipedia.org/wiki/JavaScript#History">JavaScript History Section on
                      Wikipedia</a>
                  </li>
                  <li>
                    <a href="https://auth0.com/blog/a-brief-history-of-javascript/">Brief History of JavaScript on Auth
                      Blog</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div><!-- /.l-col -->
      </div><!-- /.l-row -->
    </div><!-- /.l-wrap -->
  </main>
</template>

<script>
  export default {
    name: 'JavaScript'
  }
</script>