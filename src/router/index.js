import Vue from "vue";
import VueRouter from "vue-router";

import JavaScriptRoutes from "@/modules/javascript/routes";
import NotFound from "../components/404.vue";

Vue.use(VueRouter);

const routes = [
  ...JavaScriptRoutes,
  {
    path: "/",
    name: "Home",
    meta: { title: "Home | Learn Enough" },
    component: () =>
      import(/* webpackChunkName: "home" */ "../modules/home/views/Home.vue"),
  },
  {
    path: "/command-line",
    name: "CommandLine",
    meta: { title: "Command Line | Learn Enough" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "command-line" */ "../modules/command-line/views/CommandLine.vue"
      ),
  },
  {
    path: "/text-editor",
    name: "TextEditor",
    meta: { title: "Text Editor | Learn Enough" },
    component: () =>
      import(
        /* webpackChunkName: "text-editor" */ "../modules/text-editor/views/TextEditor.vue"
      ),
  },
  {
    path: "/git",
    name: "Git",
    meta: { title: "Git | Learn Enough" },
    component: () =>
      import(/* webpackChunkName: "git" */ "../modules/git/views/Git.vue"),
  },
  {
    path: "/css",
    name: "Css",
    meta: { title: "CSS | Learn Enough" },
    component: () =>
      import(/* webpackChunkName: "css" */ "../modules/css/views/Css.vue"),
  },
  {
    path: "/javascript",
    name: "JavaScript",
    meta: { title: "JavaScript | Learn Enough" },
    component: () =>
      import(
        /* webpackChunkName: "javascript" */ "../modules/javascript/views/JavaScript.vue"
      ),
  },
  {
    path: "/php",
    name: "Php",
    meta: { title: "PHP | Learn Enough" },
    component: () =>
      import(/* webpackChunkName: "php" */ "../modules/php/views/Php.vue"),
  },
  {
    path: "/wordpress",
    name: "WordPress",
    meta: { title: "WordPress | Learn Enough" },
    component: () =>
      import(
        /* webpackChunkName: "wordpress" */ "../modules/wordpress/views/WordPress.vue"
      ),
  },
  {
    path: "/vue",
    name: "Vue",
    meta: { title: "Vue | Learn Enough" },
    component: () =>
      import(
        /* webpackChunkName: "wordpress" */ "../modules/vue/views/Vue.vue"
      ),
  },
  {
    path: "/html-email",
    name: "HtmlEmail",
    meta: { title: "HTML Email | Learn Enough" },
    component: () =>
      import(
        /* webpackChunkName: "html-email" */ "../modules/html-email/views/HtmlEmail.vue"
      ),
  },
  {
    path: "/regex",
    name: "Regex",
    meta: { title: "Regex | Learn Enough" },
    component: () =>
      import(
        /* webpackChunkName: "regex" */ "../modules/regex/views/Regex.vue"
      ),
  },
  {
    path: "/web-development",
    name: "WebDevelopment",
    meta: { title: "Web Development | Learn Enough" },
    component: () =>
      import(
        /* webpackChunkName: "web-development" */ "../modules/web-development/views/WebDevelopment.vue"
      ),
  },
  {
    path: "*",
    name: "Not Found",
    meta: { title: "404 | Learn Enough" },
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

// Consult this article -> https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head for following code

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
