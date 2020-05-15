import Vue from "vue";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";
import VuePageTransition from "vue-page-transition";
import VueMeta from "vue-meta";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VuePageTransition);
Vue.use(VueMeta);

Vue.use(VueAnalytics, {
  id: "UA-131120430-3",
  router,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
