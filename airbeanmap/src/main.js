import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

/* new Vue({
  render: h => h(App),
}).$mount('#app') */

new Vue({
  router,
  store,

  // created: {
  //   //router

  // },

  data: function() {
    return {
      sortiment: [
        {
          name: "Bryggkaffe",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "medium",
          info: "info coming soon"
        },
        {
          name: "Caffé Doppio",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "dark",
          info: "info coming soon"
        },
        {
          name: "Cappuccino",
          price: 22,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "light",
          info: "info coming soon"
        },
        {
          name: "Latte Macchiato",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "dark",
          info: "info coming soon"
        },
        {
          name: "Kaffe Latte",
          price: 56,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "light",
          info: "info coming soon"
        },
        {
          name: "Cortado",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "dark",
          info: "info coming soon"
        },
      ],
    };
  },

  render: (h) => h(App),
}).$mount("#app");
