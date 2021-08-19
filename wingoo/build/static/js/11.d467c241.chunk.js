(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,a,t){"use strict";var n=t(116),r=t(2),l=t.n(r);a.a=Object(n.a)({},l.a,{ID:l.a.oneOfType([l.a.string,l.a.number]).isRequired,component:l.a.oneOfType([l.a.string,l.a.func]),date:l.a.oneOfType([l.a.instanceOf(Date),l.a.string])})},113:function(e,a,t){"use strict";var n=t(44),r=t(18),l=t(4),c=t.n(l),s=t(1),o=t.n(s),m=(t(112),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,l=e.className,s=e.type,u=Object(r.a)(e,["tag","className","type"]),i=c()(Object(n.a)({},s,!!s),l);return a=t||(!t&&m[s]?m[s]:"p"),o.a.createElement(a,Object.assign({},u,{className:i}))};u.defaultProps={type:"p"},a.a=u},114:function(e,a,t){"use strict";var n=t(18),r=t(1),l=t.n(r),c=(t(112),t(20)),s=t(113),o=c.a.create("page"),m=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,c=e.className,m=e.children,u=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),i=o.b("px-3",c);return l.a.createElement(r,Object.assign({className:i},u),l.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?l.a.createElement(s.a,{type:"h4",className:o.e("title")},a):a,t&&t),m)};m.defaultProps={tag:"div",title:""},a.a=m},116:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(44);function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(a){Object(n.a)(e,a,t[a])})}return e}},118:function(e,a,t){"use strict";var n=t(5),r=t(6),l=t(1),c=t.n(l),s=t(2),o=t.n(s),m=t(4),u=t.n(m),i=t(3),d={tag:i.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),m=Object(i.j)(u()(a,"card-body"),t);return c.a.createElement(s,Object(n.a)({},o,{className:m,ref:l}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},119:function(e,a,t){"use strict";var n=t(5),r=t(6),l=t(1),c=t.n(l),s=t(2),o=t.n(s),m=t(4),u=t.n(m),i=t(3),d={tag:i.n,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(i.j)(u()(a,"card-header"),t);return c.a.createElement(l,Object(n.a)({},s,{className:o}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},125:function(e,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return r});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},r=function(){return["primary","secondary","success","info","warning","danger"]}},150:function(e,a){var t=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt,m=Object.prototype.toString;function u(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==n}(e))return t;if(u(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=u(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=c.test(e);return i||s.test(e)?o(e.slice(2),i?2:8):l.test(e)?t:+e}},335:function(e,a,t){"use strict";var n=t(5),r=t(6),l=t(1),c=t.n(l),s=t(2),o=t.n(s),m=t(4),u=t.n(m),i=t(150),d=t.n(i),b=t(3),p={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:b.n,value:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object},f=function(e){var a=e.children,t=e.className,l=e.barClassName,s=e.cssModule,o=e.value,m=e.max,i=e.animated,p=e.striped,f=e.color,E=e.bar,v=e.multi,g=e.tag,y=Object(r.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),N=d()(o)/d()(m)*100,O=Object(b.j)(u()(t,"progress"),s),h=Object(b.j)(u()("progress-bar",E&&t||l,i?"progress-bar-animated":null,f?"bg-"+f:null,p||i?"progress-bar-striped":null),s),j=v?a:c.a.createElement("div",{className:h,style:{width:N+"%"},role:"progressbar","aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":m,children:a});return E?j:c.a.createElement(g,Object(n.a)({},y,{className:O,children:j}))};f.propTypes=p,f.defaultProps={tag:"div",value:0,max:100},a.a=f},348:function(e,a,t){"use strict";t.r(a);var n=t(114),r=t(1),l=t.n(r),c=t(106),s=t(107),o=t(108),m=t(119),u=t(118),i=t(335),d=t(125),b=Object(d.b)(),p=function(){return Math.floor(80*Math.random()+20)};a.default=function(){return l.a.createElement(n.a,{title:"Progress",breadcrumbs:[{name:"progress",active:!0}]},l.a.createElement(c.a,null,l.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,"Colors"),l.a.createElement(u.a,null,b.map(function(e,a){return l.a.createElement(i.a,{key:a,color:e,value:p(),className:"mb-3"})})))),l.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,"Labels"),l.a.createElement(u.a,null,b.map(function(e,a){var t=p();return l.a.createElement(i.a,{key:a,color:e,value:t,className:"mb-3"},t,"%")}))))),l.a.createElement(c.a,null,l.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,"Striped"),l.a.createElement(u.a,null,b.map(function(e,a){return l.a.createElement(i.a,{key:a,striped:!0,color:e,value:p(),className:"mb-3"})})))),l.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,"Animated"),l.a.createElement(u.a,null,b.map(function(e,a){return l.a.createElement(i.a,{key:a,animated:!0,color:e,value:p(),className:"mb-3"})}))))),l.a.createElement(c.a,null,l.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,"Multiple Bars / Stacked"),l.a.createElement(u.a,null,l.a.createElement("p",{className:"text-center mt-3"},"Plain"),l.a.createElement(i.a,{multi:!0},l.a.createElement(i.a,{bar:!0,value:"15"}),l.a.createElement(i.a,{bar:!0,color:"success",value:"20"}),l.a.createElement(i.a,{bar:!0,color:"info",value:"25"}),l.a.createElement(i.a,{bar:!0,color:"warning",value:"20"}),l.a.createElement(i.a,{bar:!0,color:"danger",value:"15"})),l.a.createElement("p",{className:"text-center mt-3"},"With Labels"),l.a.createElement(i.a,{multi:!0},l.a.createElement(i.a,{bar:!0,value:"15"},"Meh"),l.a.createElement(i.a,{bar:!0,color:"success",value:"35"},"Wow!"),l.a.createElement(i.a,{bar:!0,color:"warning",value:"25"},"25%"),l.a.createElement(i.a,{bar:!0,color:"danger",value:"25"},"LOOK OUT!!")),l.a.createElement("p",{className:"text-center mt-3"},"Stripes and Animations"),l.a.createElement(i.a,{multi:!0},l.a.createElement(i.a,{bar:!0,striped:!0,value:"15"},"Stripes"),l.a.createElement(i.a,{bar:!0,animated:!0,color:"success",value:"30"},"Animated Stripes"),l.a.createElement(i.a,{bar:!0,color:"info",value:"25"},"Plain"))))),l.a.createElement(s.a,{md:"6",sm:"12",xs:"12"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,"Max value"),l.a.createElement(u.a,null,l.a.createElement("div",{className:"text-center"},"1 of 5"),l.a.createElement(i.a,{value:"1",max:"5"}),l.a.createElement("div",{className:"text-center"},"50 of 135"),l.a.createElement(i.a,{value:50,max:"135"}),l.a.createElement("div",{className:"text-center"},"75 of 111"),l.a.createElement(i.a,{value:75,max:111}),l.a.createElement("div",{className:"text-center"},"463 of 500"),l.a.createElement(i.a,{value:"463",max:500}),l.a.createElement("div",{className:"text-center"},"Various (40) of 55"),l.a.createElement(i.a,{multi:!0},l.a.createElement(i.a,{bar:!0,value:"5",max:55},"5"),l.a.createElement(i.a,{bar:!0,color:"success",value:"15",max:55},"15"),l.a.createElement(i.a,{bar:!0,color:"warning",value:"10",max:55},"10"),l.a.createElement(i.a,{bar:!0,color:"danger",value:"10",max:55},"10")))))))}}}]);
//# sourceMappingURL=11.d467c241.chunk.js.map