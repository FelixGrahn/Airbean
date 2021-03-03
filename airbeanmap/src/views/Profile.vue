<template>
  <div class="profile">
    <Nav :hideCart= "true" />
    
    <img class="profile-img" src="../assets/Profile.png" />
    <div class="name"> {{this.$store.state.userlist[checkuser].username}} </div>
    <div> {{this.$store.state.userlist[checkuser].email}} </div>
    <h2 class="orderh">Orderhistorik</h2>

        <div class="orderinfo"
        v-for="(user, index) of this.$store.state.userlist[checkuser].history"
        :key="index"
        @click="merInfo(index)"
        >
          <div v-if="user.ordersum > 0">
            <span>{{user.ordernum}}</span>
            <span>{{user.orderdate}}</span>
            <span>Total ordersumma</span>
            <span>{{user.ordersum}} kr</span>
            <span  class="info" v-if="index == showruta">
              <ul>
              <li class="liststyle"><span class="infoleft">Item Name:</span><span class="inforight">Amount</span></li>
              <li v-for="(items, index) of $store.state.userlist[checkuser].history[index].myitems" :key="index">
                  <span class="infoleft">{{items.name}}</span><span class="inforight">{{items.amount}}</span>
              </li>
              </ul>
            </span>
          </div>
          
        </div>

        <div class="orderinfo2" v-if="totalcost() > 0">
          <div>
            <span>Totalt spenderat</span>
            <span>{{totalcost()}} kr</span>
          </div>
        </div>


<!-- <img class="addtocartclass" v-on:click="placeorder($root.$data.sortiment[index])" src="../assets/addtocart.png" />
          <div class="textspecific">
            <h1>{{$root.$data.sortiment[index].name}}</h1><div class="dots"></div><h1>{{$root.$data.sortiment[index].price}} kr</h1>
            <p>{{$root.$data.sortiment[index].desc}}</p>
          </div> -->
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
  data: function() {
    return {
      userid: this.$store.state.useractive,
      showruta: -1,
    }
  },
  computed: {
      checkuser: function() {
        return this.$store.state.useractive;
      }
  },
  methods: {
    totalcost: function() {
        return this.$store.getters.totalcost_profile;
    },
    merInfo(param) {
         if (param == this.showruta) {this.showruta=-1;}
         else {this.showruta = param;}
    },
  }
  
}
</script>

<style scoped>

.orderinfo, .orderinfo2 {
  display:block;
  width:100%;
}

.orderinfo > div, .orderinfo2 > div {
  display:flex;
  flex-flow:row wrap;
  border-bottom:4px solid black;
  margin-top:10px;
  margin-bottom:20px;
  margin-left:auto;
  margin-right:auto;
  width:90%;
  box-sizing:border-box;
}
.orderinfo {
  cursor:pointer;
}
.orderinfo > div:hover {
  background-color:rgba(255,255,255,0.5);
}
div > span {
  display:block;
  width:50%;
  text-align:left;
  box-sizing:border-box;
}

div > span:nth-child(even) {
  text-align:right;
}


.profile {
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #2f2926;
  color:white;
  min-height: 1000px;
}
.profile-img {
  display: flex;
  align-self: center;
  width: 100px;
}
.name {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 10px;
}
.orderh {
  color: white;
  font-size: 25px;
  text-align: left;
  width: 90%;
  display:block;
  margin-left:auto;
  margin-right:auto;
}

.info {
  background-color: white;
  width: 100%;
  border: 2px solid black;
  min-height: 90px;
  padding: 10px;
  box-sizing:border-box;
  text-align:left;
  color:black;
}

.infoleft, .inforight {
  text-align:left;
  width:50%;
  padding:0;
  margin:0;
  display:inline-block;
}
.inforight {
  text-align:right;
}
li {
  list-style:none;
}
li:first-child {
  font-weight:900;
}
ul {
  padding-left:0;
}
li {
  padding:10px 0;
  border-bottom:1px solid #000;
}


</style>
