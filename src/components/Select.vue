<template>

  <div>
  <form @submit="submitSelection">
    <select id="reporter" v-model="selected" @change="consoling">
     	<option value="" selected disabled>Choose A Report</option>
    	<option v-for="report in $store.state.reports" :value="report.value">
      {{report.value}}
    	</option>
    </select>
    <br><button type="submit">View Report</button>
  </form>
  <br />
  </div>

</template>

<script>

import {store} from '../store.js'
  export default {
    data: function(){
      return {
        selected: ''
      }
    },

    methods: {
      consoling: function(event){
        console.log(this.selected)
      },
      submitSelection: function(event){
        event.preventDefault()
    	  this.$store.commit('updateSelection', this.selected)
        let reportWindow
        let selection = this.$store.getters.selectedReport
        let type = selection.type

        switch(type){
          case('table'): 
            reportWindow = new windowmanager.Window({url: "/reports/table.html", width: 500, height: 600, frame: false})
            break;
          case('graph'):
            reportWindow = new windowmanager.Window({url: "/reports/graph.html", width: 500, height: 600, frame: false})
            break;
          default: 
            reportWindow = new windowmanager.Window({url: "/reports/other.html", width: 500, height: 600, frame: false})

        }
        reportWindow.setTitle(selection.value)  
      }
     }
    }


</script>


<style>
</style>
