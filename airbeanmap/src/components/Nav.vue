<template>

<nav class="navbar">
    <div class="button_hamburger" v-on:click="clickBurger">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="button_order" v-on:click="clickOrder">right</div>
</nav>
  
</template>

<script>
export default {

    methods: {
        clickBurger() {
            alert('hamburger');
        },
        clickOrder() {
            alert('order');
        }
    }

}
</script>

<style>

.navbar {
    width:100%;
    min-height:100px;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-image:url('../assets/header-leaf.png');
    background-position: center top;
    background-size:auto 100%;
    padding:5%;
}

.button_hamburger > div {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  margin-left:auto;
  margin-right:auto;
}
.button_hamburger > div:nth-child(1) {
    margin-top:35%;
}

.button_hamburger, .button_order {
    width:90px;
    height:90px;
    border-radius:50%;
    display:block;
    background-color:#202020;
}

.button_hamburger {
    background-color:#EEE;
}

</style>