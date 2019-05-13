// $('.show-item')
// console.log($('.show-item')[0]);


var sLen = $('.list-group-item').length;
for(var i=0;i<sLen;i++){
    $('.list-group-item')[i].onclick = function(e){
        var index = $(this).index();
        $(this).siblings().removeClass('active');//去除它的兄弟元素的active
        $(this).addClass("active");

        $($('.show-item')[index]).siblings().removeClass('show');//去除对应显示内容去的兄弟元素的show
        $($('.show-item')[index]).addClass('show');
    };
}
// 登录/注册的弹出框
$(function () {
    $('[data-toggle="popover"]').popover()
  })
$(function(){
    
})

// ajax请求
var search_result = $("#search-result")
,   search_form = $("#search-form")
,   input = $("#username")
,   username;
search_form.on('submit',function(e){
    e.preventDefault();//禁止刷新
    search_result.show();//出现搜索结果框
    username = input.val();
    $.ajax('https://api.github.com/users/'+username)
    .done(function(data){
        console.log(data)
        var innerhtml = '<h4>搜索结果</h4>' +
        '<div>昵称：'+(data.name|| '无' )+'</div>' +
        '<div>账号：'+(data.login||'无')+"</div>"+
        '<div>ID号：'+(data.id||'无' )+'</div>' +
        '<div>头像：<a target="_blank" href='+data.avatar_url +'>点击查看</a></div>'+
        '<div>粉丝：'+(data.followers||'无')+'</div>'+
        '<div>简介：'+(data.bio||'无' )+'</div>' +
        '<div>地址：<a target="_blank" href='+data.html_url +'>点击前往</a></div>'
        search_result.html(innerhtml);
    })
})

