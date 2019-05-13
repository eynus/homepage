$(function () {
    'use strict';


    window.Input = function (selector) {
        var $ele;
        var $error_ele;
        var me=this;//??不是十分懂。再找找类似情况的案例:执行上下文发生变化，this不再是原来的this,这时把this复制一份就可以了
        var rule={required:true,};
        function init() {
            find_ele();//使用$找到该元素
            get_error_ele();//找到错误信息
            parse_rule();//解析规则成为键值对的格式-> rule
            
            me.load_validator();//注意，这里的this指向window，先看这个this所在函数是如何被调用的。（65行直接init执行，所以里面的this指向window)办法：var me=this,或者把方法封装成函数(?)，this.方法=函数
            listen();
        }
        this.get_val = function(){//特意写一个方法是为了可以暴露出去
            return $ele.val();
        }
        this.load_validator = function(){
            var val = this.get_val();//有this的是暴露出去的！！！
            this.validator = new Validator(val,rule);
        }
        // 监听用户输入，实时验证(否则每次刷新才验证)
        function listen(){
            $ele.on('keyup',function(){
                var r = me.validator.is_valid(me.get_val());
                // 如果为false,就显示红色提示
                console.log(r);
                if(!r){
                    $error_ele.show();
                }else{
                    $error_ele.hide();
                }
            })
        }
        function get_error_ele(){//error_ele是唯一且固定的，所以没有必要每次触发错误时重新选择
            $error_ele=$(get_error_selector());
        }
        function get_error_selector(){
            return '#'+$ele.attr("name")+"-error-msg";
        }
        function find_ele() {
            if (selector instanceof jQuery) {
                $ele = selector;
            }
            else {
                $ele = $(selector);
            }

        }
        function parse_rule() {
            var rule_str = $ele.data("rule");
            if (!rule_str) {
                return;
            }
            var rule_array = rule_str.split("|");//['min:18','max:20']
            for (var i = 0; i < rule_array.length; i++) {

                var item = rule_array[i].split(":")//['min',18]
                rule[item[0]] = JSON.parse(item[1]);//{'min':18}如果不加json,无论什么类型都是string类型，如果是string,要加双引号
            }
        }
        init();
    }
})