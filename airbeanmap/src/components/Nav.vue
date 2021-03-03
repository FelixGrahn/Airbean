<template>
  <nav class="navbar" :class="{backgroundImg : !bgimage}">
    <div class="button menu" v-on:click="hideShowMenu()" v-if="!hideMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="button_invisible" v-else></div>
    <div class="button bag" v-on:click="hideShowStatus()" v-if="!hideCart">
      <span class="showamount">{{visaantal()}}</span>
    </div>
  </nav>
</template>

<script>


export default {

  props: {
      hideCart : Boolean,
      hideMenu : Boolean,
      bgimage: Boolean,
  },
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

.backgroundImg {
  background-image: url("../assets/header-leaf.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  
}

.navbar {
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5%;
  box-sizing: border-box;
  padding-bottom: 80px;
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

.button, .button_invisible {
  width: 90px;
  height: 90px;
  display: block;
  box-sizing: border-box;
  margin:0;
  padding:0;
}
.button {
  border-radius: 50%;
  background-color: #202020;
  cursor: pointer;
  opacity: 0.8;
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