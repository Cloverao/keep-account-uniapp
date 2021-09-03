import Vue from "vue";
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import App from "./App";

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
