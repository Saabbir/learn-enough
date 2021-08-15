<template>
  <div class="u-bg-gray">
    <div class="l-wrap">
      <div class="c-content">
        <Sidenav />
        <div class="c-content__main">
          <div class="c-copy">
            <div class="c-box">
              <p>
                This page lists most commonly used client-side objects,
                properties, and methods.
                <strong>This is not an exhaustive list.</strong>
              </p>

              <h2 class="u-mt-40">
                Most popular
                <a href="https://developer.mozilla.org/en-US/docs/Web/API"
                  >Web APIs</a
                >
              </h2>
              <ul class="u-mt-20">
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model"
                    >CSSOM</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
                    >DOM</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
                    >Geolocation API</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API"
                    >HTML Drag and Drop API</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
                    >Fetch API</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Selection_API"
                    >Selection API</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
                    >XMLHttpRequest</a
                  >
                </li>
                <li>
                  ...and many more. There are over hundreds of APIs is work in
                  progress. The main two groups working on these APIs are
                  <a href="https://whatwg.org/">WHATWG</a> and
                  <a href="https://www.w3.org/">W3C</a>. Visit their website to
                  get latest information about next hot new API they are working
                  on currently.
                </li>
              </ul>

              <h2 class="u-mt-40">
                Most common interfaces/classes/constructors defined in above
                APIs
              </h2>
              <ul class="u-mt-20">
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Window"
                    >Window</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Location"
                    >Location</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/History"
                    >History</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator"
                    >Navigator</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Screen"
                    >Screen</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Console"
                    >Console</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet"
                    >StyleSheet</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Node"
                    >Node</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/ParentNode"
                    >ParentNode</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Document"
                    >Document</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Element"
                    >Element</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
                    >HTMLElement</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList"
                    >NodeList</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection"
                    >HTMLCollection</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Event"
                    >Event</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Blob"
                    >Blob</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/File"
                    >File</a
                  >
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer"
                    >DataTransfer</a
                  >
                </li>
              </ul>

              <h2 class="u-mt-40">DOM Tree Structure as Tree of Nodes</h2>
              <p>
                The one at the bottom inherit properties and methods from the
                top.
              </p>
              <ul class="u-mt-20">
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"
                    >EventTarget</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Node"
                        >Node</a
                      >
                      <ul>
                        <li>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/Document"
                            >Document</a
                          >
                        </li>
                        <li>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/CharacterData"
                            >CharacterData</a
                          >
                          <ul>
                            <li>
                              <a
                                href="https://developer.mozilla.org/en-US/docs/Web/API/Text"
                                >Text</a
                              >
                            </li>
                            <li>
                              <a
                                href="https://developer.mozilla.org/en-US/docs/Web/API/Comment"
                                >Comment</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/API/Element"
                            >Element</a
                          >
                          <ul>
                            <li>
                              <a
                                href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"
                                >HTMLElement</a
                              >
                              <ul>
                                <li>
                                  <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement"
                                    >HTMLAnchorElement</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"
                                    >HTMLInputElement</a
                                  >
                                </li>
                                <li>
                                  <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement"
                                    >HTMLTableElement</a
                                  >
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
            </div>
            <!-- /.c-box -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/Sidenav.vue";
export default {
  name: "ClientSideJS",
  components: {
    Sidenav,
  },
  beforeMount() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  },
};
</script>