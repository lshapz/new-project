<template>

<div class="window-drag">

    {{mySelectedReport}}

</div>

</div>



</template>
<script>

export default {
  computed: {
    mySelectedReport: function(event){
      console.log(this.$store.getters.selectedReport)
      console.log(this.$store.state)
      return this.$store.getters.selectedReport
    },

  }
  
}

</script>


<style>

</style>
