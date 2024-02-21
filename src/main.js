import Vue from "vue";
import App from "@/App";
import router from "@/routes/router";
import "@/assets/styles/base/base.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
