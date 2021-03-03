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
          info:"Bryggkaffe är en tradition som huvudsakligen växt fram i norra Europa och Nordamerika. Malningsgraden på kaffepulvret är generellt grövre än för bryggning av espresso eller moka. Det har samma funktion som för dessa på så sätt att malningsgraden påverkar bryggtiden för kaffet och behöver anpassas efter storlek på bryggaren."
        },
        {
          name: "Caffé Doppio",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "dark",
          info: "Caffè Doppio är kaffe som bryggs på en espressomaskin. Det är dubbel mängd kaffe i både mängd råvara och färdig dryck jämfört med enkel espresso.",
        },
        {
          name: "Cappuccino",
          price: 22,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "light",
          info: "Cappuccino är kaffe som bryggs på en espressomaskin med skummad mjölk. Mjölken gör kaffet mjukare och sötare och serveras då med en enkel espresso som bas. ",
        },
        {
          name: "Latte Macchiato",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "dark",
          info: "Latte macchiato är väl skummad mjölk som fläckas med kaffe som bryggs på en espressomaskin.",
        },
        {
          name: "Kaffe Latte",
          price: 56,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "light",
          info: "Caffè latte är kaffe som bryggs på en espressomaskin med ångvärmd mjölk. Mjölken gör kaffet mjukare och sötare.",
        },
        {
          name: "Cortado",
          price: 49,
          desc: "Bryggd på månadens bönor",
          amount: 0,
          type: "dark",
          info: "Cortado är en spansk kaffedryck som görs med måtten 50/50. Lika mycket espressokaffe som mjölk. Serveras traditionellt i ett litet glas. Ordet cortado kommer från det spanska verbet cortar, som betyder att skära. Med det menar man egentligen att man minskar syrligheten från kaffet genom att spä ut den med lite mjölk.",
        },
      ],
    };
  },

  render: (h) => h(App),
}).$mount("#app");
