/**
 * Created by JBH on 2015/4/16.
 * 采用require.js模块化编程
 */

//采用require.js模块编程
define(["jquery"], function(){
   function show(){
       alert("Hello World");
       console.log("Hello World");
       jQuery("#info").html("Hello World");
   }
    show();
});
