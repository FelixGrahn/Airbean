import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

/* new Vue({
  render: h => h(App),
}).$mount('#app') */


new Vue({
  router,
  data: function(){
    return {
      displayNavMenu: false,
      displayNavStatus: false,
    }
  },
  methods: {
    hideShowMenu() {
      this.displayNavMenu = !this.displayNavMenu;
      if (this.displayNavMenu) {this.displayNavStatus=false;}
    },
    hideShowStatus() {
      this.displayNavStatus = !this.displayNavStatus;
      if (this.displayNavStatus) {this.displayNavMenu=false;}
    },
    showStatus() {
      this.displayNavStatus = true;
    }
  },
  render: h => h(App)
}).$mount("#app");
