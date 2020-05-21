## 1.MVVM原理
Vue是采用数据劫持配合发布-订阅者模式的方式通过Object.defineProperty()方法来劫持各个属性的getter、setter方法，
在数据发生变动时，发布消息给依赖收集器，然后通知观察者做出对应的回调函数更新视图。
MVVM作为绑定的入口，整合了Observer/Compile/Watcher三者，通过Observer监听model的数据变化，
通过compile来解析编译模板指令，最终通过Watcher搭起Observer和Compile之间的通信桥梁，
到达数据变化=>更新视图，视图交互变化=>数据model的变更的双向数据绑定的效果。

