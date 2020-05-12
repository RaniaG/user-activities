<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Dashboard</router-link>
    </nav>
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
</style>
