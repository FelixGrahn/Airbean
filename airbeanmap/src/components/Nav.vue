<template>

<nav class="navbar">
    <div class="button menu" v-on:click="clickBurger">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="button bag" v-on:click="clickOrder"></div>
</nav>
  
</template>

<script>
export default {

    methods: {
        clickBurger() {
            this.$root.$data.displayNavMenu = !this.$root.$data.displayNavMenu;
        },
        clickOrder() {
            alert('order');
        }
    }

}
</script>

<style scoped>

.navbar {
    width:100%;
    min-height:100px;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding:5%;
    box-sizing:border-box;
}

.menu > div {
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  margin-left:auto;
  margin-right:auto;
  box-sizing:border-box;
}
.button > div:nth-child(1) {
    margin-top:35%;
}

.button {
    width:90px;
    height:90px;
    border-radius:50%;
    display:block;
    background-color:#202020;
    cursor: pointer;
    box-sizing:border-box;
    opacity: 0.8;
}
.button:hover {
    border:4px solid red;
    opacity: 1;
}

.menu {
    background-color:#EEE;
}

.bag {
    background-image:url('../assets/bag.png');
    background-position: center center;
    background-size:16px 22px;
    background-repeat:no-repeat;
}

</style>