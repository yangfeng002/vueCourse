/**
 *
 * 功能描述:  vue插件
 * @author    fy
 * @version  [版本号, 2020/5/18 8:39]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
(function(){
    /*需要对外暴露的插件对象*/
    const MyPlugin = {};

    /*插件对象必须有一个install方法
    * Vue是vue实例
    * options是配置参数
    * */
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或property
        Vue.myGlobalMethod = function () {
            // 逻辑...
            console.log("Vue函数对象的全局方法myGlobalMethod执行");
        }

        // 2. 添加全局资源(自定义指令)
        Vue.directive('my-directive', function(el,binding){
			//做大写处理
			el.textContent = binding.value.toUpperCase();
		})

        // 4. 添加实例方法 实例方法一般都是通过prototype原型来添加，方法名上面添加$符号
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log("调用该实例对象的方法$method");
        }
    }
   
   /* 向外暴露对象*/
   window.MyPlugin = MyPlugin;

})()
