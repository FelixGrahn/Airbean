<template>
  <div class="StatusMain">
      <div class="Ordernummertext">
          <p>Ordernummer #12DV23F</p> <!-- <- ska vara en prop -->
      </div>
    
    <img class="Logo2" src="../assets/kaffe-drone.png" @click="ChangePage()"/>

    <h1>Din beställning är på väg!</h1>

    <button class="StatusButton">Ok, cool!</button>



  </div>
</template>

<script>
export default {
    methods : {
        Randomfunction: function() {
            alert ()
        },
        ChangePage: function() {
            this.$root.$router.push("About")
        }
    } 
    
}

</script>

<style>
.StatusMain {
    background-color: orangered;
    height: 1080px;
    width: 100%;
    margin: 0%;
    padding: 0%;
    display: flex;
    justify-content: space-evenly;
    flex-flow: column;
}
.Logo2 {
justify-self: center;
align-self: center;
}
/* .Ordernummertext {

}
.StatusButton {

} */
</style>