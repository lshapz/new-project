<template>
<div>
<h2>this is a chart for Robert</h2>
<button @click="aFunction">Button</button>
	{{theSelectedReport}}
</div>
</template>

<script>
export default {
    data: function(){
        return{
            report: this.theSelectedReport
        }
    },
    props: ['theSelectedReport'],
    methods: {
    	aFunction: function(event){
            let foo = this.report[0]["asrc"] || this.report[0]["ticket"]
    		alert(foo)
    	}
    }}

</script>


<style>
</style>
