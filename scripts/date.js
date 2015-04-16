/**
 * Created by JBH on 2015/4/16.
 * Javascript模块的基本写法
 */

//采用js能力检测
if(typeof window.mf == "undefined"){
    window.mf = {};
}
if(typeof window.mf.date == "undefined"){
    window.mf.date = {};
}

/**
 * 使用js模块化编程，定义一个立即执行函数（匿名函数）
 * 不会污染全局变量，避免与其他模块的变量名冲突
 */
(function($){

    /**
     * 转换时间戳
     */
    $.unix2Date = function(unixTime, isFull){

        var time = new Date(unixTime);
        /* get year */
        var year = time.getFullYear();
        /* get month */
        var month = time.getMonth();
        /* get day */
        var day = time.getDate();
        /* return 结果 */
        var result = "";
        result += year + "-";
        result += ((month + 1) < 10) ? "0" + (month + 1) + "-" : (month + 1) + "-";
        result += (day < 10) ? "0" + day : day;

        if(isFull === true){

            result += " " + time.getHours() + ":";
            result += time.getMinutes() + ":";
            result += time.getSeconds();
        }

        return result;
    }

    /**
     * 取得当前日期
     * case：2014-09-20
     */
    $.currentDate = function(){

        var date = new Date();
        /* get year */
        var year = date.getFullYear();
        /* get month */
        var month = date.getMonth();
        /* get day */
        var day = date.getDate();
        /* return 结果 */
        var result = "";
        result += year + "-";
        result += ((month + 1) < 10) ? "0" + (month + 1) + "-" : (month + 1) + "-";
        result += (day < 10) ? "0" + day : day;

        return result;
    };


    /**
     * 取得当前日期往前/后推n天
     * case：<2014-09-22>2014-09-23<2014-09-26>
     */
    $.afterOrBeforeDate = function(flag, days){

        var date = new Date();
        if(flag === "after"){
            //n天以后计算
            date.setTime(date.getTime() + days*24*60*60*1000);
        }else{
            //Array.isArray()在IE78低版本中不支持,它是ES6的一个实现
            if(jQuery.isArray(days)){
                if("M" === days[0]){
                    if("first" === days[1]){
                        //计算n月的第一天
                        var lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
                        date = lastMonth;
                    }
                    if("end" === days[1]){
                        //计算n月的最后一天
                        //var first = new Date();
                        //first.setMonth(date.getMonth() - 1);
                        //first.setDate(1);
                        var lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
                        var end = new Date();
                        end.setMonth(lastMonth.getMonth() + 1);
                        end.setDate(0);
                        date = end;
                    }
                }
                if("Y" === days[0]){
                    if("first" === days[1]){
                        //计算去年第一个月第一天
                        date.setYear(date.getFullYear() - 1);
                        date.setMonth(0);
                        date.setDate(1);
                    }
                    if("end" === days[1]){
                        //计算去年最后一个月最后一天
                        date.setYear(date.getFullYear() - 1);
                        date.setMonth(11);
                        date.setDate(31);
                    }
                }
            }else{
                //n天以前计算
                date.setTime(date.getTime() - days*24*60*60*1000);
            }
        }
        /* get year */
        var year = date.getFullYear();
        /* get month */
        var month = date.getMonth() + 1;
        /* get day */
        var day = date.getDate();
        /* return 结果 */
        var result = "";
        result += year + "-";
        result += (month < 10) ? "0" + month + "-" : month + "-";
        result += (day < 10) ? "0" + day : day;

        return result;
    }
})(mf.date);