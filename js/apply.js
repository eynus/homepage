$(function(){
    'use strict';

    // 选中页面中所有的input[data-rule]

    var $inputs = $('[data-rule]')
    ,   $form_signup = $("#signup")
    ,   $form_login = $("#login")
    ,   inputs = [];
    $inputs.each(function(index,node){
        // 解析每个input中的验证规则 // 验证
        var tmp = new Input(node);
        inputs.push(tmp);
    })
    // 注册页面
    $form_signup.on('submit',function(e){
        e.preventDefault();
        // 把每个input都trigger一下，判断
        $inputs.trigger('keyup');//统一blur,触发显示错误信息

        for(var i =0;i<inputs.length;i++){
            var item = inputs[i];
            var r = item.validator.is_valid();
            if(!r){
                return;
            }
        }
        alert("注册成功")//到时候可以把这里换成具体的函数（即向后台发送数据）
        function signup(){
            // $.post('/signup/api',{注册的数据})
        }
        
    })
    // 登陆页面
    $form_login.on('submit',function(e){
        e.preventDefault();
        $inputs.trigger('keyup');

        for(var i =0;i<inputs.length;i++){
            var item = inputs[i];
            var r = item.validator.is_valid();
            if(!r){
                return;
            }
        }
        alert("登陆成功")//到时候可以把这里换成具体的函数（即向后台发送数据）
    })
})

/* 以下为测试
    // console.log("result:",new Validator('9',{ min:2,}).validator_min());
    // console.log("result:",new Validator('9',{ max:5,}).validator_max());
    // console.log("result:",new Validator('9wsasase',{ maxlength:15,}).validator_minlength());
    // console.log("result:",new Validator('9wsasase',{ maxlength:15,}).validator_maxlength());
    // console.log("result:",new Validator('  ',{ required:true,}).validator_required());
    // console.log("result:",new Validator(' asas').validator_numeric());
    // console.log("result:",new Validator('asas1214`',{pattern:'^[a-zA-Z0-9]*$'}).validator_pattern());


    // var result = new Validator('1234',{
    //     pattern:'^[a-zA-Z0-9]*$',
    //     maxlength:15,
    //     minlength:4,
    //     min:2,
    //     max:99,
    //     numeric:true,
    // // }).is_valid();
    // var input= new Input("#username").validator.is_valid();
    // console.log(input)
    */
