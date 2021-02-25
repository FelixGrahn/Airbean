import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'

Vue.config.productionTip = false

/* new Vue({
  render: h => h(App),
}).$mount('#app') */


new Vue({
  router,
  store,

  created: {
    router

  },

  data: function(){
    return {
      displayNavMenu: false,
      displayNavStatus: false,
      loggedin: false,
      logins: [
        {
          username: "sixten.kaffelover@zocom.se",
          password: "123456789",
        }
      ],
      sortiment: [
        {
          name: "Bryggkaffe",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
        },
        {
          name: "Ceffé Doppio",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
        },
        {
          name: "Cappuccino",
          price: 22,
          desc: "Bryggd på månadens bönor",
          amount: 0,
        },
        {
          name: "Latte Macchiato",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
        },
        {
          name: "Kaffe Latte",
          price: 56,
          desc: "Bryggd på månadens bönor",
          amount: 0,
        },
        {
          name: "Cortado",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
        },
      ],
      
      orders: [
      ],
    }
  },

  methods: {
    hideShowMenu() {
      this.displayNavMenu = !this.displayNavMenu;
      if (this.displayNavMenu) {this.displayNavStatus=false;}
    },
    hideShowStatus() {
      this.displayNavStatus = !this.displayNavStatus;
      if (this.displayNavStatus) {this.displayNavMenu=false;}
    },
    showStatus() {
      this.displayNavStatus = true;
    }
  },
  render: h => h(App)
}).$mount("#app");
