var box = document.getElementsByClassName("uploadBox")[0],
    progress = document.getElementsByClassName("progress")[0],
    desc = document.getElementsByClassName("desc")[0],
    progressActive = document.getElementsByClassName("active")[0];



var file,
    W = progress.offsetWidth,


    custom_event = {                            //用户自定义上传过程的操作
        updateProg: function (per) {
            desc.innerText = Math.round(per * 100) + '%';
            progressActive.style.width = W * per + 'px';
        },
        segmentDown: function (loaded, total) {
            console.log('上传' + loaded + '部分');
            console.log("loaded:" + loaded + " ,total:" + total)
            console.log("=====================================")
        },
        onFinish: function () {
            console.log('上传成功');
            box.innerText = file.name+"上传成功";
        },
        isZero: function(){
            box.innerText = file.name+"没有内容，请确保文件有数据";
        }
    };

init();                                         //初始化

function init() {
    box.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    box.addEventListener('drop', function (e) {
        e.preventDefault();                         //取消默认打开
        file = e.dataTransfer.files[0];             //要上传的文件
        new Fileloader( file, custom_event); //new一个封装的组件
    });
}

