var resourceEl = document.getElementById("resource");

init();
function init(){

        var aEl = new Apartment(".apartment.a");
        var bEl = new Apartment(".apartment.b");
        var cEl = new Apartment(".apartment.c");
  

   
}
// 渲染剩余金额
function render(){
    var r = new Resource();
    resourceEl.innerText = r.money;
}

// 部门构造器
function Apartment(selector){
    var me = this;
    this.r = new Resource();
    this.el = document.querySelector(selector);
 
    this.addBtn =  this.el.querySelector(".add");
    this.subBtn =  this.el.querySelector(".sub");
    this.input =  me.el.querySelector('input');
    this.addBtn.addEventListener('click',function(){
        me.r.count(me.input.value);
        render();
        me.input.value='';
    })
    this.subBtn.addEventListener('click',function(){
        me.r.count(-me.input.value);
        render();
        me.input.value='';
    })
}

// 单例模式
function Resource(){
    // 如果之前已经很生成过实例，则直接返回该实例
    if(Resource.instance){
        return Resource.instance;
    }
    else{
        // 生成money
        this.money = 100;
        // 保存一份实例到构造器的属性中
        Resource.instance = this;
    }
    this.count= function(num){
        if(!num || window.isNaN(num)||num.length>0 && num.trim().length==0) {
            console.log(num);
            alert ('请输入有效的金额');
            return;
        }
        this.money+=parseFloat(num);
        console.log(this.money);
    }
}
