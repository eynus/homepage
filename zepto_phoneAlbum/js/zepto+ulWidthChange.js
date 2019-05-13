
var index,
    len = $('li').length,
    $win = $(window),
    deviceW = $(window).width(),
    deviceH = $(window).height(),
    deviceRate = deviceH / deviceW,
    sImgSize = deviceW * (1 / 4),
    $li = $('li'),
    len = $li.length,
    numPerRow = 4;

//初始化wrapper的宽高=设备的宽高
$('.wrapper').css({
    width: deviceW,
    height: deviceH,
})

init();

function init() {
    //初始化小图的宽度
    $('ul').css({
        width: deviceW,
        left: 0,
    }).find('li').css({
        width: deviceW / numPerRow,
        height: deviceW / numPerRow,
    })
        .find('img').css({
            width: deviceW / numPerRow,
            height: 'auto',
            margin: '0 auto',
        })
}

//判断图片的宽高比；
function whRate($img) {
    var rate = $img.height() / $img.width();
    if (rate > deviceRate) {//瘦削-左右居中
        $img.css({
            height: deviceH,
            width: deviceH / rate,
        })
    } else {//矮胖-上下居中
        $img.css({
            height: deviceW * rate,
            width: deviceW,
            'margin-top': (deviceH - deviceW * rate) / 2,
        })
    }
}

//点击放大。ul宽度变index*sImgWidth, 高度变deviceH,position-left就是-index*sImgWidth
$('li').tap(function () {
    //放大
    index = $(this).index();
    $(this).addClass('active');

    //ul宽度变化
    $('ul').css({
        width: len * deviceW,
        height: deviceH,
        left: -index * deviceW,
    }).find('li').css({
        width: deviceW,
        height: deviceH,
    })
    $('li').each(function () {
        whRate($(this).find('img'));
    })

})
//向下滑-回归小图
$('.wrapper').on('swipeDown', 'li.active', function () {
    removeActive();
    init();
})//向右滑动
.on('swipeLeft', 'li.active', function () {
    move(1);

})//向左滑动
.on('swipeRight',function(){
    move(-1);
})
//清除上一个
function removeActive(){
    $('.active').removeClass('active');
}

function move(flag){
    index+=flag;
    if(index==len){
        index=len-1;
        return;
    }else if(index==-1){
        index=0;
        return;
    }
    
    removeActive();

    
    $li.eq(index).addClass('active');
    $('.wrapper').find('ul').animate({
        left:-index*deviceW,
    },300)
}