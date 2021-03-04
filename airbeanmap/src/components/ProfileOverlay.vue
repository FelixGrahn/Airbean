<template>
  <div class="wrapper">
    <Nav :hideCart="true" :bgimage="true" />
    <div class="innerWrapper">
      <img src="@/assets/Group6.png" class="img" alt="image" />
      <h2>Välkommen till AirBean-familjen!</h2>
      <h3>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </h3>

      <div class="errorfield" v-if="errorlog.length > 0">
        <ul>
          <li v-for="(error, index) in errorlog" :key="index">{{ error }}</li>
        </ul>
      </div>

      <form @submit.prevent @submit="login(email, password)">
        <label for="myname">Email</label>
        <input v-model="email" type="text" placeholder="Email" id="myname" />
        <label for="myemail">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          id="myemail"
          maxlength="20"
        />

        <input
          type="checkbox"
          id="gdpr"
          class="checkbox"
          v-model="checked"
        /><label for="gdpr" class="gdpr">GDPR OK</label>

        <input type="submit" value="Brew me a cup!" class="button" />
      </form>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      errorlog: [],
      checked: false,
    };
  },
  components: {
    Nav,
  },
  methods: {
    login: function(un, pw) {
      this.errorlog = [];
      let emailok = this.validEmail(un);

      if (this.email.length <= 0 || this.password <= 0) {
        this.errorlog.push("Fields can't be blank.");
      }
      if (!this.checked) {
        this.errorlog.push("You must accept GDPR.");
      }
      if (!emailok) {
        this.errorlog.push("Email must be valid.");
      }

      if (this.errorlog.length <= 0) {
        this.$store.commit("login", { user: un, pass: pw });
        if (!this.$store.getters.checklogin) {
          this.errorlog.push("Wrong email and/or password.");
        } else {
          this.$store.commit('hideShowStatus')
          this.$root.$router.push("Meny");
        }
      }
    },
    validEmail: function(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.errorfield {
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.2);
  color: red;
  width: 70%;
  margin-bottom: 40px;
  text-align: left;
  font-weight: 900;
}

h2 {
  width: 80%;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-family: var(--hfont);
  font-size: 3em;
  margin-bottom: 0;
}
h3 {
  width: 80%;
  font-size: 1.5em;
}

.wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  width: 700px;
  height: 110%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 80%,
    transparent
  );
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
  position: absolute;
  min-height: var(--minheight);
}

.innerWrapper {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-content: center;
  width: 90%;
  height: 90%;
  background-color: #f3e4e1;
  margin: 0px auto 20px auto;
  padding: 50px 0 0 0;
  color: rgba(0, 0, 0, 0.7);
  font-family: var(--brodtext);
}

form {
  width: 90%;
}

input {
  width: 100%;
  height: 72px;
  padding: 0.3em;
  font-size: 1.5em;
  border: 1px solid black;
  margin: 0 0 40px 0;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: transparent;
}
label {
  width: 100%;
  display: block;
  text-align: left;
  font-size: 1em;
  font-size: 1.1em;
}
.gdpr {
  width: 92%;
  display: inline-block;
}
input[type="checkbox"] {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: white;
  vertical-align: middle;
  border: 1px solid #ddd;
  cursor: pointer;
  margin: 0 10px 0 0;
}
input[type="checkbox"]:checked {
  background-color: #0e927d;
}

input[type="submit"] {
  border: 0;
  background-color: #2f2926;
  border-radius: 50px;
  outline: 0;
  margin-top: 70px;
  width: 70%;
  font-size: 3em;
  line-height: 50%;
}

.img {
  width: 60px;
  height: auto;
}
</style>
