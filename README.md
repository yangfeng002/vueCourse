# vueCourse vue官方文档示例教程（哔哩哔哩-尚硅谷教程跟练）

## 20200109
   演示目录 lesson01
   1.声明式的渲染
    声明式的渲染有2中方式,文本插值或者指令绑定 
    文本插值｛｛messge｝｝ 或者 v-bind:属性值  
   2.条件和循环
     v-if指令根据布尔值来判断，v-show和v-if的区别需要关注，是否创建dom，（v-if如果看不到，会销毁dom，v-show配置的display：none）
     v-for指令处理循环
     
   3. v-model 处理双向数据绑定
      v-on 添加事件监听器  
     
## 20200115
   vue指令
   1.vue不能挂在到body或者html标签上面，建议挂在到id选择器上面
   2.v-text：文本值，替换标签下所有的内容
   3.v-html：如果是html解构会被解析
   4.v-bind:绑定属性
   
## 20200116
  axios的使用
  1.调用方法：首先导入或者vue加载安装
  2.get和post方法
   axios.get('请求地址+参数').then(function(response){  
       console.log(response);
   },function(err){
      console.log(err);
   })
   
   axios.post("请求地址",{key:value}).then(function(response){
     console.log(response);
   },function(err){
     console.log(err); 
   });  
        
  3.MVVM实现原理
    angular是通过脏值检查实现的，而vue通过数据劫持+发布订阅模式
    不支持IE8以下的低版本，object.defineProperty()来实现
    
    
  
  
  20200515
  lessson13
  vue插件编写
  
  20200522
  基于vue-cli脚本 
  
   
          
     
     
