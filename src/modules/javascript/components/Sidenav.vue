<template>
  <ul :class="'c-sidenav ' + this.className" ref="sidenav">
    <li
      :class="this.$route.path === '/javascript/introduction' ? 'active' : ''"
    >
      <router-link :to="{ name: 'JavaScript_Introduction' }"
        >Introduction</router-link
      >
    </li>
    <li :class="this.$route.path === '/javascript/data-types' ? 'active' : ''">
      <router-link :to="{ name: 'JavaScript_Data_Types' }"
        >Data Types</router-link
      >
    </li>
    <li :class="this.$route.path === '/javascript/strings' ? 'active' : ''">
      <router-link :to="{ name: 'JavaScript_Strings' }">Strings</router-link>
    </li>
    <li :class="this.$route.path === '/javascript/functions' ? 'active' : ''">
      <router-link :to="{ name: 'JavaScript_Functions' }"
        >Functions</router-link
      >
    </li>
    <li :class="this.$route.path === '/javascript/arrays' ? 'active' : ''">
      <router-link :to="{ name: 'JavaScript_Arrays' }">Arrays</router-link>
    </li>
    <li :class="this.$route.path === '/javascript/objects' ? 'active' : ''">
      <router-link :to="{ name: 'JavaScript_Objects' }">Objects</router-link>
    </li>
    <li :class="this.$route.path === '/javascript/json' ? 'active' : ''">
      <router-link :to="{ name: 'JavaScript_JSON' }">JSON</router-link>
    </li>
    <li
      :class="this.$route.path === '/javascript/under-the-hood' ? 'active' : ''"
    >
      <router-link :to="{ name: 'JavaScript_Under_The_Hood' }"
        >JavaScript Under The Hood</router-link
      >
    </li>
    <li :class="this.$route.path === '/javascript/client-side' ? 'active' : ''">
      <router-link :to="{ name: 'JavaScript_Client_Side' }"
        >Client Side JavaScript</router-link
      >
    </li>
    <li
      :class="this.$route.path === '/javascript/asynchronous' ? 'active' : ''"
    >
      <router-link :to="{ name: 'JavaScript_Async' }">Async JS</router-link>
    </li>
    <li
      :class="
        this.$route.path === '/javascript/learning-resources' ? 'active' : ''
      "
    >
      <router-link :to="{ name: 'JavaScript_Learning_Resources' }"
        >JavaScript Learning Resources</router-link
      >
    </li>
    <li :class="this.$route.path === '/javascript/es6' ? 'active' : ''">
      <router-link :to="{ name: 'ES6' }">ES6</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "JavaScriptSidenav",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>