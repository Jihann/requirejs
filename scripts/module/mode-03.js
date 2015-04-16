/**
 * Created by JBH on 2015/4/16.
 * 采用require.js模块化编程
 */

/*
  采用require.js模块编程
  要使用jquery对象，则该模块依赖于jquery
 */
define(["jquery"], function(){
  jQuery(function(){
      jQuery("table").hide();
      jQuery("input[name=show]").on("click", function(){
          jQuery("table").toggle();
      });
  });
});
