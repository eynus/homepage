; (
    function () {
        window.Fileloader = function (file, event) {

            this.reader = new FileReader();
            this.file = file;
            this.loaded = 0;
            this.total = this.file.size;
            this.event = event;
            this.step = 1024 * 1024;//1M
            if (this.isZero()) {
                this.bindEvent();
                this.readSegment(this.loaded, this.step);//读取第一片段
            }

        }
        Fileloader.prototype = {
            //空检验
            isZero: function () {
                if (!this.total) {
                    this.event.isZero();
                    return false;
                }
                return true;
            },
            // 绑定事件
            bindEvent: function () {
                var me = this;
                this.reader.onprogress = function (e) {
                    me.onProgress(e.loaded);
                }
                this.reader.onload = function (e) {
                    me.onLoad();
                }
            },
            // 分段读取
            readSegment: function (start, step) {
                if (this.file.slice) {//判断当前浏览器是否支持slice方法，有的浏览器不支持的话就直接全部文件不裁剪
                    this.segment = this.file.slice(start, start + step);
                } else {
                    this.segment = this.file;
                }
                this.reader.readAsText(this.segment);
            },
            // 过程中实时更新进度
            onProgress: function (num) {
                this.loaded += num;
                var per = this.loaded / this.total;

                if (per > 1) per = 1;
                this.event.updateProg(per);
            },
            // 当前片段读取完毕后的操作
            onLoad: function () {
                this.event.segmentDown(this.loaded, this.total);
                if (this.loaded < this.total) {
                    this.readSegment(this.loaded, this.step);
                } else {
                    this.event.onFinish();
                }
            },
        }
    }
)();