; (function () {
    'use strict';

    window.Slider = function (bannerSelector,dotLiSelector,leftBtnSelector,rightBtnSelector) {
        
        this.$banner = $(bannerSelector);
        this.$dotLi = $(dotLiSelector);
        this.$left = $(leftBtnSelector);
        this.$right = $(rightBtnSelector);

        this.len = this.$banner.find('li').length;//6
        this.index = 0;
        this.imgWidth = 520;
        this.timer = null;

        this.bindEvent();//绑定事件

        this.autoMove();//滑动一次

    }

    //点击切换上一个，下一个
    Slider.prototype.bindEvent = function () {
        var me = this;
        //点击左按钮
        this.$left.on('click', function () {
            me.move(-1);
        })
        //点击右按钮
        this.$right.on('click', function () {
            me.move(1);
        })
        //点击小圆点，切换
        this.$dotLi.on('click', function () {

            me.index = $(this).index();//index方法
            me.move(0);
        })
        this.$banner.parent().on('mouseover',function(){
            me.$left.parent().css('display','block');
        })
        this.$banner.parent().on('mouseout',function(){
            me.$left.parent().css('display','none');
        })
    }
    //点击切换上一个，下一个-move
    Slider.prototype.move = function (flag) {
        //1.处理一些擦屁股操作
        clearTimeout(this.timer);//清除之前的计时器
        this.$banner.stop(false,true);//stop-true能够实现鼠标停下立即停止
        //2.先对index处理
        if (flag == 1) {

            this.index++;
            if (this.index == this.len) {
                this.index = 1;
                this.$banner.css('left', '0');
            }
        }
        if (flag == -1) {

            this.index--;

            if (this.index == -1) {
                this.index = this.len - 1;//4
                this.$banner.css('left', (this.imgWidth * -this.index) + 'px');//520*5

                this.index--;
            }
        }
        //3.小圆点修改颜色状态
        this.activateChange();
        var me = this;

        //4.滑动
        this.$banner.animate({
            left: this.index * -this.imgWidth,
        }, 200, function () {
          
            me.timer = setTimeout(function () {
                me.move(1);
            }, 3000)
        })
    }

    //小圆点颜色激活
    Slider.prototype.activateChange = function () {
  
        $('.active').removeClass('active');

        this.$dotLi.eq(this.index > 4 ? 0 : this.index).find('a').addClass('active');
    }
    // 自动切换  使用setTimeout来实现停留3s
    Slider.prototype.autoMove = function () {
        var me = this;
     
        this.timer = setTimeout(function () {
            me.move(1);
        }, 3000)
    }

})();
