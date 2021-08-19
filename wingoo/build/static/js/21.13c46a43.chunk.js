(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{112:function(e,a,t){"use strict";var n=t(116),l=t(2),r=t.n(l);a.a=Object(n.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},113:function(e,a,t){"use strict";var n=t(44),l=t(18),r=t(4),c=t.n(r),m=t(1),d=t.n(m),p=(t(112),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,r=e.className,m=e.type,u=Object(l.a)(e,["tag","className","type"]),o=c()(Object(n.a)({},m,!!m),r);return a=t||(!t&&p[m]?p[m]:"p"),d.a.createElement(a,Object.assign({},u,{className:o}))};u.defaultProps={type:"p"},a.a=u},114:function(e,a,t){"use strict";var n=t(18),l=t(1),r=t.n(l),c=(t(112),t(20)),m=t(113),d=c.a.create("page"),p=function(e){var a=e.title,t=e.breadcrumbs,l=e.tag,c=e.className,p=e.children,u=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),o=d.b("px-3",c);return r.a.createElement(l,Object.assign({className:o},u),r.a.createElement("div",{className:d.e("header")},a&&"string"===typeof a?r.a.createElement(m.a,{type:"h4",className:d.e("title")},a):a,t&&t),p)};p.defaultProps={tag:"div",title:""},a.a=p},351:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(106),c=t(107),m=t(108),d=t(119),p=t(118),u=t(5),o=t(6),s=t(2),E=t.n(s),i=t(4),b=t.n(i),h=t(3),y={tag:h.n,size:E.a.string,className:E.a.string,cssModule:E.a.object},g=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=e.size,c=Object(o.a)(e,["className","cssModule","tag","size"]),m=Object(h.j)(b()(a,"input-group",r?"input-group-"+r:null),t);return l.a.createElement(n,Object(u.a)({},c,{className:m}))};g.propTypes=y,g.defaultProps={tag:"div"};var T=g,f={tag:h.n,className:E.a.string,cssModule:E.a.object},j=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),c=Object(h.j)(b()(a,"input-group-text"),t);return l.a.createElement(n,Object(u.a)({},r,{className:c}))};j.propTypes=f,j.defaultProps={tag:"span"};var N=j,O={tag:h.n,addonType:E.a.oneOf(["prepend","append"]).isRequired,children:E.a.node,className:E.a.string,cssModule:E.a.object},v=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=e.addonType,c=e.children,m=Object(o.a)(e,["className","cssModule","tag","addonType","children"]),d=Object(h.j)(b()(a,"input-group-"+r),t);return"string"===typeof c?l.a.createElement(n,Object(u.a)({},m,{className:d}),l.a.createElement(N,{children:c})):l.a.createElement(n,Object(u.a)({},m,{className:d,children:c}))};v.propTypes=O,v.defaultProps={tag:"div"};var A=v,w=t(23),M=t(42),k=t(354),z=t(338),x=t(339),I=t(340),D=t(114);a.default=function(){return l.a.createElement(D.a,{title:"Input Groups",breadcrumbs:[{name:"Input Groups",active:!0}]},l.a.createElement(r.a,null,l.a.createElement(c.a,{md:6},l.a.createElement(m.a,null,l.a.createElement(d.a,null,"Input Group"),l.a.createElement(p.a,null,l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},"@"),l.a.createElement(w.a,{placeholder:"username"})),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},l.a.createElement(N,null,l.a.createElement(w.a,{addon:!0,type:"checkbox","aria-label":"Checkbox for following text input"}))),l.a.createElement(w.a,{placeholder:"Check it out"})),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(w.a,{placeholder:"username"}),l.a.createElement(A,{addonType:"append"},"@example.com")),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},l.a.createElement(N,null,"$"),l.a.createElement(N,null,"$")),l.a.createElement(w.a,{placeholder:"Dolla dolla billz yo!"}),l.a.createElement(A,{addonType:"append"},l.a.createElement(N,null,"$"),l.a.createElement(N,null,"$"))),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},"$"),l.a.createElement(w.a,{placeholder:"Amount",type:"number",step:"1"}),l.a.createElement(A,{addonType:"append"},".00"))))),l.a.createElement(c.a,{md:6},l.a.createElement(m.a,null,l.a.createElement(d.a,null,"Addons"),l.a.createElement(p.a,null,l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},l.a.createElement(N,null,"To the Left!")),l.a.createElement(w.a,null)),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(w.a,null),l.a.createElement(A,{addonType:"append"},l.a.createElement(N,null,"To the Right!"))),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},l.a.createElement(N,null,"To the Left!")),l.a.createElement(w.a,{placeholder:"and..."}),l.a.createElement(A,{addonType:"append"},l.a.createElement(N,null,"To the Right!"))))))),l.a.createElement(r.a,null,l.a.createElement(c.a,{md:6},l.a.createElement(m.a,null,l.a.createElement(d.a,null,"Addon Sizing"),l.a.createElement(p.a,null,l.a.createElement(T,{size:"lg"},l.a.createElement(A,{addonType:"prepend"},"@lg"),l.a.createElement(w.a,null)),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},"@normal"),l.a.createElement(w.a,null)),l.a.createElement("br",null),l.a.createElement(T,{size:"sm"},l.a.createElement(A,{addonType:"prepend"},"@sm"),l.a.createElement(w.a,null))))),l.a.createElement(c.a,{md:6},l.a.createElement(m.a,null,l.a.createElement(d.a,null,"Buttons / Dropdowns"),l.a.createElement(p.a,null,l.a.createElement(T,null,l.a.createElement(A,{addonType:"prepend"},l.a.createElement(M.a,null,"I'm a button")),l.a.createElement(w.a,null)),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(w.a,null),l.a.createElement(k.a,{addonType:"append"},l.a.createElement(z.a,{caret:!0},"Button Dropdown"),l.a.createElement(x.a,null,l.a.createElement(I.a,{header:!0},"Header"),l.a.createElement(I.a,{disabled:!0},"Action"),l.a.createElement(I.a,null,"Another Action"),l.a.createElement(I.a,{divider:!0}),l.a.createElement(I.a,null,"Another Action")))),l.a.createElement("br",null),l.a.createElement(T,null,l.a.createElement(k.a,{addonType:"prepend"},l.a.createElement(M.a,{outline:!0},"Split Button"),l.a.createElement(z.a,{split:!0,outline:!0}),l.a.createElement(x.a,null,l.a.createElement(I.a,{header:!0},"Header"),l.a.createElement(I.a,{disabled:!0},"Action"),l.a.createElement(I.a,null,"Another Action"),l.a.createElement(I.a,{divider:!0}),l.a.createElement(I.a,null,"Another Action"))),l.a.createElement(w.a,{placeholder:"and..."}),l.a.createElement(A,{addonType:"append"},l.a.createElement(M.a,{color:"secondary"},"I'm a button"))))))))}}}]);
//# sourceMappingURL=21.13c46a43.chunk.js.map