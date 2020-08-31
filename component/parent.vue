<template>
   <div class="app">
	   <child @fun ="getMsgFormSon" ></child>
   </div>
</template>

<script>
	import child from './child.vue';
	//模板里面有个固定的写法,向外默认暴露一个配置对象
	export default {
	   name:'parent',
		  data(){
			  return {
				 msgFormSon: "this is msg" 
			  }
		  },
		  components:{
			  child
		  },
		  methods:{
			  getMsgFormSon(data){
				  this.msgFormSon = data
				  console.log(this.msgFormSon)
			  }
		  }
	}
	
</script>

<style>
</style>
