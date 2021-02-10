window.onload=function () {
    var app = document.getElementById('asklz');
    var typewriter = new Typewriter(asklz, {
        loop: true
    });
    //打字机类
    typewriter
        .typeString('霍格沃茨魔法学校')
        .pauseFor(2500)
        .deleteAll()
        
        .typeString('建立于公元990年')
        .pauseFor(3000)
        .typeString('：是欧洲的魔法学校之一')
        .pauseFor(1500)
        .deleteAll()
        
        .typeString('霍格沃茨学校共分为四个学院')
        .pauseFor(2000)
        .deleteAll()
        .typeString('分别是：格兰芬多（Gryffindor）')
        .pauseFor(900)
        .deleteAll()
        .typeString('赫奇帕奇（Hufflepuff）')
        .pauseFor(900)
        .deleteAll()
        .typeString('拉文克劳（Ravenclaw）')
        .pauseFor(900)
        .deleteAll()
        .typeString('和斯莱特林（Slytherin）')
        .deleteAll()
        .pauseFor(2000)
        
        .typeString('有魔法能力的孩子在出生时就被登记下来')
        .pauseFor(1000)
        .deleteAll()
        .typeString('他们会在11岁时收到猫头鹰寄来的录取通知书。')
        .start();
}