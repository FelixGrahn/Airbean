import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [
      /*
      {name: "Bryggkaffe", price: 49, amount: 2},
      {name: "Pulverkaffe", price: 88, amount: 4},
      {name: "Mega-kaffe", price: 138, amount: 1},
      */
    ],
      userlist: [
        {
          username: "Tom Hanks",
          email: "test@test.nu",
          password: "123",
            history: [{
              ordernum: "7367373647",
              orderdate: "20/20/20",
              ordersum: 333,
            },
            {
              ordernum: "8r9090e3",
              orderdate: "21/21/21",
              ordersum: 55,
            },
            {
              ordernum: "9898989385",
              orderdate: "19/10/05",
              ordersum: 87,
            }],
        },
        {
          username: "John Doe",
          email: "check@check.nu",
          password: "345",
            history: [{
            ordernum: "8t498985",
            orderdate: "13/13/14",
            ordersum: 22,
            },
            {
            ordernum: "459588959",
            orderdate: "09/09/09",
            ordersum: 777,
            },
            {
            ordernum: "9934483483",
            orderdate: "12/12/12",
            ordersum: 999,
            }],
        },
        {
          username: "Sixten K",
          email: "sixten.kaffelover@zocom.se",
          password: "123456789",
            history: [{
            ordernum: "HJDHGHGJGDHGJ",
            orderdate: "1/1/1",
            ordersum: 66,
            }],
        },
      ],
    count: 0,
    loggedin: false,
    useractive: 0,
  },
  getters: {
    antaldrycker: state => {
      let siffra=0;
      state.orders.forEach((item) => {
        siffra+=item.amount;
      });
      return siffra;
    },
    totalcost: state => {
      let siffra=0;
      state.orders.forEach((item) => {
      siffra+=item.amount*item.price;
      });
    return siffra;
    },
    totalcost_profile: state => {
      let siffra=0;
      state.userlist[state.useractive].history.forEach((item) => {
      siffra+=item.ordersum;
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
                //alert("Match!");
                item.amount++;
                addCount=true;
              }
          });
          if (addCount == false) {state.orders.push({name: param.name, price: param.price, amount: 1});}
    },
    login: function(state, param) {
      for (let i=0;i<state.userlist.length;i++) {
      if (param.user == state.userlist[i].email && param.pass == state.userlist[i].password) {
          state.loggedin=true;
          state.useractive=i;
      }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
