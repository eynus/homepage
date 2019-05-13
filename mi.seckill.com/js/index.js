//获取商品导航列表
tabs=document.getElementById("tabs").getElementsByTagName("li");
// console.log(tabs);
for(var i=0;i<tabs.length;i++){
    //给每个导航nav绑定事件函数
    tabs[i].onclick=changeList;
}
//获取对应商品数据列表
list=document.getElementById("list").getElementsByTagName("ul");
// console.log(list);

function changeList(){
    for(var i=0;i<tabs.length;i++){//给每个tabs[i]都判断
        if(tabs[i]===this){
            tabs[i].className="active";
            list[i].className="clearfix active";
        }
        else{ 
            tabs[i].className="";
            list[i].className="clearfix";
        }
    }
    
}


// 监听浏览器滚动事件
seckill_nav = document.getElementById("seckill-nav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset||0;
    //谷歌或火狐      = document.documentElement.scrollTop;
    // 老版本IE使用： = document.body.scrollTop;
    // safari:       = window.pageYOffset;
    // 0:以防万一
    if(scrollTop>=260)
        seckill_nav.className=" seckill-nav seckill-nav-fixed"
    else{
        seckill_nav.className=" seckill-nav"
    }
    // console.log(scrollTop);
}
/*显示category-item的子目录 */

var navList=Array.prototype.slice.call(document.getElementsByClassName("nav-item"));
// var navList = document.getElementsByClassName("nav-list")[0].getElementsByTagName("li");

console.log(navList);
for(var i=0;i<navList.length;i++){
    //鼠标移动到li上，就赋予class属性：show
    // navList[i].addEventListener("mousemove")
    navList[i].onmousemove=function(){
        // console.log("XUANZHONG……");
        if(this.className!="nav-item nav-active"){
            console.log("XUANZHONG2");
            // navList[i].className="show"; 用navList[i]报错，因为函数内并没有定义
            this.classList.add("nav-active");
        }
    };
    //鼠标移走，就取消class属性：show
    navList[i].onmouseout = function(){
        if(this.className!="nav-item"){
            // navList[i].className="";
            // console.log("XUANZHONG3");
            this.classList.remove("nav-active");
        }
    }

}
// 点击二级标签时显示三级内容
var cateList = document.getElementsByClassName("category-item");

console.log(cateList);
for(var i=0;i<cateList.length;i++){
    cateList[i].onmousemove=function(){
        if(this.className!="category-item category-active"){
            console.log("3");
            this.classList.add("category-active");
        }
    };
    //鼠标移走，就取消class属性：show
    cateList[i].onmouseout = function(){
        if(this.className!="category-item"){
            this.classList.remove("category-active");
        }
    }

}