<template>
  <div class="profile">
    <img src="../assets/header-leaf.png" />
    <img class="profile-img" src="../assets/Profile.png" />
    <span class="name"> Sixten Kaffelövèr </span>
    <span> sixten.kaffelover@zocom.se </span>
    <h2>Orderhistorik</h2>
    <div class="grid-container">
      <div class="item1 left">
        <p>#AB1123282323Z</p>
        <p>Total ordersumma</p>
      </div>
      <div class="item2 right">
        <p>20/03/06</p>
        <p>443 kr</p>
      </div>
      <div class="item3 left">
        <p>#AB1444482323X</p>
        <p>Total ordersumma</p>
      </div>
      <div class="item4 right">
        <p>20/03/03</p>
        <p>333 kr</p>
      </div>
      <div class="item5 left">
        <p>#AB1128382323X</p>
        <p>total ordersumma</p>
      </div>
      <div class="item6 right ">
        <p>20/02/21</p>
        <p>893 kr</p>
      </div>
      <div class="item7"><hr /></div>
      <div class="item8 left">
        <p>Totalt spenderat</p>
      </div>
      <div class="item9 right">
        <p>1669 kr</p>
      </div>
    </div>
    <ProfileOverlay v-if="!this.$root.$data.loggedin" />
  </div>
</template>

<script>
import ProfileOverlay from '@/components/ProfileOverlay.vue'
export default {
  components: { ProfileOverlay },
  
}
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #2f2926;
}
.profile-img {
  display: flex;
  align-self: center;
  width: 100px;
}
span {
  color: white;
}
.name {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 10px;
}
h2 {
  color: white;
  font-size: 25px;
  text-align: start;
  margin-left: 3em;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "item1  item2"
    "item3  item4"
    "item5  item6"
    "item7  item7"
    "item8  item9";
}

.item1 {
  grid-area: item1;
}
.item2 {
  grid-area: item2;
}
.item3 {
  grid-area: item3;
}
.item4 {
  grid-area: item4;
}
.item5 {
  grid-area: item5;
}
.item6 {
  grid-area: item6;
}
.item7 {
  grid-area: item7;
}
.item8 {
  grid-area: item8;
}
.item9 {
  grid-area: item9;
}
.right {
  justify-self: end;
  margin-right: 50px;
}

p {
  color: white;
}
.left > p {
  text-align: start;
  margin-left: 4.5em;
}
.right > p {
  text-align: end;
  margin-right: 4.5em;
}
hr {
  width: 80%;
  height: 1px;
  background-color: pink;
  margin-bottom: 7px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 9px;
  border-width: 1px;
  border-color: white;
}
</style>
