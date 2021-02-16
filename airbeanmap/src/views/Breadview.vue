<template>
  <div class="Breadview">
    <!-- <h1>This is an Bread page</h1> -->
    <div class="imageholder"></div>
    
  </div>
</template>

<script>
export default {
}
</script>

<style>
.Breadview {
    background-color: #0e927d;
    
    height: 1080px;
    width: 100%;
    margin: 0%;
    padding: 0%;
    display: flex;
    /* justify-content: space-evenly; */
    position: relative;
    z-index: -2;
    
}
.imageholder {
    background-image: url("../assets/leaf22.png"), url("../assets/leaf1.png");
    background-repeat: no-repeat;
    background-position: left top,right  top;
    background-size: auto 100%, auto 100%;
    /* transform: rotate(90deg); test option 1  */
    height: 1080px;
    width: 100%;
    margin: 0%;
    padding: 0%;
    position: relative;
    z-index: -1;
}
</style>