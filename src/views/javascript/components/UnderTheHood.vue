<template>
  <div class="c-copy">

    <h1>How JavaScript Works Under The Hood?</h1>

    <!-- Global Object -->
    <section class="u-mt-30">
      <div class="c-box">
        <h2 class="u-top-el">What is Global?</h2>
        <p>
          Code that aren't inside a function is global.
        </p>
        <p>
          Whenever we're opening a tab in the browser, the JavaScript engine of the browser creates a global execution
          context for us. That execution context gives us a global object named 'window' and a special variable named
          'this'
          automatically. We can use it in our JavaScript program when we working on the browser.
        </p>
      </div><!-- /.c-box -->
    </section>

    <!-- Execution Context -->
    <section class="u-middle-el">
      <div class="c-box">
        <h2 class="u-top-el">What is the Execution Context in JavaScript?</h2>
        <p>
          A wrapper to help manage the code that is running. There are lots of lexical environments. Which one is
          currently
          running is managed via execution contexts. It can contain things beyond what you've written in your code.
        </p>
        <h3 class="u-middle-el">Details</h3>
        <p>
          When a webpage loads, JavaScript engine creates an execution context named global execution context. That is
          the
          parent of all execution context and bottom of the execution stack. All the codes we write in our js file are
          wrapped inside this context.
        </p>
        <p>
          There are two types of execution context in JavaScript.
        </p>
        <ul class="u-middle-el">
          <li>Global Exection Context</li>
          <li>Function Execution Context</li>
        </ul>
        <p>
          Both works exactly the same way. Global execution context gets created by the JavaScript engine when it loads
          the
          page. Function execution context gets created when we invoke a function in JavaScript.
        </p>
        <p>
          All the execution context has two phases. One is creation phase. Another is execution phase. Creation phase
          runs
          first before execution phase.
        </p>
        <p>
          In creation phase, JavaScript engine looks into it's current execution context and finds out all the variables
          and
          functions are declared and stores them in the memory.
        </p>
        <p>
          Then execution phase happen and execute the code top to bottom line by line and character by character.
        </p>
        <p>
          That means JavaScript engine first setup the memory location for variables and functions before executing the
          code. That's called <strong>Hoisting</strong>.
        </p>
        <p>
          Functions are stored in the memory entirely in the creation phase. But variables are stored in the memory with
          the
          initial value of undefined.
        </p>
        <h3 class="u-middle-el">References</h3>
        <ul class="u-bottom-el">
          <li>
            <a
              href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/">Ultimate
              Guide on Execution Context by Tyler McGinnis</a>
          </li>
          <li>
            <a href="http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/">Article of Dmitry
              Soshnikov</a>
          </li>
          <li>
            <a href="https://medium.com/search?q=Execution%20Context">Medium Search on Execution Context</a>
          </li>
        </ul>
      </div><!-- /.c-box -->
    </section>

    <!-- Syntax Parser -->
    <section class="u-middle-el">
      <div class="c-box">
        <h2 class="u-top-el">What is Syntax Parsers?</h2>
        <p>
          A program that reads your code and determines what it does and if its grammar is valid. Your code isn't magic.
          Someone else wrote a program to translate your code into machine readable code.
        </p>
      </div><!-- /.c-box -->
    </section>

    <!-- Lexical Environment -->
    <section class="u-middle-el">
      <div class="c-box">
        <h2 class="u-top-el">What is Lexical Environment?</h2>
        <p>
          Where something sits physically in the code you write. A lexical environment exists is programming languages
          in
          which where you write something is important.
        </p>
      </div><!-- /.c-box -->
    </section>

    <!-- Identifier -->
    <section class="u-bottom-el">
      <div class="c-box">
        <h2 class="u-top-el">What is a identifier in JavaScript?</h2>
        <p>A sequence of characters in the code that identifies a <strong>variable</strong>, <strong>function</strong>,
          or
          <strong>property</strong>.</p>
        <p>So in a nutshell, when you refer to any data/value (string, number, boolean, array, object, function,
          undefined,
          null) by using any sequence of characters, that is a identifier.</p>
        <p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Identifier">Reference</a></p>
        <div class="u-bottom-el">
          <h3 class="u-top-el">Examples</h3>
          <p>The followings are all identifier.</p>
          <ul class="u-bottom-el">
            <li>Variable created using let, const, var</li>
            <li>Function created using function definition</li>
            <li>Function parameters/arguments</li>
            <li>Object property keys</li>
          </ul>
        </div>
      </div><!-- /.c-box -->
    </section>

  </div>
</template>

<script>
  export default {
    name: 'UnderTheHood',
    beforeMount() {
      window.scrollTo({
        top: 0,
        left: 0
      })
    },
  }
</script>