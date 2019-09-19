import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import only on demand
import { Search, Field, Button, PaletteButton, Checklist } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Search.name, Search);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(PaletteButton.name, PaletteButton);
Vue.component(Checklist.name, Checklist);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
