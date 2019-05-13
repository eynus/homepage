$(function () {
    'use strict';

    window.Validator = function (val, rule) {//利用构造器为每个input创建一个自有的自定义对象
        // 总方法
        // rule:{min:2,max:10,minlength:20,...}
        this.is_valid = function (new_val) {//new_val:输入时变化的新val
            var item;
            if (new_val!==undefined) {
                val = new_val || val;
            }
            //如果不必填且没有填，直接判定为合法
            if (!rule.required && !val)
                return true;

            for (item in rule) {//item:max:3
                if (item == 'required') continue;//跳过，不重复判断required
    
                var r = this['validator_' + item]();
                if (!r) return false;

            }
            return true;

        }

        // 最小值
        this.validator_min = function () {
            pre_min_max();
            return val >= rule.min;
        }
        // 最大值
        this.validator_max = function () {
            pre_min_max();
            return val <= rule.max;
        }
        // 最小长度
        this.validator_minlength = function () {
            pre_tostring();
            return val.length >= rule.minlength;
        }
        // 最大长度
        this.validator_maxlength = function () {
            pre_tostring();
            return val.length <= rule.maxlength;
        }
        // 必填
        this.validator_required = function () {
            val = val.trim();//剪去首尾的空格
            if (!val && val !== 0)
                return false;
            return true;
        }
        // 验证是否数字
        this.validator_numeric = function () {
            return $.isNumeric(val);
        }
        // 正则
        this.validator_pattern = function () {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }
        // 对最大值最小值进行预处理
        function pre_min_max() {
            val = parseFloat(val);
        }
        // 转化为字符串
        function pre_tostring() {
            val = val.toString();
        }
    }
}
)