import Vue from "vue"
// @ts-ignore
import App from "./App.vue"
import VCalendar from "v-calendar"

Vue.config.productionTip = false;

// V-calendar plugin settings
Vue.use(VCalendar, {});

new Vue({
  render: h => h(App),
}).$mount("#app");
