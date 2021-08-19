(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{112:function(e,a,t){"use strict";var r=t(116),l=t(2),c=t.n(l);a.a=Object(r.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},113:function(e,a,t){"use strict";var r=t(44),l=t(18),c=t(4),n=t.n(c),s=t(1),o=t.n(s),m=(t(112),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,t=e.tag,c=e.className,s=e.type,i=Object(l.a)(e,["tag","className","type"]),u=n()(Object(r.a)({},s,!!s),c);return a=t||(!t&&m[s]?m[s]:"p"),o.a.createElement(a,Object.assign({},i,{className:u}))};i.defaultProps={type:"p"},a.a=i},114:function(e,a,t){"use strict";var r=t(18),l=t(1),c=t.n(l),n=(t(112),t(20)),s=t(113),o=n.a.create("page"),m=function(e){var a=e.title,t=e.breadcrumbs,l=e.tag,n=e.className,m=e.children,i=Object(r.a)(e,["title","breadcrumbs","tag","className","children"]),u=o.b("px-3",n);return c.a.createElement(l,Object.assign({className:u},i),c.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?c.a.createElement(s.a,{type:"h4",className:o.e("title")},a):a,t&&t),m)};m.defaultProps={tag:"div",title:""},a.a=m},116:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t(44);function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},l=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.forEach(function(a){Object(r.a)(e,a,t[a])})}return e}},118:function(e,a,t){"use strict";var r=t(5),l=t(6),c=t(1),n=t.n(c),s=t(2),o=t.n(s),m=t(4),i=t.n(m),u=t(3),d={tag:u.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,s=e.tag,o=Object(l.a)(e,["className","cssModule","innerRef","tag"]),m=Object(u.j)(i()(a,"card-body"),t);return n.a.createElement(s,Object(r.a)({},o,{className:m,ref:c}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},119:function(e,a,t){"use strict";var r=t(5),l=t(6),c=t(1),n=t.n(c),s=t(2),o=t.n(s),m=t(4),i=t.n(m),u=t(3),d={tag:u.n,className:o.a.string,cssModule:o.a.object},E=function(e){var a=e.className,t=e.cssModule,c=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),o=Object(u.j)(i()(a,"card-header"),t);return n.a.createElement(c,Object(r.a)({},s,{className:o}))};E.propTypes=d,E.defaultProps={tag:"div"},a.a=E},358:function(e,a,t){"use strict";t.r(a);var r=t(1),l=t.n(r),c=t(106),n=t(107),s=t(108),o=t(119),m=t(118),i=t(5),u=t(6),d=t(2),E=t.n(d),f=t(4),p=t.n(f),g=t(3),N={color:E.a.string,pill:E.a.bool,tag:g.n,innerRef:E.a.oneOfType([E.a.object,E.a.func,E.a.string]),children:E.a.node,className:E.a.string,cssModule:E.a.object},y=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.innerRef,n=e.pill,s=e.tag,o=Object(u.a)(e,["className","cssModule","color","innerRef","pill","tag"]),m=Object(g.j)(p()(a,"badge","badge-"+r,!!n&&"badge-pill"),t);return o.href&&"span"===s&&(s="a"),l.a.createElement(s,Object(i.a)({},o,{className:m,ref:c}))};y.propTypes=N,y.defaultProps={color:"secondary",pill:!1,tag:"span"};var b=y,h=t(42),O=t(114);a.default=function(){return l.a.createElement(O.a,{title:"Badges",breadcrumbs:[{name:"badges",active:!0}]},l.a.createElement(c.a,null,l.a.createElement(n.a,{md:6},l.a.createElement(s.a,null,l.a.createElement(o.a,null,"Scale to parent"),l.a.createElement(m.a,null,l.a.createElement("h1",null,"Heading ",l.a.createElement(b,{color:"secondary"},"New")),l.a.createElement("h2",null,"Heading ",l.a.createElement(b,{color:"secondary"},"New")),l.a.createElement("h3",null,"Heading ",l.a.createElement(b,{color:"secondary"},"New")),l.a.createElement("h4",null,"Heading ",l.a.createElement(b,{color:"secondary"},"New")),l.a.createElement("h5",null,"Heading ",l.a.createElement(b,{color:"secondary"},"New")),l.a.createElement("h6",null,"Heading ",l.a.createElement(b,{color:"secondary"},"New"))))),l.a.createElement(n.a,{md:6},l.a.createElement(s.a,null,l.a.createElement(o.a,null,"with buttons"),l.a.createElement(m.a,null,l.a.createElement(h.a,{color:"primary",className:"mr-1"},"Notifications ",l.a.createElement(b,{color:"secondary"},"4")),l.a.createElement(h.a,{color:"info",className:"mr-1"},"Notifications ",l.a.createElement(b,{color:"danger"},"4")),l.a.createElement(h.a,{color:"secondary",className:"mr-1"},"Notifications ",l.a.createElement(b,{color:"secondary"},"4"))),l.a.createElement(m.a,null,l.a.createElement(h.a,{color:"primary",outline:!0,className:"mr-1"},"Notifications ",l.a.createElement(b,{color:"primary"},"4")),l.a.createElement(h.a,{color:"info",outline:!0,className:"mr-1"},"Notifications ",l.a.createElement(b,{color:"info"},"4")),l.a.createElement(h.a,{color:"secondary",outline:!0,className:"mr-1"},"Notifications ",l.a.createElement(b,{color:"secondary"},"4")))))),l.a.createElement(c.a,null,l.a.createElement(n.a,{md:4},l.a.createElement(s.a,null,l.a.createElement(o.a,null,"Contextual variations"),l.a.createElement(m.a,null,l.a.createElement(b,{color:"primary",className:"mr-1"},"Primary"),l.a.createElement(b,{color:"secondary",className:"mr-1"},"Secondary"),l.a.createElement(b,{color:"success",className:"mr-1"},"Success"),l.a.createElement(b,{color:"danger",className:"mr-1"},"Danger"),l.a.createElement(b,{color:"warning",className:"mr-1"},"Warning"),l.a.createElement(b,{color:"info",className:"mr-1"},"Info"),l.a.createElement(b,{color:"light",className:"mr-1"},"Light"),l.a.createElement(b,{color:"dark",className:"mr-1"},"Dark")))),l.a.createElement(n.a,{md:4},l.a.createElement(s.a,null,l.a.createElement(o.a,null,"Pills"),l.a.createElement(m.a,null,l.a.createElement(b,{color:"primary",pill:!0,className:"mr-1"},"Primary"),l.a.createElement(b,{color:"secondary",pill:!0,className:"mr-1"},"Secondary"),l.a.createElement(b,{color:"success",pill:!0,className:"mr-1"},"Success"),l.a.createElement(b,{color:"danger",pill:!0,className:"mr-1"},"Danger"),l.a.createElement(b,{color:"warning",pill:!0,className:"mr-1"},"Warning"),l.a.createElement(b,{color:"info",pill:!0,className:"mr-1"},"Info"),l.a.createElement(b,{color:"light",pill:!0,className:"mr-1"},"Light"),l.a.createElement(b,{color:"dark",pill:!0,className:"mr-1"},"Dark")))),l.a.createElement(n.a,{md:4},l.a.createElement(s.a,null,l.a.createElement(o.a,null,"Links"),l.a.createElement(m.a,null,l.a.createElement(b,{href:"#",color:"primary",className:"mr-1"},"Primary"),l.a.createElement(b,{href:"#",color:"secondary",className:"mr-1"},"Secondary"),l.a.createElement(b,{href:"#",color:"success",className:"mr-1"},"Success"),l.a.createElement(b,{href:"#",color:"danger",className:"mr-1"},"Danger"),l.a.createElement(b,{href:"#",color:"warning",className:"mr-1"},"Warning"),l.a.createElement(b,{href:"#",color:"info",className:"mr-1"},"Info"),l.a.createElement(b,{href:"#",color:"light",className:"mr-1"},"Light"),l.a.createElement(b,{href:"#",color:"dark",className:"mr-1"},"Dark"))))))}}}]);
//# sourceMappingURL=15.b6acdcba.chunk.js.map