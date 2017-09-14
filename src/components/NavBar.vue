<template>
 <div class="headerDiv window-drag">
	 <span class="window-drag">{{reportTitle}}</span>
	 <span class="headerNav window-drag">
		  <span class="fa fa-window-maximize" @click="maximizeWindow"></span>
		  <span class="fa fa-window-close-o"  @click="closeWindow"></span>
	  </span>
 </div>

</template>


<script>
export default {
    data: function(){
        return{
            reportWindow: window.windowmanager.Window.getCurrent(),
        }
    },
    methods: {
	    closeWindow: function(){
	        this.reportWindow.close();
	    },
	    maximizeWindow: function() {
	      if (this.reportWindow.isMaximized())
	          this.reportWindow.restore();
	      else
	          this.reportWindow.maximize();
	    }
  	}, 
  	computed: {    
	  	reportTitle: function(){
	     let title
	     title = this.reportWindow.getTitle()
	     if (title.indexOf('.')) {
	     	title = title.slice(0, title.indexOf('.'))
	     } else  {
	      	title = title.replace(/([a-z]+)(\d+)/g,'$1 $2') 
	      	//why are the numbers disappearing from this regex? HTK
	     }
	     return (title.slice(0, 1).toUpperCase() + title.slice(1))
	   }
	}
}

</script>


<style>

.headerDiv {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px dotted black;
  font-weight: bold;
}
.headerNav{
  width: 100%;
  left: 45%; 
  position:absolute;
}
</style>
