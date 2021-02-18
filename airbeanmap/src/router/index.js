import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/Test.vue";
import Landing from "../views/Landing.vue";
import Meny from "../views/Meny.vue";



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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

