(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Dw8M:function(t,i,e){"use strict";e.r(i),e.d(i,"CaculatorModule",(function(){return p}));var n=e("fXoL");let c=(()=>{class t{constructor(){this.subText="",this.mainText="",this.operator="",this.calculationString="",this.answered=!1,this.operatorSet=!1}allClear(t){this.mainText=""}pressKey(t){if("/"===t||"x"===t||"-"===t||"+"===t){const i=this.mainText[this.mainText.length-1];if("/"!==i&&"x"!==i&&"-"!==i&&"+"!==i||(this.operatorSet=!0),this.operatorSet||""===this.mainText)return;this.operand1=parseFloat(this.mainText),this.operator=t,this.operatorSet=!0}10!==this.mainText.length&&(this.mainText+=t)}getAnswer(){this.calculationString=this.mainText,this.operand2=parseFloat(this.mainText.split(this.operator)[1]),"/"===this.operator?(this.subText=this.mainText,this.mainText=(this.operand1/this.operand2).toString(),this.subText=this.calculationString,this.mainText.length>9&&(this.mainText=this.mainText.substr(0,9))):"x"===this.operator?(this.subText=this.mainText,this.mainText=(this.operand1*this.operand2).toString(),this.subText=this.calculationString,this.mainText.length>9&&(this.mainText="ERROR",this.subText="Range Exceeded")):"-"===this.operator?(this.subText=this.mainText,this.mainText=(this.operand1-this.operand2).toString(),this.subText=this.calculationString):"+"===this.operator?(this.subText=this.mainText,this.mainText=(this.operand1+this.operand2).toString(),this.subText=this.calculationString,this.mainText.length>9&&(this.mainText="ERROR",this.subText="Range Exceeded")):this.subText="ERROR: Invalid Operation",this.answered=!0}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Ib({type:t,selectors:[["app-welcome"]],decls:35,vars:1,consts:[[1,"maindisplay",2,"width","300px","height","300px"],[1,"keypad",2,"width","300px","height","300px"],[1,"keys","numkey","one-line",3,"click"],[1,"keys","opkey","one-line",3,"click"],[1,"keys","numkey","zerokey","one-line",3,"click"],[1,"keys","equalkey","one-line",3,"click"]],template:function(t,i){1&t&&(n.Ub(0,"div",0),n.Hc(1),n.Tb(),n.Ub(2,"div",1),n.Ub(3,"div",2),n.cc("click",(function(){return i.pressKey("7")})),n.Hc(4,"7"),n.Tb(),n.Ub(5,"div",2),n.cc("click",(function(){return i.pressKey("8")})),n.Hc(6,"8"),n.Tb(),n.Ub(7,"div",2),n.cc("click",(function(){return i.pressKey("9")})),n.Hc(8,"9"),n.Tb(),n.Ub(9,"div",3),n.cc("click",(function(){return i.pressKey("/")})),n.Hc(10,"/"),n.Tb(),n.Ub(11,"div",2),n.cc("click",(function(){return i.pressKey("4")})),n.Hc(12,"4"),n.Tb(),n.Ub(13,"div",2),n.cc("click",(function(){return i.pressKey("5")})),n.Hc(14,"5"),n.Tb(),n.Ub(15,"div",2),n.cc("click",(function(){return i.pressKey("6")})),n.Hc(16,"6"),n.Tb(),n.Ub(17,"div",3),n.cc("click",(function(){return i.pressKey("x")})),n.Hc(18,"x"),n.Tb(),n.Ub(19,"div",2),n.cc("click",(function(){return i.pressKey("1")})),n.Hc(20,"1"),n.Tb(),n.Ub(21,"div",2),n.cc("click",(function(){return i.pressKey("2")})),n.Hc(22,"2"),n.Tb(),n.Ub(23,"div",2),n.cc("click",(function(){return i.pressKey("3")})),n.Hc(24,"3"),n.Tb(),n.Ub(25,"div",3),n.cc("click",(function(){return i.pressKey("-")})),n.Hc(26,"-"),n.Tb(),n.Ub(27,"div",4),n.cc("click",(function(){return i.pressKey("0")})),n.Hc(28,"0"),n.Tb(),n.Ub(29,"div",2),n.cc("click",(function(){return i.pressKey(".")})),n.Hc(30,"."),n.Tb(),n.Ub(31,"div",5),n.cc("click",(function(){return i.getAnswer()})),n.Hc(32,"="),n.Tb(),n.Ub(33,"div",3),n.cc("click",(function(){return i.pressKey("+")})),n.Hc(34,"+"),n.Tb(),n.Tb()),2&t&&(n.Ab(1),n.Jc(" ",i.mainText," "))},styles:[".maindisplay[_ngcontent-%COMP%]{background:#d3d3d3;height:calc(100% / 10);padding:5%!important;font-size:4rem;text-align:right;font-family:Courier,monospace;overflow:auto}.subdisplay[_ngcontent-%COMP%]{border-bottom:1px solid #000;height:25%;font-size:2rem;overflow:auto}.keypad[_ngcontent-%COMP%]{height:calc(200% / 3)}.keys[_ngcontent-%COMP%]{margin:0;width:25%;height:20%;background:#f5f5f5;color:#000;padding:5%;font-size:2rem;text-align:center;cursor:pointer}.one-line[_ngcontent-%COMP%]{display:inline-block}"]}),t})();var s=e("tyNb"),r=e("Etcd"),o=e("ofXK"),a=e("ocnv"),h=e("0nng"),l=e("3Pt+");const u=[{path:"",component:c}];let p=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(i){return new(i||t)},imports:[[s.g.forChild(u),r.c,o.c,a.e,h.a,l.o],s.g]}),t})()}}]);