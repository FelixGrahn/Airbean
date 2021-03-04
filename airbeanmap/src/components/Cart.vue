<template>
  <div class="wrapper">
    <Nav :hideMenu="true" :bgimage="true" />
    <div class="innerWrapper">
      <h1>Din beställning</h1>

      <div class="itemwrapper">
        <div class="scrolldown">
          <div
            v-for="(kaffe, index) of shortcut.orders"
            :key="index"
            class="item"
          >
            <div>
              <h2>{{ kaffe.name }}</h2>
              <h3>{{ kaffe.price }} kr</h3>
            </div>
            <div>
              <div @click="add(index)"><p class="arrow"></p></div>
              <div class="antaltxt">{{ kaffe.amount }}</div>
              <div @click="remove(index)"><p class="arrow down"></p></div>
            </div>
          </div>
        </div>

        <div class="item totcost">
          <div>
            <h2>TOTAL:</h2>
            <h3>inkl moms + drönarleverans</h3>
          </div>
          <div>
            <h2>{{ totalcost() }} kr</h2>
          </div>
        </div>
      </div>

      <div class="button" @click="checkout()" v-if="totalcost() > 0">
        Take my money!
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      shortcut: this.$store.state,
    };
  },
  methods: {
    add: function(param) {
      this.$store.commit("add", param);
    },
    remove: function(param) {
      this.$store.commit("remove", param);
    },
    totalcost: function() {
      return this.$store.getters.totalcost;
    },
    checkout: function() {
      let param = "/Profile";
      if (this.$store.getters.checklogin) {
        param = "/Status";
        let d = new Date();
        let order_id = d.getTime();
        let today =
          d.getFullYear() +
          "/" +
          (d.getMonth() + 1 > 9 ? "" : "0") +
          (d.getMonth() + 1) +
          "/" +
          (d.getDate() > 9 ? "" : "0") +
          d.getDate();
        this.$store.commit("pushNewOrder", {
          ordernum: order_id,
          orderdate: today,
          ordersum: this.totalcost(),
          myitems: this.shortcut.orders,
        });
      }
      this.hideShowStatus();
      this.$root.$router.push(param);
    },
    hideShowStatus() {
      this.$store.commit("hideShowStatus");
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 900;
  font-size: 3em;
}

h2,
h3 {
  margin: 0;
  padding: 0;
  line-height: normal;
}

.wrapper {
  display: flex;
  flex-flow: column nowrap;
  width: 700px;
  height: 110%;
  z-index: 1;
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 80%,
    transparent
  );
  margin: 0;
  padding: 0;
}

.innerWrapper {
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  height: 80%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  color: rgba(0, 0, 0, 0.8);
}
.scrolldown {
  display: block;
  height: 500px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.itemwrapper {
  display: block;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  font-size: 1.5em;
}

.item {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  text-align: left;
  margin: 0;
  padding: 0;
  line-height: normal;
  margin-bottom: 25px;
}

.item > div:nth-child(1) {
  margin: 0;
  padding: 0;
  display: block;
  width: 90%;
}
.item > div:nth-child(2) {
  display: block;
  width: 10%;
  text-align: center;
}
.item > div:nth-child(3) {
  display: block;
  width: 100%;
}

.totcost {
  margin-top: 20px;
}
.totcost > div:nth-child(1) {
  width: 70%;
}
.totcost > div:nth-child(2) {
  text-align: right;
  width: 30%;
}

.arrow {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: black;
  display: block;
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;
}
.arrow:hover {
  background-color: red;
}
.down {
  clip-path: polygon(50% 100%, 0 0, 100% 0);
}

.antaltxt {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
