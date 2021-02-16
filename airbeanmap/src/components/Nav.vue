<template>

<nav class="navbar">
    <div class="button_hamburger" v-on:click="clickBurger">hamburger</div>
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

.navbar > div {
    width:90px;
    height:90px;
    border-radius:50%;
    display:block;
    background-color:#202020;
}

.navbar > div:nth-child(1) {
    background-color:#EEE;
}

</style>