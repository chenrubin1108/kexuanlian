import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-proposal-optional-chaining"],
});
new Vue({
  render: h => h(App),
}).$mount('#app')
