/**
 * Created by JBH on 2015/4/16.
 * 采用require.js模块化编程
 */

/*
  采用require.js模块编程
  要使用jquery对象，则该模块依赖于jquery
 */
define(["jquery"], function(){
   function show(){
       alert("Hello World");
       console.log("Hello World");
       jQuery("#info").html("Hello World");
   }
    show();
});
