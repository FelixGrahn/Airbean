<template>
  <div class="wrapper">
      <div class="innerWrapper">

          <h2>Välkommen till AirBean-familjen!</h2>
          <h3>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h3>
        <form @submit.prevent @submit="login(username, password)">

            <label for="myname"></label>
            <input v-model="username" type="text" placeholder="Username" id="myname">
            <label for="myemail"></label>
            <input v-model="password" type="password" placeholder="Password" id="myemail">

            <input type="checkbox">GDPR OK

            <input type="submit" value="Brew me a cup!">

        </form>

      </div>
      
  </div>
</template>

<script>
export default {

    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        login: function(un, pw) {
            //alert(un + pw);
            //alert(this.$root.$data.logins[0].username);
            if (un == this.$root.$data.logins[0].username && pw == this.$root.$data.logins[0].password) {
                //alert("login successful!");
                this.$root.$data.loggedin=true;
            }
        }
    }

}
</script>

<style scoped>

h2 {
    width:90%;
    display:block;
    text-align:center;
    margin-left:auto;
    margin-right:auto;
}

.wrapper {
    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    justify-content: center;
    width:700px;
    height:100%;
    z-index:1;
    position:absolute;
}

.innerWrapper {
    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    justify-content: center;
    width:90%;
    height:90%;
    background-color:blue;
    margin-left:auto;
    margin-right:auto;
    margin-top:130px;
    padding:0;
    color:rgba(0,0,0,0.8);
}

</style>