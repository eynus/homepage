
// 查找所有item
List = document.getElementById("tablelist").getElementsByTagName("td") ;
// console.log(List)
 var items =[ 0,1,2,3,4,7,12,15,20,19,18,17,16,13,8,5];   

 for(var i=0;i<items.length;i++){
     console.log(List[items[i]])  ;
 
 }

var current= 0;//0-15 做下标
var runNum;//第N次，直到N = total
function Run(){ 
    runNum=0;
    play_element.onclick = null;
    total = 16*3 +parseInt(Math.random()*16) ;
    run = setInterval(playGame,200);

    
    // current= 0;
}

function playGame(){   
    // for(var i=0;i<items.length;i++){
    //     List[items[current]].className ="";
    //     console.log("我的清理")
    // }
    // console.log(List[items[current]]);
    List[items[current]].className ="";
    //+1
    current= current+1 >= items.length? 0:current+1;
    
    List[items[current]].className ="selected";
    // console.log(List[items[current]]);
    runNum++;

    if(runNum>=total){
        clearInterval(run);           

        List[6].innerHTML =  List[items[current]].innerHTML;
        var sil = setTimeout(function(){
            history.go(0);
        },5000);
        clearTimeout(sil);
        play_element.onclick = Run;
        return;
    }  
    //加速
    if(runNum ==6){
        clearInterval(run);           
        run = setInterval(playGame,20)
    }
    //减速
    if(runNum +6 == total){
        clearInterval(run);           
        run = setInterval(playGame,200)
    }
    
}

play_element = document.getElementById("play_btn");
play_element.onclick = Run;
