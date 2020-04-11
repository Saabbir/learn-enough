<template>
  <section class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-top-el">Back home</router-link>

      <div class="c-table-responsive">
        <table class="c-table">
          <caption>Learn Most Essential WordPress Functions</caption>
          <thead>
            <tr>
              <th>Function Name</th>
              <th>Short Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code class="inline">bloginfo()</code></td>
              <td>Displays information about the current site.</td>
            </tr>
            <tr>
              <td><code class="inline">have_posts()</code></td>
              <td>Whether current WordPress query has results to loop over.</td>
            </tr>
            <tr>
              <td><code class="inline">the_post()</code></td>
              <td>Sets up the current post.</td>
            </tr>
            <tr>
              <td><code class="inline">the_title()</code></td>
              <td>Display or retrieve the current post title with optional markup.</td>
            </tr>
            <tr>
              <td><code class="inline">the_content()</code></td>
              <td>Display the post content.</td>
            </tr>
            <tr>
              <td><code class="inline">the_excerpt()</code></td>
              <td>Display the post excerpt.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_excerpt()</code></td>
              <td>Return the post excerpt.</td>
            </tr>
            <tr>
              <td><code class="inline">the_permalink()</code></td>
              <td>Displays the permalink for the current post.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_head()</code></td>
              <td>Fire the wp_head action.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_footer()</code></td>
              <td>Fire the wp_footer action.</td>
            </tr>
            <tr>
              <td><code class="inline">get_header()</code></td>
              <td>Load header template.</td>
            </tr>
            <tr>
              <td><code class="inline">get_footer()</code></td>
              <td>Load footer template.</td>
            </tr>
            <tr>
              <td><code class="inline">add_action()</code></td>
              <td>Hooks a function on to a specific action.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_enqueue_style()</code></td>
              <td>Enqueue a CSS stylesheet.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_enqueue_script()</code></td>
              <td>Enqueue a script.</td>
            </tr>
            <tr>
              <td><code class="inline">get_stylesheet_uri()</code></td>
              <td>Retrieves the URI of current theme stylesheet.</td>
            </tr>
            <tr>
              <td><code class="inline">get_theme_file_uri()</code></td>
              <td>Retrieves the URL of a file in the theme.</td>
            </tr>
            <tr>
              <td><code class="inline">site_url()</code></td>
              <td>Retrieves the URL for the current site where WordPress application files (e.g. wp-blog-header.php or
                the wp-admin/ folder) are accessible.</td>
            </tr>
            <tr>
              <td><code class="inline">home_url()</code></td>
            </tr>
            <tr>
              <td><code class="inline">add_theme_support()</code></td>
              <td>Registers theme support for a given feature.</td>
            </tr>
            <tr>
              <td><code class="inline">register_nav_menu()</code></td>
              <td>Registers a navigation menu location for a theme.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_nav_menu()</code></td>
              <td>Displays a navigation menu.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_ID()</code></td>
              <td>Retrieve the ID of the current item in the WordPress Loop.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_get_post_parent_id()</code></td>
              <td>Returns the ID of the post’s parent.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_title()</code></td>
              <td>Retrieve post title.</td>
            </tr>
            <tr>
              <td><code class="inline">get_permalink()</code></td>
              <td>Retrieves the full permalink for the current post or post ID.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_permalink()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">wp_list_pages()</code></td>
              <td>Retrieve or display a list of pages (or hierarchical post type items) in list (li) format.</td>
            </tr>
            <tr>
              <td><code class="inline">language_attributes()</code></td>
              <td>Displays the language attributes for the html tag.</td>
            </tr>
            <tr>
              <td><code class="inline">body_class()</code></td>
              <td>Displays the class names for the body element.</td>
            </tr>
            <tr>
              <td><code class="inline">the_author_posts_link()</code></td>
              <td>Displays an HTML link to the author page of the current post’s author.</td>
            </tr>
            <tr>
              <td><code class="inline">the_time()</code></td>
              <td>Display the time at which the post was written.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_category_list()</code></td>
              <td>Retrieve category list for a post in either HTML list or custom format.</td>
            </tr>
            <tr>
              <td><code class="inline">paginate_links()</code></td>
              <td>Retrieve paginated link for archive post pages.</td>
            </tr>
            <tr>
              <td><code class="inline">is_category()</code></td>
              <td>Determines whether the query is for an existing category archive page.</td>
            </tr>
            <tr>
              <td><code class="inline">single_cat_title()</code></td>
              <td>Display or retrieve page title for category archive.</td>
            </tr>
            <tr>
              <td><code class="inline">is_author()</code></td>
              <td>Determines whether the query is for an existing author archive page.</td>
            </tr>
            <tr>
              <td><code class="inline">the_author()</code></td>
              <td>Display the name of the author of the current post.</td>
            </tr>
            <tr>
              <td><code class="inline">the_archive_title()</code></td>
              <td>Display the archive title based on the queried object.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_archive_title()</code></td>
              <td>Display the archive title based on the queried object.</td>
            </tr>
            <tr>
              <td><code class="inline">the_archive_description()</code></td>
              <td>Display category, tag, term, or author description.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_archive_description()</code></td>
              <td>Display category, tag, term, or author description.</td>
            </tr>
            <tr>
              <td><code class="inline">WP_Query()</code></td>
              <td>The WordPress Query class.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_trim_words()</code></td>
              <td>Trims text to a certain number of words.</td>
            </tr>
            <tr>
              <td><code class="inline">get_the_content()</code></td>
              <td>Retrieve the post content.</td>
            </tr>
            <tr>
              <td><code class="inline">wp_reset_postdata()</code></td>
              <td>After looping through a separate query, this function restores the $post global to the current post in
                the main query.</td>
            </tr>
            <tr>
              <td><code class="inline">register_post_type()</code></td>
              <td>Registers a post type.</td>
            </tr>
            <tr>
              <td><code class="inline">get_post_type_archive_link()</code></td>
              <td>Retrieves the permalink for a post type archive.</td>
            </tr>
            <tr>
              <td><code class="inline">get_post_type()</code></td>
              <td>Retrieves the post type of the current post or of a given post.</td>
            </tr>
            <tr>
              <td><code class="inline">is_admin()</code></td>
              <td>Determines whether the current request is for an administrative interface page.</td>
            </tr>
            <tr>
              <td><code class="inline">get_query_var()</code></td>
              <td>Retrieve variable in the WP_Query class.</td>
            </tr>
            <tr>
              <td><code class="inline">is_page()</code></td>
              <td>Determines whether the query is for an existing single page.</td>
            </tr>
            <tr>
              <td><code class="inline">is_home()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">is_single()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">is_archive()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">has_excerpt()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">is_post_type_archive()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_pages()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">the_post_thumbnail()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">add_image_size()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">esc_html()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">esc_url()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_search_query()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_template_part()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_search_form()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">wp_get_current_user()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_current_user_id()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_avatar()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">show_admin_bar()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">add_filter()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">wp_redirect()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">is_user_logged_in()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">wp_logout_url()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">wp_login_url()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">wp_registration_url()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_bloginfo()</code></td>
              <td></td>
            </tr>
            <!-- Advanced Custom Field Functions -->
            <tr class="info">
              <td colspan="2"><strong>2 Most Important Advanced Custom Field Fucntions</strong></td>
            </tr>
            <tr>
              <td><code class="inline">the_field()</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code class="inline">get_field()</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div><!-- /.c-table-responsive -->
      <div class="c-copy">
        <h3 class="u-middle-el">Most Important Topics to Remember:</h3>
        <ol>
          <li>Creating Custom Post Type</li>
          <li>Creating Custom Query</li>
          <li>Creating Custom Field</li>
          <li>Editing/Manipulating WordPress Default Query</li>
          <li>Relationship between two posts from different post type</li>
          <li>How to get desired posts by using filters in custom query</li>
          <li>Knowing different hooks</li>
        </ol>
        <div class="u-middle-el">
          <h3 class="u-top-el">Notes</h3>
          <ul>
            <li>WordPress Default Pagination Works for only Default URL based Queries.</li>
          </ul>
        </div>
        <div class="u-middle-el">
          <h3 class="u-top-el">Most used and handy WordPress plugins list</h3>
          <ul>
            <li>Advanced Custom Field</li>
            <li>Regenerate Thumbnails</li>
            <li>Manual Image Crop</li>
            <li>Members by Justin Tadlock</li>
            <li>All-in-One WP Migration by ServMask</li>
          </ul>
        </div>
        <div>
          <h3 class="u-top-el">WordPress Learning Resources</h3>
          <ul>
            <li><a href="https://developer.wordpress.org/reference/">WordPress Reference</a></li>
            <li><a href="https://learnwith.hasinhayder.com/wp/shop/wordpress-theme-development/">Learn With Hasin
                Hayder</a></li>
            <li><a href="https://websitesetup.org/">How to Create a Website using WordPress</a></li>
          </ul>
        </div>
      </div><!-- /.c-copy -->
    </div><!-- /.l-wrap -->
  </section>
</template>

<script>
  export default {
    name: 'WordPress'
  }
</script>