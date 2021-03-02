<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/About">About</router-link> | 
      <!-- <router-link to="/Landing">Landing</router-link> | --> 
      <router-link to="/Meny">Meny</router-link>
    </div>
   
    <Nav />
  
    <HamburgerMenu v-if="this.$store.state.displayNavMenu" /> 
    <Cart v-if="this.$store.state.displayNavStatus" />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import HamburgerMenu from "./components/Hamburgarmeny.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    Nav,
    HamburgerMenu,
    Cart,
  },
  methods: {
    increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
  }
};
</script>

<style>

.button {
  margin-top:10px;
  background-color:#2F2926;
  border:2px solid black;
  width:248px;
  height:55px;
  margin-left:auto;
  margin-right:auto;
  cursor:pointer;
  border-radius:50px;
  color:white;
  font-size:2em;
  font-family:times new roman;
  line-height:150%;
}
.button:hover {
  background-color:darkgrey;
  color:black;
}

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
