
var ul = document.getElementsByClassName("product-nav")[0].getElementsByTagName("ul")[0];
var collapse_ele= document.getElementsByClassName("collapse");
var len = collapse_ele.length;

var wrapper = document.getElementsByClassName("box-collapse")[0];
var container = wrapper.getElementsByClassName("container")[0];


// console.log(collapse_ele)
// console.log(container)

ul.onmouseenter = function(){
    ul.className = 'item-active';
}
ul.onmouseleave = function(){
    ul.className = 'item-no-active';
}


for(var i=0;i< len;i++){
    collapse_ele[i].onmouseenter = function(){
        container.innerHTML = this.children[1].children[0].children[0].innerHTML;
        container.getElementsByClassName.display = "block";
    }
    // collapse_ele[i].onmouseleave = function(){
    //     container.getElementsByClassName.display = "none";
    // }
    
}
