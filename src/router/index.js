import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ID from "../views/ID.vue"
import VueMeta from "vue-meta";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/id",
    name: "ID",
    component: ID,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
