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
      <router-link to="/Landing">Landing</router-link> | 
      <router-link to="/Meny">Meny</router-link>
    </div>
   
    <Nav />
    <HamburgerMenu v-if="this.$root.$data.displayNavMenu" />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import HamburgerMenu from "./components/Hamburgarmeny.vue";

export default {
  name: "App",
  components: {
    Nav,
    HamburgerMenu,
  },
  methods: {
    hideShowMenu: function() {
      this.displayNavMenu = !this.displayNavMenu;
    }
  }
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
  width:700px;
  margin-left:auto;
  margin-right:auto;
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
