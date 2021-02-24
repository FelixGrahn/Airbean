<template>
  <div class="wrapper">
      <div class="innerWrapper">

    <div v-for="(kaffe, index) of this.$root.$data.orders" :key="index">
            <h1>{{kaffe.name}} {{kaffe.price}} {{kaffe.amount}}</h1>
    </div>

    <div>
    TOTAL: {{totalcost()}}
    </div>

    <div class="button" @click="checkout()" v-if="summa > 0">
      Take my money!
    </div>

</div>
</div>
</template>

<script>
export default {

  data() {
    return {
      summa: 0,
    }
  },
  computed: {
      
  },
  methods: {
    checkout: function() {
      alert();
    },
    totalcost: function() {
        let sum=0;
        for (let i=0;i<this.$root.$data.orders.length;i++) {
                sum+=this.$root.$data.orders[i].price*this.$root.$data.orders[i].amount;
        }
        this.summa=sum;
        return sum;
    },
  }

}
</script>

<style scoped>

.button {
  margin-top:100px;
  background-color:#DDD;
  border:2px solid black;
  width:248px;
  height:55px;
  margin-left:auto;
  margin-right:auto;
  cursor:pointer;
  border-radius:50px;
}
.button:hover {
  background-color:darkgrey;
}

.wrapper {
    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    justify-content: center;
    width:700px;
    height:100%;
    z-index:1;
    position:absolute;
    background-color:rgba(0,0,0,0.8);
}

.innerWrapper {
    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    justify-content: center;
    width:90%;
    height:90%;
    background-color:white;
    margin-left:auto;
    margin-right:auto;
    margin-top:130px;
    padding:0;
    color:rgba(0,0,0,0.8);
}

</style>