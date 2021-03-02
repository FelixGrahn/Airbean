<template>
  <div class="wrapper">
      <div class="innerWrapper">
            <img src="@/assets/Group6.png" class="img" alt="image">
          <h2>Välkommen till AirBean-familjen!</h2>
          <h3>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h3>
            <form @submit.prevent @submit="login(email, password)">

            <label for="myname">Email</label>
            <input v-model="email" type="text" placeholder="Email" id="myname">
            <label for="myemail">Password</label>
            <input v-model="password" type="password" placeholder="Password" id="myemail">

            <input type="checkbox" id="gdpr" class="checkbox"><label for="gdpr" class="gdpr">GDPR OK</label>

            <input type="submit" value="Brew me a cup!" class="button">

        </form>

      </div>
      
  </div>
</template>

<script>
export default {

    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login: function(un, pw) {
            this.$store.commit('login', {user:un, pass:pw});
        }
        
        /*
        login: function(un, pw) {
            //alert(un + pw);
            //alert(this.$root.$data.logins[0].username);
            if (un == this.$store.state.logins[0].username && pw == this.$store.state.logins[0].password) {
                //alert("login successful!");
                this.$store.state.loggedin=true;
            }
        }
        */
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
    /*
    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    justify-content: center;
    width:700px;
    height:100%;
    z-index:1;
    position:absolute;
    */
    display:flex;
    flex-flow:column nowrap;
    align-content: center;
    justify-content: center;
    width:700px;
    height:110%;
    background-color:rgba(0,0,0,0.9);
    margin-left:auto;
    margin-right:auto;
    z-index:10;
    position:absolute;


}

.innerWrapper {
    display:flex;
    flex-flow:column wrap;
    align-items:center;
    align-content: center;
    width:90%;
    height:90%;
    background-color:#F3E4E1;
    margin: 130px auto 20px auto;
    padding:100px 0 0 0;
    color:rgba(0,0,0,0.7);
}

form {
    width:90%;
}

input {
    width: 100%;
    height: 72px;
    padding: 0.3em;
    font-size: 1.5em;
    border: 1px solid black;
    margin:0 0 40px 0;
    box-sizing:border-box;
    border-radius:6px;
    background-color:transparent;
}
label {
    width:100%;
    display:block;
    text-align:left;
    font-size:1em;
    background-color:red;
    font-size:1.1em;
}
.gdpr {
    width:92%;
    display:inline-block;
}
input[type="checkbox"] {
    display:inline-block;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    /*-webkit-appearance: none;*/
    outline: none;
    cursor: pointer;
    margin:0 10px 0 0;
}
input[type="checkbox"]:checked {
    background-color:#0E927D;
}

input[type="submit"] {
    border:0;
    background-color:#2F2926;
    border-radius:50px;
    outline:0;
    margin-top:70px;
    width:70%;
}

.img {
    width:30px;
    height:30px;
}

</style>