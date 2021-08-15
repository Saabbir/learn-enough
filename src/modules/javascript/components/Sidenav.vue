<template>
  <aside class="c-sidenav" ref="sidenav">
    <ul>
      <li>
        <router-link :to="{ name: 'JavaScript_Introduction' }"
          >Introduction</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Data_Types' }"
          >Data Types</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Strings' }">Strings</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Functions' }"
          >Functions</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Arrays' }">Arrays</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Objects' }">Objects</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_JSON' }">JSON</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Under_The_Hood' }"
          >JavaScript Under The Hood</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Client_Side' }"
          >Client Side JavaScript</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Async' }">Async JS</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JavaScript_Learning_Resources' }"
          >JavaScript Learning Resources</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'ES6' }">ES6</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'WholeJavaScript' }"
          >Whole JavaScript</router-link
        >
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "JavaScriptSidenav",
};
</script>

<style lang="scss" scoped>
</style>