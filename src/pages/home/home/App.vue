<template>
<div id="app">

      <select-report></select-report> 
<hr>
</div>
</template>

<script>

  export default {
  name: 'app',
  data () {
    return {
      msg: 'in a bottle'
    }
  },

  computed: {
    store: function(){
      return this.$store.getters.allReports
    }
  }
  


}


</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
 