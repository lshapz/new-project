import Vue from 'vue'
import App from './App.vue'
import store from '../../../store.js'

Vue.config.debug = true; 
Vue.config.devtools = true


var app = new Vue({
  el: '#app',
  render: h => h(App),
  store: store,
  beforeCreate: function() {
	  this.$store.dispatch('fetchMocks', 'https://jsonplaceholder.typicode.com/todos')
 	  this.$store.dispatch('fetchJson', 'http://localhost:8080/src/assets/data/fullYear.json')
 	  this.$store.dispatch('fetchJson', 'http://localhost:8080/src/assets/data/tickets.json')
  },

})

window.App = app
