$(document).ready(function () {
    //设置鼠标移入事件
    $("#box_img #tips").mouseover(function () {
        $("#box_img #tips").css({"width":"125px",
            "height":"63px",
            "box-shadow":"0 0 6px rgba(0,0,0,0.5)"
        })
    });
    //设置鼠标移出事件
    $("#box_img #tips").mouseout(function () {
        $("#box_img #tips").css({"width":"120px",
            "height":"60px",
        })
    });
});