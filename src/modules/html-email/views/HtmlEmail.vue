<template>
  <div class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-mb-20 u-text-underline"
        >Back home</router-link
      >

      <!-- Web vs HTML Email -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            HTML email development isn't web development
          </caption>
          <thead>
            <tr>
              <th>Web</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;link rel=“stylesheet”&gt;</td>
              <td>&lt;foo style=“”&gt;</td>
            </tr>
            <tr>
              <td>&lt;header&gt; &lt;section&gt; &lt;article&gt;</td>
              <td>&lt;table&gt; &lt;tr&gt; &lt;td&gt;</td>
            </tr>
            <tr>
              <td>em rem fr</td>
              <td>px</td>
            </tr>
            <tr>
              <td>background-color</td>
              <td>bgcolor</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>padding</td>
            </tr>
            <tr>
              <td>rgba hsa</td>
              <td>#000000 black</td>
            </tr>
            <tr>
              <td>text-align: left;</td>
              <td>align=“left”</td>
            </tr>
            <tr>
              <td>JavaScript Interactivity</td>
              <td>CSS Interactivity</td>
            </tr>
            <tr>
              <td>Shorthand Properties</td>
              <td>Explicit Longhand</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->

      <!-- Email Development Best Practices -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            HTML email development best practices
          </caption>
          <tbody>
            <tr>
              <td>
                Create basic html skeleton with doctype, head, title, meta, and
                body tag.
              </td>
            </tr>
            <tr>
              <td>Create hidden preview text.</td>
            </tr>
            <tr>
              <td>
                Structure body content using table tag for container, tr tag for
                rows and td tag for columns.
              </td>
            </tr>
            <tr>
              <td>
                Create html structure using table tags. Use border, width,
                align, bgcolor, cellpadding, and cellspacing table attributes to
                style a table element.
              </td>
            </tr>
            <tr>
              <td>
                Use inline styles, the <strong>align</strong> attribute,
                <strong>nested tables</strong>, and
                <strong>stacked tables</strong> to accomplish multiple columns
                in a row.
              </td>
            </tr>
            <tr>
              <td>
                Apply inline css for <strong>critical content</strong> and embed
                css for <strong>reset</strong> and
                <strong>progressive enhancement functionality</strong>.
              </td>
            </tr>
            <tr>
              <td>
                Apply role="presentation" to every table element to prevent
                screen reader software from reading every table element.
              </td>
            </tr>
            <tr>
              <td>Use inline style attribute to style an element.</td>
            </tr>
            <tr>
              <td>
                Use <strong>padding</strong> to create whitespace,
                <strong>align</strong> attribute for aligning content, and
                <strong>width</strong> attribute on table and td tag to for
                sizing.
              </td>
            </tr>
            <tr>
              <td>
                The best place to apply <strong>padding</strong> is to the
                <strong>td</strong> element.
              </td>
            </tr>
            <tr>
              <td>
                To align content apply <strong>align</strong> attribute to the
                table cell as well.
              </td>
            </tr>
            <tr>
              <td>
                Apply <strong>align</strong> attribute to all
                <strong>td</strong> element avoiding inherit alignment from
                paren td or table tag.
              </td>
            </tr>
            <tr>
              <td>
                A typical html email layout structure works like this, a root
                container table, a nested inner container table to constrain
                width to 600px, and then a third fluid table for the actual
                content.
              </td>
            </tr>
            <tr>
              <td>Use percentage value for content column width.</td>
            </tr>
            <tr>
              <td>
                Use <strong>valign</strong> attribute for aligning vertically.
              </td>
            </tr>
            <tr>
              <td>
                Use <strong>47%</strong> width for each column in two columns
                layout and <strong>33%</strong> width for each column in three
                columns layout because of incorrect math rendering on Outlook.
              </td>
            </tr>
            <tr>
              <td>
                Each horizontal section/line in the email content should be
                wrapped within it's own table element for modularity. For
                example every single horizontal copy line should be wrapped
                within it's own table, tr, and td tags. And these table element
                width should be 100% always.
              </td>
            </tr>
            <tr>
              <td>
                Every single block level content should be wrapped within it's
                own table, tr, td elements. Make it a complete separate
                discreate component for modularity and maintenance.
              </td>
            </tr>
            <tr>
              <td>
                Avoid shorthand property values and use longhand version of each
                property. <strong>Be explicit.</strong>
              </td>
            </tr>
            <tr>
              <td>
                Don not use unit less line height. Use <strong>px</strong> unit
                explicitly for all values including line heights.
              </td>
            </tr>
            <tr>
              <td>Use @media rule to import google font.</td>
            </tr>
            <tr>
              <td>Conditionally apply markup for outlook.</td>
            </tr>
            <tr>
              <td>Use absolute path for image source.</td>
            </tr>
            <tr>
              <td>
                Use <strong>width</strong> and <strong>height</strong> attribute
                explicitly on img element.
              </td>
            </tr>
            <tr>
              <td>
                Style <strong>alt</strong> tag by specifying background color
                and using font properties to the img element's inline style
                which will only appear when image is disabled on the email
                client.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->

      <!-- Email Testing Clients -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Email testing clients
          </caption>
          <thead>
            <tr>
              <th>Client</th>
              <th>My Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info">
              <td colspan="2">
                <strong><small>Web-based Email Clients</small></strong>
              </td>
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
              <td colspan="2">
                <strong><small>Desktop Email Clients</small></strong>
              </td>
            </tr>
            <tr>
              <td>AOL Desktop</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Air Mail</td>
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
              <td>Lotus Notes</td>
              <td><i class="fa fa-times u-color-invalid"></i></td>
            </tr>
            <tr>
              <td>Entourage</td>
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
      </div>
      <!-- /.c-table-responsive -->

      <!-- Terminology -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            HTML email development terminology
          </caption>
          <thead>
            <th>Term</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr>
              <td>Container table</td>
              <td>For wrapping all content of an HTML email.</td>
            </tr>
            <tr>
              <td>Constrain table</td>
              <td>
                For adding a max width to the email content. Using 600px
                constrain width is very common.
              </td>
            </tr>
            <tr>
              <td>Content table</td>
              <td>
                This table is the third nested table which contains actual
                content like images, headings, copy, links, buttons etc.
              </td>
            </tr>
            <tr>
              <td>Modular component/block</td>
              <td>
                Each block level content in html email should be wrapped on it's
                own table, tr, td element for portability and better support.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->

      <!-- Articles related to email design, development, and marketing -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Articles related to email design, development, and marketing
          </caption>
          <tbody>
            <tr>
              <td>
                <a
                  href="http://labs.actionrocket.co/td-or-not-to-td-that-is-now-a-question"
                  target="_blank"
                  >td or not td? That is now a question.</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://ia.net/topics/the-web-is-all-about-typography-period"
                  target="_blank"
                  >Web Design is 95% Typography</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://julie.io/learn-email-html/issues/4-images-back-to-basics/"
                  target="_blank"
                  >Issue #4 - Back to Basics: Images</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.freecodecamp.org/news/the-fab-four-technique-to-create-responsive-emails-without-media-queries-baf11fdfa848/"
                  target="_blank"
                  >The Fab Four technique to create Responsive Emails without
                  Media Queries</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://cm.engineering/coding-mobile-first-emails-1513ac4673e"
                  target="_blank"
                  >Coding mobile-first emails</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->

      <!-- Email design and development tools -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Email design and development tools
          </caption>
          <tbody>
            <tr>
              <td>
                <a href="https://buttons.cm/" target="_blank"
                  >Bulletproof email buttons</a
                >
                by <strong>Campaign Monitor</strong>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://backgrounds.cm/" target="_blank"
                  >Bulletproof background images</a
                >
                by <strong>Campaign Monitor</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->
    </div>
    <!-- /.l-wrap -->
  </div>
</template>

<script>
export default {
  name: "HtmlEmail",
};
</script>

<style lang="scss" scoped>
</style>