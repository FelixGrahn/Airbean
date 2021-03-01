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
          id: 1,
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
          id: 2,
        },
        {
          username: "Sixten K",
          email: "sixten.kaffelover@zocom.se",
          password: "123456789",
          id: 3,
        },
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
                //alert("Match!");
                item.amount++;
                addCount=true;
              }
          });
          if (addCount == false) {state.orders.push({name: param.name, price: param.price, amount: 1});}
    },
    login: function(state, param) {
      if (param.user == state.userlist[0].email && param.pass == state.userlist[0].password) {
          state.loggedin=true;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
