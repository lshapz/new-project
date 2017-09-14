import Vue from 'vue'
import App from './App.vue'
import store from '../../../store.js'

Vue.config.debug = true; 
Vue.config.devtools = true

var app = new Vue({
  el: '#graph',
  render: h => h(App),
  store: store,
  // components: {
  //   'select-report': Select
  // }

})




// window.App = app
