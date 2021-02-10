

    function $(id) {
        return document.getElementById(id);
    }
    //记住密码的判断
    $("remember").onclick = function () {
        if($("remember").checked){
            var rem = confirm("确定要记住密码吗？？？");
            if (rem) {
                $("remember").disabled(false);
            } else {
                $("remember").disabled(true);
            }
        }
        else{
            var rem2 = confirm("确定不保留密码吗？？？");
            if (rem2) {
                $("remember").disabled(true);
            } else {
                $("remember").disabled(false);
            }
        }
    }

    // 设置文本框和密码框的的鼠标移入移出事件
    $("text").onmouseover=function(){
        $("text").placeholder='';
    }
    $("password").onmouseover=function(){
        $("password").placeholder='';
    }

    $("text").onmouseleave=function(){
        $("text").placeholder='请输入邮箱账号';
    }
    $("password").onmouseleave=function(){
        $("password").placeholder='请输入密码';
    }

    //邮箱验证
    $("post").onsubmit=function(){
        return checkEmail($("password"));
    }
    function checkEmail(obj){
        if(!obj.value.match(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/)){
            alert("Email格式有误");
            return false;
        }
        else{
            result_year.innerHTML=" ";
            return true;
        }
    }
    inputs.email.onfouse=function(){
        result_year.innerHTML='';
        this.select();
    }


