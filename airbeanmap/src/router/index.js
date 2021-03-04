import Vue from "vue";
import VueRouter from "vue-router";
import Profile from "../views/Profile.vue";
import Landing from "../views/Landing.vue";
import Meny from "../views/Meny.vue";
import Vartkaffe from "../views/Vartkaffe.vue";
import Status from "../views/Status.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/Meny",
    name: "Meny",
    component: Meny
  },
  {
    path: "/Vartkaffe",
    name: "Vartkaffe",
    component: Vartkaffe
  },
  {
    path: "/Status",
    name: "Status",
    component: Status
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

