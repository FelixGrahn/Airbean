<template>
  <nav class="navbar">
    <div class="button menu" v-on:click="hideShowMenu()">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>{{this.$router.currentRoute.path}}</div>
    <div class="button bag" v-on:click="hideShowStatus()">
      <span class="showamount">{{visaantal()}}</span>
    </div>
  </nav>
</template>

<script>


export default {

  methods: {
      visaantal: function() {
        return this.$store.getters.antaldrycker;
      },
      hideShowMenu() {
        this.$store.commit('hideShowMenu')
      },
      hideShowStatus() {
        this.$store.commit('hideShowStatus')
      },
      
  },
  // computed: {
  //     check: function(param) {
  //       return this.$store.state.param;
  //     }
  // },
  

};
</script>

<style scoped>



.navbar {
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5%;
  box-sizing: border-box;
}

.menu > div {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
.button > div:nth-child(1) {
  margin-top: 35%;
}

.button {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: block;
  background-color: #202020;
  cursor: pointer;
  box-sizing: border-box;
  opacity: 0.8;
  margin:0;
  padding:0;
}
.button:hover {
  border: 4px solid red;
  opacity: 1;
}

.menu {
  background-color: #eee;
}
.bag {
  background-image: url("../assets/bag.png");
  background-position: center center;
  background-size: 16px 22px;
  background-repeat: no-repeat;
}
.showamount {
  color:white;
  font-weight:600;
  font-size:44px;
  display:block;
  background-color:red;
  border-radius:50%;
  width:50px;
  height:50px;
  text-align:center;
  margin-left:60%;
  margin-top:-10%;
}
</style>