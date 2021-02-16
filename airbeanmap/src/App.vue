<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- felix test 1 -->
    <!-- fredrik test 1 -->
    <!-- sinan test 3 -->
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/About">About</router-link> | 
      <router-link to="/Landing">Landing</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld.vue"; */

export default {
  /* name: "App",
  components: {
    HelloWorld,
  }, */
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
