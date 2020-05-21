/**
 * 编译模板的类
 */
//声明
 const compileUtil={
     text(node,expr,vm){
         //node是节点，expr是表示指定的值（例如：msg），vm是vue对象(可以获取到vue实例中data的值)
         const value = getVal(expr,vm);
         this.updater.textUpdater(node,value);

     },
     html(node,expr,vm){
        //node是节点，expr是表示指定的值，vm是vue对象


     },
     model(node,expr,vm){
        //node是节点，expr是表示指定的值，vm是vue对象


     },
     on(node,expr,vm,eventName){
        //node是节点，expr是表示指定的值，vm是vue对象,eventName是对象



    },
    updater:{
         textUpdater(node,value){
             //更新文本值
             node.textContent = value;
         }
    }

}
class Compile{
  //构造函数
   constructor(el,vm){
      this.el = this.isElementNode(el)?el:document.querySelector(el);
      this.vm = vm;
      //1.获取文档碎片对象，放入内存中会减少页面的回流和重绘
      const fragement = this.node2Fragement(this.el);
      console.log(fragement);

     //2.编译模板
     this.compile(fragement);

     //3.追加子元素到根元素
     this.el.append(fragement);


   }

   compile(fragement){
       //获取子节点
       const childNodes = fragement.childNodes;
       [...childNodes].forEach(child=>{
           if(this.isElementNode(child)){
               //是元素节点，编译元素节点
               this.compileElement(child);
           }else{
               //是文本节点，编译文本节点
               this.compileText(child);
           }
          //递归，如果child参数还有子节点
           if(child.childNodes && child.childNodes.length){
               this.compile(child);
           }

       })


   }
    compileElement(node){
       //编译元素
       const attributes = node.attributes;
       if(attributes){
           [...attributes].forEach(attr=>{
               const{name,value} = attr;
               console.log(name);
               if(this.isDirective(name)){
                   //是指令，处理指令
                   const[,directive] = name.split("-");//存在text html model on:click
                   const[dirName,eventName] = directive.split(":");//on text html model
                   compileUtils[dirName](node,value,this.vm,eventName);
               }
           })
       }

    }
    compileText(node){
       //编译文本

    }
    isDirective(attrName){
       //判断是否v-开头
       return attrName.startsWith('v-');
    }

    isElementNode(node){
       //校验el是否为node元素节点，1为元素节点，2为文本节点，3为属性节点
       return node.nodeType===1;
    }
    node2Fragement(el){
       //创建文档碎片对象
      const f = document.createDocumentFragment();
      let firstChild;
     /* 注意：firstChild返回全部元素，包括空格以及元素等,
       firstElementChild不会返回文本和注释，
       如果父元素下的子元素不存在其他element元素，而是文本元素或注释，它则会报错*/
      while (firstChild=el.firstChild){
          f.append(firstChild);
      }
       return f;
    }

}



/**
 * MVue类
 */
class MVue{
    constructor(options){
       this.$el = options.el;
       this.$data = options.data;
       this.option = options;
       if(this.$el){
           //1.实现一个数据观察者



           //2.实现一个指令解析器
           new Compile(this.$el,this);

       }


    }
}
