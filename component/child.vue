<template>
   <div class="app">
          <input @click="sendMsg" type="button" value="给父组件传递值">
       </div>

</template>

<script>
   //模板里面有个固定的写法,向外默认暴露一个配置对象
   export default {
      name:'child',
	  data(){
		  return {
			   msg: "我是子组件的msg"
		  }
	  },
	  methods:{
		   sendMsg(){
			   //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
			   this.$emit('func',this.msg)
		   }
	       }
   }

</script>

<style>
</style>
