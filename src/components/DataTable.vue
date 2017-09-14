<template>
<div>
          <table> 
            <tr>
              <th v-for="item in report.data.columns">{{item}}</th>
            </tr>
            <tbody>
            <tr v-for="item in report.data.rows">
              <td v-for="subItem in item">{{subItem}}</td>
            </tr>
            </tbody>
          </table>

</div>

</template>

<script>
export default {
    data: function(){
        return{
          
        }
    },
    computed: {
      report: function(){
        return this.$store.getters.selectedReport
      }
    }
}

</script>


<style>
table {
  position: relative;
  border: 1px dashed black;
}

th, td {
    border: 1px dashed black;

}
</style>
