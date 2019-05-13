var rootElement = document.getElementById("roster").getElementsByTagName('tbody')[0]
,   addFormEl = document.getElementById("addForm");
addInit();
function addInit(){
    addFormEl.addEventListener('submit',function(e){
        e.preventDefault();

        var  genderEl = document.querySelector('[name=gender]:checked')
        ,   nameEl = document.querySelector('[name=name]')

        ,   scoreEl = document.querySelector('[name=score]')
        ,   subEl = document.querySelector('[name=subjects]');
        
        
        studentFactory(nameEl.value,genderEl.value,subEl.value,scoreEl.value);

        addFormEl.reset();
    })
}
// 工厂模式
function studentFactory(name,gender,subName,score){
    switch(subName){
        case 'liberal':subjects=['政治','历史','地理'];break;
        case 'science':subjects=['物理','化学','生物'];break;
        case 'PE':subjects=['长跑','跳远','跳高'];break;
        case 'art':subjects=['绘画','乐器','声乐'];break;
        default:throw '没有这个专业'

    }
    return new Student(name,gender,subjects,score);
}
// 构造器  ES5版本
function Student(name, gender, subjects,score) {
    this.name = name;
    // this.gender = gender;
    this.score = parseFloat(score);
    this.quality = 100;
    this.subjects=subjects;

    this.setGender(gender); //设置性别
    this.mount();           //渲染

}
Student.prototype.setGender = function(gender){
    if(gender=="female")
        this.gender="女";

    else if(gender=="male")
        this.gender="男";
    else throw '性别选的什么鬼？'
}
Student.prototype.sumScore = function () {
    return this.score + this.quality;
}
Student.prototype.mount = function () {//挂载
    var tr = document.createElement("tr");
    tr.innerHTML = '<td>' + this.name + '</td>' +
        '<td>' + this.gender + '</td>' +
        '<td>' + this.subjects + '</td>'+
        '<td>' + this.score + '</td>' +
        '<td>' + this.sumScore() + '</td>';

    rootElement.appendChild(tr);
}

var whh = studentFactory("王花花", 'female','PE', 69);
var lsd = studentFactory("李栓蛋", 'female','art', 83,);
var xxs = studentFactory("小小孙", 'male', 'science',88,);
var hh = studentFactory("火火", 'male', 'liberal',100);








