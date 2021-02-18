<template>
  <div class="profile">
    <img src="../assets/header-leaf.png" />
    <img class="profile-img" src="../assets/Profile.png" />
    <span class="name"> Sixten Kaffelövèr </span>
    <span> sixten.kaffelover@zocom.se </span>
    <h2>Orderhistorik</h2>
    <div class="grid-container">
      <div class="item1">
        <p>#AB1123282323Z</p>
        <p>Total ordersumma</p>
      </div>
      <div class="item2">
        <p>20/03/06</p>
        <p>443 kr</p>
      </div>
      <div class="item3">
        <p>#AB1444482323X</p>
        <p>Total ordersumma</p>
      </div>
      <div class="item4">
        <p>20/03/03</p>
        <p>333 kr</p>
      </div>
      <div class="item5">
        <p>#AB1128382323X</p>
        <p>total ordersumma</p>
      </div>
      <div class="item6">
        <p>20/02/21</p>
        <p>893 kr</p>
      </div>
      <div class="item7"><hr /></div>
      <div class="item8">
        <p>Totalt spenderat</p>
      </div>
      <div class="item9">
        <p>1669 kr</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};

</script>

<style>
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
  grid-template-areas:
    "item1 item4"
    "item2 item5"
    "item3 item6"
    "item7 ."
    "item8 item9";
}
p {
  color: white;
  text-align: start;
  margin-left: 4.5em;
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
