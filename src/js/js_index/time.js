$(document).ready(function () {

    function fun() {
        //获取和2011-7-7 0：0：0的时间差
        var date = new Date();
        var time = date.getTime();

        var endDate = new Date(2011,6,7,0,0,0);
        var endTime = endDate.getTime();

        //计算时间
        var sec=parseInt((time-endTime)/1000%60)<=10?"0"+parseInt((time-endTime)/1000%60):parseInt((time-endTime)/1000%60);
        var min =parseInt((time-endTime)/1000/60%60)<=10?"0"+parseInt((time-endTime)/1000/60%60):parseInt((time-endTime)/1000/60%60);
        var hour = parseInt((time-endTime)/1000/60/60%24)<=10?"0"+parseInt((time-endTime)/1000/60/60%24):parseInt((time-endTime)/1000/60/60%24);
        var day = parseInt((time-endTime)/1000/60/60/24);

        //插入文本
        $("#sec:first").text(sec);
        $("#min:first").text(min+":");
        $("#hour:first").text(hour+":");
        $("#day:first").text(day+"天");

    }
    //开启定时器
    fun();
    setInterval(fun,1000);
})