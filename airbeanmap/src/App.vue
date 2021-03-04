<template>
  <div id="app">
    <HamburgerMenu v-if="this.$store.state.displayNavMenu" />
    <Cart v-if="this.$store.state.displayNavStatus" />
    <router-view />
  </div>
</template>

<script>
import HamburgerMenu from "./components/Hamburgarmeny.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    HamburgerMenu,
    Cart,
  },
  created() {
    this.checklocalstorage();
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    checklocalstorage() {
      let getuser = localStorage.getItem("user");
      if (getuser) {
        this.$store.commit("loginfromlocal", getuser);
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap");

:root {
  --hfont: "PT Serif", serif;
  --brodtext: "Work Sans", sans-serif;
  --minheight: 1100px;
  background-color:#AE8A82;
}

.bottomImg {
  background-image: url("./assets/footer-leaf.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100%;
  display: flex;
  flex-flow: column;
  padding-bottom: 190px;
}
.button {
  margin-top: 10px;
  background-color: #2f2926;
  border: 2px solid black;
  width: 248px;
  height: 55px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-radius: 50px;
  color: white;
  font-size: 1.8em;
  font-family: var(--hfont);
  line-height: 175%;

}
.button:hover {
  background-color: darkgrey;
  color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
