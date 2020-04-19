<template>
  <div class="l-wrap c-copy">

    <h1 class="u-mb-20">Asynchronous JavaScript</h1>
    
    <section class="c-box">
      <h2 class="u-mb-20">What we mean by Asynchronous?</h2>
      <p>Asynchronous simply means more than one at a time.</p>
      <h3 class="u-mt-40">Details</h3>
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
    </section><!-- /.c-box -->

    <section class="c-box u-mt-20">
      <h2 class="u-mb-20">Further reading</h2>
      <ul>
        <li>
          <a href="https://www.hongkiat.com/blog/synchronous-asynchronous-javascript/" target="_blank">Understanding Synchronous and Asynchronous JavaScript – Part 1</a>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'AsyncJS',
    beforeMount() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      })
    },
  }
</script>