import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/Test.vue";
import Landing from "../views/Landing.vue";
import Breadview from "../views/Breadview.vue";




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
    path: "/Breadview",
    name: "Breadview",
    component: Breadview
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
