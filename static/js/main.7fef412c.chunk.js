(this["webpackJsonpreact.p4"]=this["webpackJsonpreact.p4"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/img.dbecb379.png"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),m=(a(10),a(11),a(4)),o=a.n(m);var i=function(){return l.a.createElement("img",{className:"logo",alt:"Logo",src:o.a,align:"left"})};var s=function(e){return l.a.createElement("span",null,l.a.createElement("a",{className:"menu",href:e.item.url},e.item.name),"\xa0")};var u=function(e){return l.a.createElement("p",{align:"right"},e.MenuItems.map((function(e){return l.a.createElement(s,{key:e,item:e})})))};var E=function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("p",{className:"header-title"},"Course: ",l.a.createElement("strong",null,e.titile)," | ",l.a.createElement("em",null,"version: ",e.version," "))),l.a.createElement("div",{className:"col-8"},l.a.createElement(u,{MenuItems:e.MenuItems})))},p=a(1);var d=function(e){var t=Object(n.useState)(0),a=Object(p.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(0),o=Object(p.a)(m,2),s=o[0],u=o[1],E=Object(n.useState)(0),d=Object(p.a)(E,2),v=d[0],g=d[1],h=Object(n.useState)([]),f=Object(p.a)(h,2),y=f[0],N=f[1],b=function(e){c(+r+ +e)};function k(e,t){var a=[];if(e<=t&&e>0&&t>0&&t<=100&&e<=100){a=[];for(var n=e;n<=t;n++)a.push(n)}return a}var w=function(e){"lower"===e.target.name&&(u(e.target.value),N(k(e.target.value,v))),"upper"===e.target.name&&(g(e.target.value),N(k(s,e.target.value)))};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement(i,null)),l.a.createElement("div",{className:"col-8"},l.a.createElement("h1",{className:"h1"},"Programming Academy in Silicon Valley"),l.a.createElement("h2",null,"What is Lorem Ipsum?"),l.a.createElement("p",{className:"text"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ")),l.a.createElement("div",{className:"col-4",align:"right"},l.a.createElement("p",null,"Enter your name:"),l.a.createElement("p",null,l.a.createElement("input",{type:"text",id:"name",color:"red",placeholder:"write here..."}),l.a.createElement("button",{onClick:function(){e.onButtonClick(document.getElementById("name").value)}},"OK"),l.a.createElement("button",{onClick:function(){document.getElementById("name").value=""}},"CANCEL"))),l.a.createElement("div",{align:"center",className:"col-8"},l.a.createElement("p",null,e.MenuButtons.map((function(t){return l.a.createElement("button",{key:t,onClick:function(){e.onButtonClick(t)}},t)}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",{align:"center"},"Calculator")),l.a.createElement("div",{className:"col-12"},l.a.createElement("p",{align:"center"},"(Values have to be between 1 and 100)")),l.a.createElement("div",{className:"col-6"},l.a.createElement("p",{align:"right"},l.a.createElement("input",{type:"text",name:"lower",placeholder:"From",onChange:w}))),l.a.createElement("div",{className:"col-6"},l.a.createElement("p",{align:"left"},l.a.createElement("input",{type:"text",name:"upper",placeholder:"To",onChange:w}))),l.a.createElement("div",{align:"right",className:"col-4"},l.a.createElement("p",null,y.reverse().map((function(e){return l.a.createElement("button",{key:-e,onClick:function(){b(-e)}},"-",e)})))),l.a.createElement("div",{align:"center",className:"col-4"},l.a.createElement("h1",{id:"calcResult"},r),l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){document.getElementById("calcResult").textContent="0"}},"RESET"))),l.a.createElement("div",{align:"left",className:"col-4"},l.a.createElement("p",null,y.reverse().map((function(e){return l.a.createElement("button",{key:e,onClick:function(){b(e)}},"+",e)})))))))};var v=function(e){return l.a.createElement("span",null,l.a.createElement("a",{className:"menu",href:e.item.url},e.item.name),"\xa0")};var g=function(e){return l.a.createElement("p",{align:"left"},e.MenuItems.map((function(e){return l.a.createElement(v,{key:e,item:e})})))};var h=function(){return l.a.createElement("p",{className:"contacts"},"Contacts: ",l.a.createElement("a",{href:"https://pasv.us"},"https://pasv.us"))};var f=function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement(g,{MenuItems:e.MenuItems})),l.a.createElement("div",{className:"col-8"},l.a.createElement(h,null)))};var y=function(){var e=[{name:"One",url:"1"},{name:"Two",url:"2"},{name:"Three",url:"3"},{name:"Four",url:"4"}];return l.a.createElement("div",{className:"container"},l.a.createElement(E,{MenuItems:e,titile:"REACT!",version:"0.0.4"}),l.a.createElement(d,{MenuButtons:["1 Button","2 Button","3 Button","4 Button"],onButtonClick:function(e){alert(e)}}),l.a.createElement(f,{MenuItems:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.7fef412c.chunk.js.map