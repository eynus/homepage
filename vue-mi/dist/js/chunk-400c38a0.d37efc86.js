(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-400c38a0"],{"0a49":function(t,s,e){var o=e("9b43"),i=e("626a"),n=e("4bf8"),r=e("9def"),a=e("cd1c");t.exports=function(t,s){var e=1==t,c=2==t,l=3==t,d=4==t,p=6==t,u=5==t||p,f=s||a;return function(s,a,v){for(var h,I,g=n(s),_=i(g),C=o(a,v,3),b=r(_.length),m=0,x=e?f(s,b):c?f(s,0):void 0;b>m;m++)if((u||m in _)&&(h=_[m],I=C(h,m,g),t))if(e)x[m]=I;else if(I)switch(t){case 3:return!0;case 5:return h;case 6:return m;case 2:x.push(h)}else if(d)return!1;return p?-1:l||d?d:x}}},1169:function(t,s,e){var o=e("2d95");t.exports=Array.isArray||function(t){return"Array"==o(t)}},"18fd":function(t,s,e){},"20d6":function(t,s,e){"use strict";var o=e("5ca1"),i=e("0a49")(6),n="findIndex",r=!0;n in[]&&Array(1)[n](function(){r=!1}),o(o.P+o.F*r,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(n)},a760:function(t,s,e){"use strict";var o=e("18fd"),i=e.n(o);i.a},cd1c:function(t,s,e){var o=e("e853");t.exports=function(t,s){return new(o(t))(s)}},d2f1:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("app-head",{attrs:{allProShow:!1,cartNum:t.cartNum}}),e("div",{staticClass:"product"},[e("div",{staticClass:"container"},[e("div",{staticClass:"pro-view"},[e("div",{staticClass:"view-list"},[e("img",{ref:"pImg",attrs:{src:"",alt:""}})])]),e("div",{staticClass:"pro-info"},[e("h1",{staticClass:"pro-title"},[t._v(t._s(t.proInfo.name))]),e("p",{staticClass:"pro-desc"},[t._v(t._s(t.proInfo.desc))]),e("div",{staticClass:"pro-price"},[e("span",[e("label",{staticClass:"price"},[t._v(t._s(t.proInfo.price))]),t._v("元\n          ")])]),e("div",{staticClass:"pro-choose"},[e("div",{staticClass:"choose1"},[e("p",{staticClass:"choose-title"},[t._v("\n              选择\n              "),e("span",{staticClass:"prop-name"},[t._v(t._s(t.proInfo.prop1_name))])]),e("ul",{staticClass:"choose-list clearfix"},t._l(t.proInfo.options,function(s,o){return e("li",{key:"version_"+o,class:{active:t.selectedVersionIndex===o},on:{click:function(s){return t.changeVersion(o)}}},[e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"list-name"},[t._v(t._s(s.prop1_value))]),e("span",{staticClass:"list-price"},[e("label",{staticClass:"price"},[t._v(t._s(s.price))]),t._v("元\n                  ")])])])}),0)]),e("div",{staticClass:"choose2"},[e("p",{staticClass:"choose-title"},[t._v("\n              选择\n              "),e("span",{staticClass:"prop-name"},[t._v(t._s(t.proInfo.prop2_name))])]),t._l(t.proInfo.options,function(s,o){return e("ul",{key:"v_"+o,staticClass:"choose-list clearfix"},[o===t.selectedVersionIndex?t._l(s.list,function(s,o){return e("li",{key:"color_"+o,class:{active:t.selectedColorIndex===o},on:{click:function(s){return t.changeColor(o)}}},[e("a",{attrs:{href:"javascript:;"}},[e("span",{staticClass:"list-name"},[t._v(t._s(s.prop2_value))])])])}):t._e()],2)})],2)]),e("div",{staticClass:"pro-btn"},[e("a",{attrs:{href:"javascript:;",id:"addCart"},on:{click:t.addToCart}},[t._v("加入购物车")])]),e("el-dialog",{attrs:{visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(s){t.dialogVisible=s}}},[e("span",[t._v("成功加入购物车！")]),e("span",[t._v("点击“确定”按钮前往购物车查看")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(s){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.goToCart}},[t._v("确 定")])],1)]),e("el-dialog",{attrs:{visible:t.dialogLoginVisible,width:"30%"},on:{"update:visible":function(s){t.dialogLoginVisible=s}}},[e("span",[t._v("请先登录")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(s){t.dialogLoginVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"}},[e("router-link",{attrs:{to:"/login"}},[t._v("确 定")])],1)],1)])],1)])])],1)},i=[],n=(e("20d6"),e("cebc")),r=e("0418"),a=e("cb30"),c=e("2f62"),l={data:function(){return{proInfo:{},selectedVersionIndex:0,selectedColorIndex:0,selectedSkuId:"",selectedColor:"",dialogVisible:!1,cartNum:0,dialogLoginVisible:!1}},components:{appHead:r["a"]},computed:Object(n["a"])({},Object(c["c"])("user",["loggedIn"])),created:function(){var t=this,s=this.$route.params.id;a["a"].get("/productDetail?pid="+s,{_silent:!0}).then(function(s){console.log(s),t.proInfo=s,t.$refs.pImg.src=t.proInfo.options[t.selectedVersionIndex].list[t.selectedColorIndex].imgs[0],t.selectedColor=t.proInfo.options[0].list[0].prop2_value,t.selectedSkuId=t.proInfo.options[0].list[0].sku_id}),this.loggedIn&&a["a"].get("/user/cart").then(function(s){t.cartNum=s.length})},methods:Object(n["a"])({},Object(c["b"])("user",["checklogin"]),{addToCart:function(){var t=this;this.loggedIn?a["a"].post("/user/addCart",{sku_id:this.selectedSkuId}).then(function(){t.dialogVisible=!0,t.cartNum++},function(){t.$router.push("/login")}):this.dialogLoginVisible=!0},goToCart:function(){this.dialogVisible=!1,this.$router.push("/cart")},changeVersion:function(t){var s=this;this.selectedVersionIndex=t,this.selectedColorIndex=this.proInfo.options[t].list.findIndex(function(t){return t.prop2_value==s.selectedColor}),this.selectedColorIndex<0&&(this.selectedColorIndex=0),this.$refs.pImg.src=this.proInfo.options[t].list[this.selectedColorIndex].imgs[0],this.selectedSkuId=this.proInfo.options[t].list[this.selectedColorIndex].sku_id},changeColor:function(t){this.selectedColorIndex=t,this.$refs.pImg.src=this.proInfo.options[this.selectedVersionIndex].list[t].imgs[0],this.selectedColor=this.proInfo.options[this.selectedVersionIndex].list[t].prop2_value,this.selectedSkuId=this.proInfo.options[this.selectedVersionIndex].list[t].sku_id}})},d=l,p=(e("a760"),e("2877")),u=Object(p["a"])(d,o,i,!1,null,"443d2d13",null);s["default"]=u.exports},e853:function(t,s,e){var o=e("d3f4"),i=e("1169"),n=e("2b4c")("species");t.exports=function(t){var s;return i(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)||(s=void 0),o(s)&&(s=s[n],null===s&&(s=void 0))),void 0===s?Array:s}}}]);
//# sourceMappingURL=chunk-400c38a0.d37efc86.js.map