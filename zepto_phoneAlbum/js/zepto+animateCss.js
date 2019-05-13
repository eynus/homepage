

var len = 15,
    $bigImg = $('#large_img'),
    $sImg = $('.wrapper'),
    deviceH = $(window).height(),
    deviceW = $(window).width(),
    deviceRate = deviceH / deviceW,
    numPerRow = 4,
    index;
//加载小图
preLoad();

//点击查看大图
$('li').tap(function () {
    //隐藏小图
    $sImg.hide();
    //确定大图的src
    index = $(this).data('id')

    loadImg(index, function () {
        $bigImg.show()
        //设置大图的进入动画，宽高
        bigImgAnimation('animated faster zoomIn', function () {
            $bigImg.show();
        });
    });

})
//大图的操作：下滑/左滑/右滑动 
$('.bigWrapper')
    .swipeDown(function () {
        $sImg.show();//显示小图
        //向下划走
        bigImgAnimation('animated fast fadeOutDown', function () {
            $bigImg.hide();
        });

    })
    .swipeLeft(function () {
        if (++index > len) {//1 2 3
            index = len;
            return;
        }
        loadImg(index, function () {
            bigImgAnimation('animated faster slideInRight');
        })
    })
    .swipeRight(function () {
        if (--index < 1) {
            index = 1;
            return;
        }
        loadImg(index, function () {
            bigImgAnimation('animated faster slideInLeft');
        })

    })
//初始化-加载小图片
function preLoad() {
    var tpl = '';
    for (var i = 1; i <= len; i++) {
        tpl += '<li data-id="' + i + '" style="width:' + deviceW / numPerRow + 'px;height:' + deviceW / numPerRow + 'px"><img src="source/' + i + '.jpg" alt="photo"></li>';
    }

    $sImg.html(tpl)

}
//加载大图
function loadImg(index, callback) {
    var newImg = new Image();
    newImg.src = 'source/' + (index) + '.jpg';
    newImg.onload = function () {
        var w = this.width,
            h = this.height;
        $bigImg.attr('src', newImg.src);

        judgeRate($bigImg, w, h);//判断横图or竖图-决定margin
    }
    callback && callback();
}
//判断横图还是竖图
function judgeRate($img, w, h) {

    var rate = h / w;

    if (rate > deviceRate) {//瘦削-左右居中

        $img.css({
            height: deviceH,
            width: deviceH / rate,
            'margin-top': 0,
            'margin-left': (deviceW - deviceH / rate) / 2,
        })
    } else {//矮胖-上下居中
        $img.css({
            height: deviceW * rate,
            width: deviceW,
            'margin-left': 0,
            'margin-top': (deviceH - deviceW * rate) / 2,
        })
    }
    return $img;
}
//大图出现消失左右滑动时做的动画处理
function bigImgAnimation(addClassName, fn) {
    $bigImg.addClass(addClassName)//添加类名
        .on('webkitAnimationEnd', function () {//动画完成后移除类名
            $(this).removeClass(addClassName);
            fn && fn();
        })
}