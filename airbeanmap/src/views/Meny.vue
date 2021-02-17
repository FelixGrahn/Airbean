<template>
  <div class="Breadview">
    <!-- <h1>This is an Bread page</h1> -->
    <div class="imageholder">
      <div class="text-holder">
        <p>This is an meny page</p>

      </div>
    </div>
    
  </div>
</template>

<script>
export default {
}
</script>

<style>
.Breadview {
  background-color: #f3e4e1;
  width: 110%;
  
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
    height: 1080px;
    width: 100%;
    margin: 0%;
    padding: 0%;
    z-index: -1;
    display: flex;
    justify-content: center;
}
.text-holder {
  display: flex;
  background-color: lightcyan;
  height: 55%;
  width: 90%;
  align-self: center;
  align-items: center;
  justify-content: center;
}
</style>