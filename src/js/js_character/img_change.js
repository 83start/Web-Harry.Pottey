    //数组存放图片编号
    var pictures=[1,2,3,4,5,6];
    var i=0;
    //定时器
    setTimeout(showPicture,6000);
    //定时器——函数自动切换图片
    function showPicture(){
        i++;
        if(i==pictures.length){
            i=0;
        }
        document.getElementById("pic").src="img/动画海报/"+pictures[i]+".JPG";
        setTimeout(showPicture,6000);
    }
    //定位到图片下标，切换图片
    function changeImg(num){
        document.getElementById("pic").src="img/动画海报/"+pictures[num-1]+".JPG";
    }
    //左键
    function left(){
        i--;
        if(i<0){
            i=pictures.length-1;
        }
        document.getElementById("pic").src="img/动画海报/"+pictures[i]+".JPG";
    }
    //右键
    function right(){
        i++;
        if(i>=pictures.length){
            i=0;
        }
        document.getElementById("pic").src="img/动画海报/"+pictures[i]+".JPG";

    }
