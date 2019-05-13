1.body去除默认的margin和padding
2.margin：0 auto 设置居中
3.给设置浮动的元素的父元素添加clearfix类专门清楚浮动以及margin重叠
4.a标签有浏览器默认属性，所以a从父元素继承的颜色属性需要重新设置
5：font-size:0 清楚不必要的空格，必要元素在子元素重新声明font-size

6.块元素内的文字居中：
     块元素设置高度：height
     块元素设置line-height：和height一样高
我的理解是：
没有设置height，纯粹由文字撑起来的时候设置line-height:1即可
否则设置line-height=width

7.块元素内的文字左右居中：
    块元素设置text-align:center
8.垂直上下位置微调：vertical-align: -4px;/*调整购物车向下移动4像素*/
9.a链接整个区域可点：设置为block，设置height，width
10.网络好能加载图片：不显示文字 text-indent:-999em; 
11.两个相邻的border叠加太厚，可以通过absolute定位移动1px使得两线重叠
12.outline:0 input点击时无突出边框效果
13.cursor: pointer;/*小手属性*/

14.font-style: normal;/*em取消斜体*/
15.按钮不一定是button元素，可以通过a标签，block化
16.设置行高有效的：<a><p> 
   无效：<del>
"对于块级元素，CSS属性line-height指定了元素内部line-boxes的最小高度。
对于非替代行内元素，line-height用于计算line box的高度。"
17.margin-right:-13px;/*因为有三个13px,超出父容器所以需要扩大容器大小*/
18.a可以设置浮动——> css中任何元素都是设置浮动，设置浮动后相当于：display:inline-block;

19.
一级(header..)div高度和背景 
二级(container)div宽度和居中
20.设置宽高->先确保是块元素，block化
21.text-indent:-999em ——>就是把这个标签隐藏了 眼睛看不见，但是搜索引擎或者盲人用的软件能知道,或者网络不好加载不出图片
22.这两个不一样
display:inline-block;font-size：18px;line-height:1;vertical-align:middle;
display:inline-block;font-size：18px;line-height:(同height大小)
