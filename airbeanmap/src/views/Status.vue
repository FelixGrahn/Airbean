<template>
  <div class="StatusMain">
    <div class="Ordernummertext">
      <p>Ordernummer #12DV23F</p>
      <!-- <- ska vara en prop -->
    </div>

    <img class="Logo2" src="../assets/kaffe-drone.png"/>

    <h1>Din beställning är på väg!</h1>

    <div>{{ minute }} : {{ second }}</div>

    <button class="button"  @click="ChangePage()">Ok, cool!</button>
  </div>
</template>

<script>
export default {

    data() {
            return {
                timerCount: 60*13,
            }
    },

    methods: {
        Randomfunction: function() {
            alert ()
        },
        ChangePage: function() {
            this.$root.$router.push("About")
        },
       
    },
        watch: {

            timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        },
        computed: {
            minute(){
                return Math.trunc((this.timerCount / 60) %60);
            },
            second(){
                return (this.timerCount) % 60;
                //return Math.trunc((this.timerCount / 60) %60);
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