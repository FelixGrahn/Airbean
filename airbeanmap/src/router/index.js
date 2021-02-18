import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/Test.vue";
import Landing from "../views/Landing.vue";
import Meny from "../views/Meny.vue";
import Vartkaffe from "../views/Vartkaffe.vue";
import Status from "../views/Status.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Landing",
    name: "Landing",
    component: Landing
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

