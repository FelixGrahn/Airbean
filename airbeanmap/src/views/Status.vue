<template>
  <div class="StatusMain">
    <div class="Ordernummertext">
      <p>
        Ordernummer:
        <span>{{
          $store.state.userlist[$store.state.useractive].history[0].ordernum
        }}</span>
      </p>
    </div>

    <img class="Logo2" src="../assets/kaffe-drone.png" />

    <h1 class="rubrik">Din beställning är på väg!</h1>

    <div class="counter">{{ minute }} : {{ second }}</div>

    <button class="button" @click="ChangePage()">Ok, cool!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 60 * 13,
    };
  },

  methods: {
    ChangePage: function() {
      this.$root.$router.push("Profile");
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
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  computed: {
    minute() {
      let minute = Math.trunc((this.timerCount / 60) % 60);
      if (minute < 10) {
        minute = "0" + minute;
      }
      return minute;
    },
    second() {
      let second = this.timerCount % 60;
      if (second < 10) {
        second = "0" + second;
      }
      return second;
    },
  },
};
</script>

<style>
.StatusMain{
  background-color: orangered;
  color: white;
  height: 1080px;
  width: 100%;
  margin: 0%;
  padding: 0%;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;
  min-height: var(--minheight);
  font-family: var(--brodtext);
}
.Logo2 {
  justify-self: center;
  align-self: center;
  width: 50%;
  height: auto;
}

span {
  font-weight: bold;
}


.rubrik {
  font-family: var(--hfont);
  font-size: 3em;
  width: 50%;
  margin: 0 auto;
}
.counter {
  font-weight: 900;
  font-size: 2em;
}
</style>
