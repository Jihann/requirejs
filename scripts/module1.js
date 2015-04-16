/**
 * Created by JBH on 2015/4/16.
 * JS模块化编程
 */
var module1 = (function(){

    var _age = 20; //定义私有的年龄，不能被外部随意更改

    var getUsername = function(username) {
        return "Hello " + username;
    };

    var getAge = function() {
        return _age;
    };

    return {
        getUsername: getUsername,
        getAge: getAge
    };
})();