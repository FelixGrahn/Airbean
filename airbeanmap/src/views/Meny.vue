<template>
  <div class="Breadview">
    <!-- <h1>This is an Bread page</h1> -->
    <div class="imageholder">
      <div class="text-holder">
        <h1 class="MenyHeader">Meny</h1>
        <div class="orderinfo">
          <img class="addtocartclass" v-on:click="placeorder(1, 'Bryggkaffe', 49)" src="../assets/addtocart.png" />
          <div class="textspecific">
            <h1>Bryggkaffe.................. 49 kr</h1>
            <p>Bryggd på månadens bönor</p>
          </div>
        </div>
        <div class="orderinfo">
          <img class="addtocartclass" v-on:click="placeorder(2, 'Ceffé Doppio', 49)" src="../assets/addtocart.png" />
          <div class="textspecific">
            <h1>Ceffé Doppio............... 49 kr</h1>
            <p>Bryggd på månadens bönor</p>
          </div>
        </div>
        <div class="orderinfo">
          <img class="addtocartclass" v-on:click="placeorder(3, 'Cappuccino', 49)" src="../assets/addtocart.png" />
          <div class="textspecific">
            <h1>Cappuccino.................. 49 kr</h1>
            <p>Bryggd på månadens bönor</p>
          </div>
        </div>
        <div class="orderinfo">
          <img class="addtocartclass" v-on:click="placeorder(4, 'Latte Macchiato', 49)" src="../assets/addtocart.png" />
          <div class="textspecific">
            <h1>Latte Macchiato............ 49 kr</h1>
            <p>Bryggd på månadens bönor</p>
          </div>
        </div>
        <div class="orderinfo">
          <img class="addtocartclass" v-on:click="placeorder(5, 'Kaffe Latte', 49)" src="../assets/addtocart.png" />
          <div class="textspecific">
            <h1>Kaffe Latte.................. 49 kr</h1>
            <p>Bryggd på månadens bönor</p>
          </div>
        </div>
        <div class="orderinfo">
          <img class="addtocartclass" v-on:click="placeorder(6, 'Cortado', 39)" src="../assets/addtocart.png" />
          <div class="textspecific">
            <h1>Cortado.................. 39 kr</h1>
            <p>Bryggd på månadens bönor</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
        placeorder(ordernumber, Name, Cost) {
          alert(ordernumber + Name + Cost);
        }
    }
}
</script>

<style>
.Breadview {
  background-color: #f3e4e1;
  width: 100%;
  
    /* background-color: #0e927d;
    height: 1080px;
    width: 100%;
    margin: 0%;
    padding: 0%;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    z-index: -2; */
    
}
.imageholder {
  background-image: url("../assets/header-leaf.png"), url("../assets/footer-leaf.png");
  background-repeat: no-repeat;
    background-position: center top, center bottom;
    background-size: 100%, 100%;
    height: 100%;
    width: 100%;
    margin: 0%;
    padding: 0%;
    z-index: -1;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 28% 0 23% 0
}
.text-holder {
  display: flex;
  /* background-color: lightcyan; */
  height: 55%;
  width: 90%;
  align-self: center;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.orderinfo {
display: flex;
align-self: flex-start;
  padding: 0 0 0 9%;
}
.textspecific {
  text-align-last: left;
}
.addtocartclass {
    width: 10%;
    display: flex;
    height: 10%;
    padding: 6% 4% 0 0;
}
.MenyHeader {
  font-weight: 700;
  font-size: 464%;
}
</style>