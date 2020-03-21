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
              <p>JavaScript porgrams are based on a lot of small and complex statements. A statement is based on a lot of small and complex expressions.</p>
            </blockquote>

            <!-- History of JavaScript -->
            <section>
              <div class="c-box">
                <h2 class="u-top-el">JavaScript History</h2>
                <p>JavaScript first created by Brendan Eich at Netscape. Intial name of the language was Mocha then LiveScript then JavaScript to attract Java Developers at that time. Though JavaScript has very little common with Java. JavaScript is not lighter version of Java. Both are completly independent programming language.</p>
                <h3 class="u-middle-el">Further Reading:</h3>
                <ul class="u-bottom-el u-pl-20">
                  <li>
                    <a href="https://en.wikipedia.org/wiki/JavaScript#History">JavaScript History Section on
                      Wikipedia</a>
                  </li>
                  <li>
                    <a href="https://auth0.com/blog/a-brief-history-of-javascript/">Brief History of JavaScript on Auth Blog</a>
                  </li>
                </ul>
              </div>
            </section>

            <!-- Data Types -->
            <section class="u-middle-el" id="data-types">
              <div class="c-box">
                <h2 class="u-top-el">How many data types in JavaScript?</h2>
                <p>The latest ECMAScript standard defines seven data types:</p>
                <ul class="u-middle-el u-pl-20">
                  <li>Six data types that are primitives:
                    <ul>
                      <li>Null</li>
                      <li>Undefined</li>
                      <li>String</li>
                      <li>Number</li>
                      <li>Boolean</li>
                      <li>Symbol ( New in ECMAScript 6 )</li>
                    </ul>
                  </li>
                  <li>and Object ( including function and array )</li>
                </ul>
                <h3 class="u-middle-el">References</h3>
                <ul class="u-bottom-el u-pl-20">
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures">Read MDN on data types in JavaScript</a>
                  </li>
                  <li>
                    <a href="https://codeburst.io/javascript-data-types-explained-347555cd2d4d">Read Codburst blog post on Medium</a>
                  </li>
                </ul>
              </div><!-- /.c-box -->
            </section>

            <!-- Undefined -->
            <section class="u-middle-el">
              <div class="c-box">
                <h2 class="u-top-el">What is Undefined in JavaScript?</h2>
                <p>
                  It's a special value. Special keyword. A primitive data type.
                  It is initially set to all the variables in the creation phase of the execution context by the JavaScript engine. But you can also set it by yourself in any variable as this is a primitive data type. But never do that. It will be hard to debug later. Leave it for the JavaScript engine so that you know when you see a undefined value of a variable that you never set it.
                </p>
              </div><!-- /.c-box -->
            </section>

            <h1 class="u-mt-60">How JavaScript Works Under The Hood?</h1>

            <!-- Global Object -->
            <section id="global-object" class="u-mt-30">
              <div class="c-box">
                <h2 class="u-top-el">What is Global?</h2>
                <p>
                  Code that aren't inside a function is global.
                </p>
                <p>
                  Whenever we're opening a tab in the browser, the JavaScript engine of the browser creates a global execution
                  context for us. That execution context gives us a global object named 'window' and a special variable named 'this'
                  automatically. We can use it in our JavaScript program when we working on the browser.
                </p>
              </div><!-- /.c-box -->
            </section>

            <!-- Execution Context -->
            <section id="execution-context" class="u-middle-el">
              <div class="c-box">
                <h2 class="u-top-el">What is the Execution Context in JavaScript?</h2>
                <p>
                  A wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently
                  running is managed via execution contexts. It can contain things beyond what you've written in your code.
                </p>
                <h3 class="u-middle-el">Details</h3>
                <p>
                  When a webpage loads, JavaScript engine creates an execution context named global execution context. That is the
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
                  Both works exactly the same way. Global execution context gets created by the JavaScript engine when it loads the
                  page. Function execution context gets created when we invoke a function in JavaScript.
                </p>
                <p>
                  All the execution context has two phases. One is creation phase. Another is execution phase. Creation phase runs
                  first before execution phase.
                </p>
                <p>
                  In creation phase, JavaScript engine looks into it's current execution context and finds out all the variables and
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
                  Functions are stored in the memory entirely in the creation phase. But variables are stored in the memory with the
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
                    <a href="http://dmitrysoshnikov.com/ecmascript/chapter-1-execution-contexts/">Article of Dmitry Soshnikov</a>
                  </li>
                  <li>
                    <a href="https://medium.com/search?q=Execution%20Context">Medium Search on Execution Context</a>
                  </li>
                </ul>
              </div><!-- /.c-box -->
            </section>

            <!-- Syntax Parser -->
            <section id="syntax-parser" class="u-middle-el">
              <div class="c-box">
                <h2 class="u-top-el">What is Syntax Parsers?</h2>
                <p>
                  A program that reads your code and determines what it does and if its grammar is valid. Your code isn't magic.
                  Someone else wrote a program to translate your code into machine readable code.
                </p>
              </div><!-- /.c-box -->
            </section>

            <!-- Lexical Environment -->
            <section id="lexical-environment" class="u-middle-el">
              <div class="c-box">
                <h2 class="u-top-el">What is Lexical Environment?</h2>
                <p>
                  Where something sits physically in the code you write. A lexical environment exists is programming languages in
                  which where you write something is important.
                </p>
              </div><!-- /.c-box -->
            </section>

            <!-- Identifier -->
            <section id="identifier" class="u-bottom-el">
              <div class="c-box">
                <h2 class="u-top-el">What is a identifier in JavaScript?</h2>
                <p>A sequence of characters in the code that identifies a <strong>variable</strong>, <strong>function</strong>, or
                  <strong>property</strong>.</p>
                <p>So in a nutshell, when you refer to any data/value (string, number, boolean, array, object, function, undefined,
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

            <!-- STRING LITERALS VS OBJECTS -->
            <section id="string-literals-vs-objects" class="c-copy">
              <h1 class="u-mt-60 u-mb-30">JavaScript Strings</h1>
              <div class="c-box">
                <h2 class="u-top-el">What is the difference between string literals and string objects in JavaScript?</h2>
                <p>
                  String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor
                  context (i.e., without using the new keyword) are primitive strings. JavaScript automatically converts primitives
                  to String objects, so that it's possible to use String object methods for primitive strings. In contexts where a
                  method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the
                  string primitive and call the method or perform the property lookup.
                </p>
                <p>
                  <a
                    href="https://stackoverflow.com/questions/17256182/what-is-the-difference-between-string-literals-and-string-objects-in-javascript">Reference</a>
                </p>
                <h3 class="u-middle-el">Explanation</h3>
                <p>Whenever we try to access a property/method on a primitive string, JavaScript automatically converts the
                  primitive string into a string object. So, <code>'Saabbir.length'</code> converts into <code>new
                    String('Saabbir').length</code> behind the scene. That's why we can access all of those string methods on a
                  primitive string like <strong>Saabbir</strong>.</p>
              </div><!-- /.c-box -->
            </section>

            <!-- STRING OBJECT -->
            <section id="string-object" class="u-middle-el">
              <div class="c-box">
                <h2 class="u-top-el">What is a string object?</h2>
                <p>Strings created from <code>String</code> constructor function in a constructor context (i.e, using the
                  <code>new</code> keyword) are string object.</p>
                <h3 class="u-middle-el">Example:</h3>
                <p>
                  <pre class="language-javascript"><code class="language-javascript">new String('Saabbir Hossain')</code></pre>
                </p>
                <h3 class="u-middle-el">Note:</h3>
                <ul class="u-bottom-el">
                  <li>
                    <p>Without using <code>new</code> operator, <code>String</code> function calls always returns string primitive
                      value.</p>
                  </li>
                  <li>
                    <p><code>String</code> function takes any types of data as an argument and converts it into it's corresponding
                      primitive string value. So, <code>String(100)</code> will return the primitive string <code>"100"</code>. In
                      here, the number value <code>100</code> gets converted into its corresponding <code>"100"</code> string value.
                    </p>
                  </li>
                </ul>
              </div><!-- /.c-box -->
            </section>
            <section class="u-bottom-el">
              <div class="c-box">
                <h2 class="u-top-el">String Prototype Chain:</h2>
                <pre class="language-javascript line-numbers"><code class="language-javascript">new String('string').__proto__ === String.prototype
String.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null</code></pre>
              </div><!-- /.c-box -->
            </section>

            <!-- FUNCTION -->
            <section id="function" class="c-copy">
              <h1 class="u-mt-60 u-mb-30">JavaScript Function</h1>
              <div class="c-box">
                <h2 class="u-top-el">What is a function in JavaScript?</h2>
                <p>A function is a data/value in JavaScript, which can be stored in a variable/identifier and called by that
                  identifier. In JavaScript, functions are regular objects with the additional capability of being callable.</p>
                <blockquote class="u-middle-el">
                  <p>Functions are objects in JavaScript. It differs from others as it's callable. This is a special and unique
                    feature to this object subtype.</p>
                </blockquote>
                <h3 class="u-middle-el">Further Reading:</h3>
                <ul class="u-bottom-el">
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">MDN Guide on Functions</a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions">MDN Reference on
                      Functions</a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function">MDN Reference on
                      Function Expression</a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">MDN
                      Reference on Function Global Object</a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">Functions
                      Default Parameters on MDN</a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">Functions
                      Rest Parameters on MDN</a>
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN
                      Reference on Arrow Functions</a>
                  </li>
                </ul>
              </div><!-- /.c-box -->
              <blockquote class="u-middle-el">
                <p>JavaScript function can or cannot return a value</p>
              </blockquote>
              <blockquote class="u-bottom-el">
                <p>If a JavaScript function doesn't return any value, it returns <code>undefined</code></p>
              </blockquote>
            </section>

            <!-- FUNCTION CURRYING -->
            <section class="u-bottom-el">
              <div class="c-box">
                <h2 class="u-top-el">Function Currying</h2>
                <p>
                  Creating a copy of a function but with some preset parameters.
                </p>
              </div><!-- /.c-box -->
            </section>

            <!-- ARRAY PROPERTIES -->
            <section class="c-copy u-mt-20">
              <div class="c-box">
                <h2 class="u-top-el">Most used array methods:</h2>
                <ul class="u-bottom-el">
                  <li><a href="#">push()</a></li>
                  <li><a href="#">pop()</a></li>
                  <li><a href="#">shift()</a></li>
                  <li><a href="#">unshift()</a></li>
                  <li><a href="#">includes()</a></li>
                  <li><a href="#">indexOf()</a></li>
                  <li><a href="#">slice()</a></li>
                  <li><a href="#">splice()</a></li>
                  <li><a href="#">concat()</a></li>
                  <li><a href="#">join()</a></li>
                  <li><a href="#">forEach()</a></li>
                  <li><a href="#">every()</a></li>
                  <li><a href="#">some()</a></li>
                  <li><a href="#">find()</a></li>
                  <li><a href="#">findIndex()</a></li>
                  <li><a href="#">filter()</a></li>
                  <li><a href="#">sort()</a></li>
                  <li><a href="#">reduce()</a></li>
                </ul>
              </div><!-- /.c-box -->
            </section>

            <h1 class="u-mt-60 u-mb-30">JavaScript Objects</h1>
            <!-- Object -->
            <section class="u-middle-el">
              <div class="c-box">
                <h2 class="u-top-el">What is Object?</h2>
                <p>
                  A collection of name value pairs. It's that simple.
                </p>
              </div><!-- /.c-box -->
            </section>

            <!-- Object Dillema -->
            <section id="object-dillema" class="c-copy">
              <div class="c-box">
                <h2 class="u-top-el">Function and Object dillema</h2>
                <p class="u-first-letter">Every function objects (including constructor functions) in javascript created from
                  <code>Function</code> constructor. So, it is the last constructor function in the chain.</p>
                <h3 class="u-middle-el">Examples:</h3>
                <ul class="u-middle-el">
                  <li>
                    <p><code>(function(){}).constructor.name === 'Function'</code> returns true.</p>
                  </li>
                  <li>
                    <p><code>Function.constructor.name === 'Function'</code> returns true.</p>
                  </li>
                  <li>
                    <p><code>Object.constructor.name === 'Function'</code> returns true.</p>
                  </li>
                  <li>
                    <p><code>Array.constructor.name === 'Function'</code> returns true.</p>
                  </li>
                  <li>
                    <p><code>String.constructor.name === 'Function'</code> returns true.</p>
                  </li>
                  <li>
                    <p><code>Number.constructor.name === 'Function'</code> returns true.</p>
                  </li>
                  <li>
                    <p><code>Boolean.constructor.name === 'Function'</code> returns true.</p>
                  </li>
                </ul>
                <div class="u-section-divider"></div>
                <p class="u-first-letter">Every function object (created from <code>Function</code> constructor) inherited some
                  properties/methods from <code>Function.prototpe</code> object. That is unique to function objects only. Like
                  <code>call</code>, <code>apply</code> methods only available to function objects. These methods are defined
                  directly into the <code>Function.prototype</code> object.</p>
                <h3 class="u-middle-el">Examples</h3>
                <ul class="u-middle-el">
                  <li><code>Function.prototype.hasOwnProperty('call') === true</code></li>
                </ul>
                <div class="u-section-divider"></div>
                <p class="u-first-letter">As far as we know, the instance objects has access to its constructor functions prototype
                  object properties. But for two exceptions. One for <code>Function.prototype</code> object and second for
                  <code>Object.prototype</code> object. Because all functions objects prototype chain ends with
                  <code>Function.prototype</code> object and its prototype chain ends with <code>Object.prototype</code> object.
                  Though the <code>Function.prototype</code> object is not created by <code>Object</code> constructor function, but
                  still it has access ot <code>Object.prototype</code> object which is the last object in the prototype chain. Its
                  prototype chain ends up with <code>null</code>.</p>
                <h3 class="u-middle-el">Examples:</h3>
                <ul class="u-bottom-el">
                  <li>
                    <p><code>Function.prototype.constructor.name === 'Function'</code> returns true.</p>
                  </li>
                  <li>
                    <p><code>Function.prototype.__proto__ === Function.prototype</code> returns false.</p>
                  </li>
                  <li>
                    <p><code>Function.prototype.__proto__ === Object.prototype</code> returns true.</p>
                  </li>
                </ul>
              </div><!-- /.c-box -->
            </section>

            <!-- JSON -->
            <section class="u-bottom-el">
              <div class="c-box">
                <h2 class="u-top-el">JSON in JavaScript</h2>
                <p>
                  JSON isn't really a part of JavaScript. It's a subset of JavaScript. Stands for JavaScript object notation.
                  Because it's inspired by JavaScript object literal syntax. Anything that is valid JSON is also valid JavaScript
                  object literal syntax but not all object literal syntax is valid JSON. In JSON, properties have to be wrapped in
                  quotes.
                </p>
              </div><!-- /.c-box -->
            </section>

            <h1 class="u-mt-60 u-mb-30">Asynchronous JavaScript</h1>
            <section>
              <div class="c-box">
                <h2 class="u-top-el">What we mean by Asynchronous?</h2>
                <p>Asynchronous simply means more than one at a time.</p>
                <h3 class="u-middle-el">Details</h3>
                <p>
                  When we're talking about running JavaScript, the JavaScript engine itself, we understand it
                  doesn't exist by itself inside for example in internet browser. JavaScript engine isn't the
                  only engine in the browser.
                </p>
                <p>
                  There are other engines and running pieces of code that are happening outside the JavaScript
                  engine that runs JavaScript when you loaded in to the browser.
                </p>
                <p>
                  All the engines running asynchronously inside the browser but what's happening inside the
                  JavaScript engine it's synchronous.
                </p>
                <p>
                  Suppose when we click on something in the browser that is an event. The click event. The
                  browser is going to place that click event on the event queue.
                </p>
                <p>
                  Question: When is JavaScript engine going to look at that queue and proceed? Answer: After all
                  the current execution context is complete. Because the JavaScript engine won't look at the
                  event queue untill the execution stack is empty.
                </p>
                <p>
                  Any events that happened outside of the JavaScript engine get placed into that queue and if
                  execution stack is empty if JavaScript isn't working on anything else currently it will
                  process those events and process those events in the order they happened.
                </p>
                <p>
                  Asynchronous callbacks are possible in JavaScript but the asynchronous part is really what
                  happening outside the JavaScript engine. Events in JavaScript happen asynchronously.
                </p>
              </div><!-- /.c-box -->
            </section>

            <section class="c-box u-mt-30">
              <h2 class="u-mb-30 u-underline">Curated List of JavaScript Learning Resources</h2>
              <div class="u-top-el">
                <h3 class="u-top-el">Blogs to follow</h3>
                <ul class="u-bottom-el">
                  <li><a href="https://tylermcginnis.com/blog/">Tyler McGinnis Blog</a></li>
                  <li><a href="https://2ality.com/">Dr. Axel Rauschmayer Blog</a></li>
                  <li><a href="https://humanwhocodes.com/">Nicholas C. Zakas Blog</a></li>
                  <li><a href="https://css-tricks.com/">CSS Tricks</a></li>
                  <li><a href="https://gomakethings.com/">Chris Ferdinandi</a></li>
                  <li><a href="https://laracasts.com/">Laracast</a></li>
                </ul>
              </div>
              <div class="u-middle-el">
                <h3 class="u-top-el">Development Tools</h3>
                <ul>
                  <li><a href="https://caniuse.com/">Can I Use?</a></li>
                  <li><a href="http://kangax.github.io/compat-table/es6/">ECMAScript compatibility table</a></li>
                  <li><a href="https://tylermcginnis.com/javascript-visualizer/">JavaScript Visualizer</a></li>
                  <li><a href="https://vanillajstoolkit.com/">The Vanilla JS Toolkit</a></li>
                  <li><a href="https://plainjs.com/">Plain JS</a></li>
                  <li><a href="https://html5test.com/">HTML5Test</a></li>
                </ul>
              </div>
              <div>
                <h3 class="u-top-el">Series</h3>
                <ul>
                  <li><a href="https://atom-morgan.github.io/javascript/">Code Companion series by Adam Morgan</a></li>
                </ul>
              </div>
            </section><!-- /.c-copy -->

            <div class="c-box c-copy u-mt-30">
              <p>This page lists most commonly used client-side objects, properties, and methods. <b>This is not an exhaustive
                  list.</b></p>

              <h2 class="u-middle-el">Most popular <a href="https://developer.mozilla.org/en-US/docs/Web/API">Web APIs</a></h2>
              <ul class="u-middle-el">
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model">CSSOM</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">DOM</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API">Geolocation API</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API">HTML Drag and Drop API</a>
                </li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Selection_API">Selection API</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></li>
                <li>...and many more. There are over hundreds of APIs is work in progress. The main two groups working on these APIs
                  are <a href="https://whatwg.org/">WHATWG</a> and <a href="https://www.w3.org/">W3C</a>. Visit their website to get
                  latest information about next hot new API they are working on currently.</li>
              </ul>

              <h2 class="u-middle-el">Most common interfaces/classes/constructors defined in above APIs</h2>
              <ul class="u-middle-el">
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Location">Location</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/History">History</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator">Navigator</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Screen">Screen</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Console">Console</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet">StyleSheet</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">Node</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ParentNode">ParentNode</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">Document</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">Element</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">HTMLElement</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList">NodeList</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection">HTMLCollection</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">Blob</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File">File</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer">DataTransfer</a></li>
              </ul>

              <h2 class="u-middle-el">DOM Tree Structure as Tree of Nodes</h2>
              <p>The one at the bottom inherit properties and methods from the top.</p>
              <ul class="u-bottom-el">
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget">EventTarget</a>
                  <ul>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">Node</a>
                      <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">Document</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/CharacterData">CharacterData</a>
                          <ul>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Text">Text</a></li>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Comment">Comment</a></li>
                          </ul>
                        </li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">Element</a>
                          <ul>
                            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">HTMLElement</a>
                              <ul>
                                <li><a
                                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement">HTMLAnchorElement</a>
                                </li>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement">HTMLInputElement</a>
                                </li>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement">HTMLTableElement</a>
                                </li>
                                <li>...and many more</li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div><!-- /.c-box -->

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