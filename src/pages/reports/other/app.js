import Vue from 'vue'
import App from './App.vue'
import store from '../../../store.js'

Vue.config.debug = true; 
Vue.config.devtools = true

var app = new Vue({
  el: '#other',
  render: h => h(App),
  store: store,

})




