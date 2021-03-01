import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [
      {name: "Bryggkaffe", price: 49, amount: 2},
      {name: "Pulverkaffe", price: 88, amount: 4},
      {name: "Mega-kaffe", price: 138, amount: 1},
    ],
      logins: [
        {
          username: "sixten.kaffelover@zocom.se",
          password: "123456789",
        }
      ],
    count: 0,
    loggedin: false,
  },
  getters: {
    antaldrycker: state => {
      //return state.todos.filter(todo => todo.done)
      let siffra=0;
      state.orders.forEach((item) => {
        //console.log(item.amount) //value
        //console.log(item.price) //index
        siffra+=item.amount;
      });
      return siffra;
      //return state.orders[0].amount;
    },
    totalcost: state => {
      let siffra=0;
      state.orders.forEach((item) => {
      siffra+=item.amount*item.price;
      });
    return siffra;
    },
  },
  mutations: {
    increment (state) {
      state.count++
    },
    add(state, param) {
      state.orders[param].amount++;
    },
    remove(state, param) {
      state.orders[param].amount--;
      if (state.orders[param].amount <= 0) {
        state.orders.splice(param, 1);
      }
    },
    addnewitem(state, param) {
      let addCount=false;
          state.orders.forEach((item) => {
              if (param.name == item.name) {
                alert("Match!");
                item.amount++;
                addCount=true;
              }
          });
          if (addCount == false) {state.orders.push({name: param.name, price: param.price, amount: 1});}
    },
  },
  actions: {
  },
  modules: {
  }
})
