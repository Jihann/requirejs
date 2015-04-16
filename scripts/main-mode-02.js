/**
 * Created by JBH on 2015/4/15.
 */

/*
 配置模块加载位置
通过paths的配置会使我们的模块名字更精炼，paths还有一个重要的功能，
就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库
 */
require.config({
    baseUrl : "../scripts/",
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "jquery-1.11"],
        //"mode01" : "module/mode-01"
        "mode02" : "module/mode-02"
    }
});

/*require(["jquery", "mode01"], function(jQuery){
    jQuery(function(){
        alert("Load finished");
    });
});*/

require(["jquery", "mode02"], function(jQuery){
    //todo
});