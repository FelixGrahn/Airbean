import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: [
    ],
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
    userlist: [
      {
        username: "Tom Hanks",
        email: "test@test.nu",
        password: "123",
        history: [
          {
            ordernum: "",
            orderdate: "",
            ordersum: 0,
            myitems: [],
          },
        ],
      },
      {
        username: "John Doe",
        email: "check@check.nu",
        password: "345",
        history: [
          {
            ordernum: "",
            orderdate: "",
            ordersum: 0,
            myitems: [],
          },
        ],
      },
      {
        username: "Sixten K",
        email: "sixten.kaffelover@zocom.se",
        password: "123456789",
        history: [
          {
            ordernum: "",
            orderdate: "",
            ordersum: 0,
            myitems: [],
          },
        ],
      },
    ],
    count: 0,
    loggedin: false,
    useractive: 0,
    displayNavMenu: false,
    displayNavStatus: false,
  },
  getters: {
    antaldrycker: (state) => {
      let siffra = 0;
      state.orders.forEach((item) => {
        siffra += item.amount;
      });
      return siffra;
    },
    totalcost: (state) => {
      let siffra = 0;
      state.orders.forEach((item) => {
        siffra += item.amount * item.price;
      });
      return siffra;
    },
    totalcost_profile: (state) => {
      let siffra = 0;
      state.userlist[state.useractive].history.forEach((item) => {
        siffra += item.ordersum;
      });
      return siffra;
    },
    checklogin: (state) => {
      return state.loggedin;
    },
  },
  mutations: {
    add(state, param) {
      state.orders[param].amount++;
    },
    remove(state, param) {
      state.orders[param].amount--;
      if (state.orders[param].amount <= 0) {
        state.orders.splice(param, 1);
      } 
    },
    hideShowMenu(state) {
      state.displayNavMenu = !state.displayNavMenu;
      if (state.displayNavMenu) {state.displayNavStatus=false;}
    },
    hideShowStatus(state) {
      state.displayNavStatus = !state.displayNavStatus;
      if (state.displayNavStatus) {state.displayNavMenu=false;}
    },
    showStatus(state) {
      state.displayNavStatus = true;
    },
    addnewitem(state, param) {
      let addCount = false;
      state.orders.forEach((item) => {
        if (param.name == item.name) {
          item.amount++;
          addCount = true;
        }
      });
      if (addCount == false) {
        state.orders.push({ name: param.name, price: param.price, amount: 1 });
      }
    },
    pushNewOrder: function(state, payload) {
        state.userlist[state.useractive].history.unshift(payload);
        state.orders=[];
    },
    loginfromlocal: function(state, payload) {
      state.loggedin = true;
      state.useractive = payload;
    },
    login: function(state, param) {
      for (let i = 0; i < state.userlist.length; i++) {
        if (
          param.user == state.userlist[i].email &&
          param.pass == state.userlist[i].password
        ) {
          state.loggedin = true;
          state.useractive = i;
          localStorage.setItem("user", i);
        }
      }
    },
    logout: function(state) {
      state.loggedin = false;
      localStorage.removeItem("user");
    },
  },
  actions: {},
  modules: {},
});
