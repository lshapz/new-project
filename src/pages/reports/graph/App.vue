<template>
<div id="graph">
{{msg}}
<report-itself></report-itself>
</div>
</template>

<script>

export default {
  name: 'graph',
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

