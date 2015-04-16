/**
 * Created by JBH on 2015/4/15.
 */

require.config({
    baseUrl: '../scripts/',
    paths: {
        jquery: 'jquery-1.11'
    }
});

require(['jquery'], function($) {
   // alert($().jquery);//显示jquery版本号
    alert("Hello Require.js");
});