<template>
  <div class="profile">
    <Nav :hideCart= "true" />
    
    <img class="profile-img" src="../assets/Profile.png" />
    <div class="name"> {{this.$store.state.userlist[checkuser].username}} </div>
    <div> {{this.$store.state.userlist[checkuser].email}} </div>
    <h2 class="orderh">Orderhistorik</h2>

        <div class="orderinfo" v-for="(user, index) of this.$store.state.userlist[checkuser].history" :key="index">
          <div>
            <span>{{user.ordernum}}</span>
            <span>{{user.orderdate}}</span>
            <span>Total ordersumma</span>
            <span>{{user.ordersum}} kr</span>
          </div>
          
        </div>

        <div class="orderinfo">
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
  }
  
}
</script>

<style scoped>

.orderinfo {
  display:block;
  width:100%;
}

.orderinfo > div {
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
div > span {
  display:block;
  background-color:blue;
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




</style>
