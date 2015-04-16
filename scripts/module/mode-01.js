/**
 * Created by JBH on 2015/4/16.
 * 采用require.js模块化编程
 */

//传统方法，阻塞页面内容的加载
/*
(function(){
    function fun1(){
        alert("it works");
    }

    fun1();
})();*/

//采用require.js模块编程
define(function(){
   function show(){
       alert("Hello World");
       console.log("Hello World");
   }
    show();
});
