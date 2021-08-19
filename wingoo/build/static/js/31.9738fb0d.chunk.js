(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{111:function(e,a,t){"use strict";var n=t(113),r=t(2),c=t.n(r);Object(n.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},112:function(e,a,t){"use strict";var n=t(40),r=t(17),c=t(4),l=t.n(c),o=t(1),s=t.n(o),i=(t(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,c=e.className,o=e.type,m=Object(r.a)(e,["tag","className","type"]),u=l()(Object(n.a)({},o,!!o),c);return a=t||(!t&&i[o]?i[o]:"p"),s.a.createElement(a,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},a.a=m},114:function(e,a,t){"use strict";var n=t(17),r=t(1),c=t.n(r),l=(t(111),t(19)),o=t(112),s=l.a.create("page"),i=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,l=e.className,i=e.children,m=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=s.b("px-3",l);return c.a.createElement(r,Object.assign({className:u},m),c.a.createElement("div",{className:s.e("header")},a&&"string"===typeof a?c.a.createElement(o.a,{type:"h4",className:s.e("title")},a):a,t&&t),i)};i.defaultProps={tag:"div",title:""},a.a=i},160:function(e,a,t){"use strict";t.r(a);var n=t(116),r=t.n(n),c=t(117),l=t(115),o=t(114),s=t(1),i=t.n(s),m=t(105),u=t(92),p=t(106),d=t(124),f=t(121),y=t(122),h=t(94),E=t(95),g=t(97),b=t(96),O=t(123),N=t(16),v=t(38),j=t(112),k=t(19).a.create("page");a.default=function(e){var a=Object(s.useState)(!0),t=Object(l.a)(a,2),n=t[0],w=t[1],S=Object(s.useState)([]),x=Object(l.a)(S,2),C=x[0],J=x[1],T=Object(s.useState)(-1),I=Object(l.a)(T,2),P=I[0],q=I[1],A=Object(s.useState)(!1),D=Object(l.a)(A,1)[0];return Object(s.useEffect)(function(){Object(c.a)(r.a.mark(function a(){var t,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/complaints-admin",{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return 401==(t=a.sent).status&&e.history.push("/login"),a.next=6,t.json();case 6:return n=a.sent,a.next=9,J(n.data);case 9:case"end":return a.stop()}},a)}))()},[D]),i.a.createElement(o.a,{title:i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{to:"/my"},i.a.createElement(j.a,{type:"h4",className:k.e("title")},i.a.createElement(N.a,null)," Admin Complaint"))),className:"MyPage"},i.a.createElement(m.a,{style:{flexFlow:"row wrap",justifyContent:"space-between"},className:"category-bar"},i.a.createElement(u.a,{className:!0===n&&"btn-active",color:"link",onClick:function(){return w(!0)}},"Completed"),i.a.createElement(u.a,{className:!1===n&&"btn-active",color:"link",onClick:function(){return w(!1)}},"Wait")),i.a.createElement(m.a,null,i.a.createElement(p.a,{md:12},C&&C.length>0?C.filter(function(e){return e.status===n}).map(function(e,a){return i.a.createElement(u.a,{tag:"a",className:"form-control",color:"link",onClick:(t=e._id,function(){q(C.findIndex(function(e){return e._id===t}))}),key:a,style:{marginBottom:"0rem"}},e.category,"-",e.period);var t}):"")),i.a.createElement(d.a,{isOpen:-1!==P,toggle:function(){return q(-1)}},i.a.createElement(f.a,{toggle:function(){return q(-1)}},"Complaint & Suggestion"),P>-1&&C[P]?i.a.createElement(y.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{md:12},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement(g.a,{for:"exampleSelect1"},"category"),i.a.createElement(b.a,{type:"text",disabled:!0,id:"exampleSelect1",className:"form-control",value:C[P].category})),i.a.createElement(E.a,null,i.a.createElement(g.a,{for:"period1"},"Period ID"),i.a.createElement(b.a,{type:"text",disabled:!0,value:C[P].period,name:"period",id:"period1",className:"form-control"})),i.a.createElement(E.a,null,i.a.createElement(g.a,{for:"whatsapp1"},"Whatsapp Number"),i.a.createElement(b.a,{type:"text",disabled:!0,value:C[P].whatsapp,name:"whatsapp",id:"whatsapp1",className:"form-control"})),i.a.createElement(E.a,null,i.a.createElement(g.a,{for:"content1"},"Content"),i.a.createElement(b.a,{type:"textarea",disabled:!0,value:C[P].content,name:"content",id:"content1",className:"form-control"})),i.a.createElement(E.a,null,i.a.createElement(g.a,{for:"reply"},"Reply"),i.a.createElement(b.a,{type:"textarea",value:C[P].reply,onChange:function(e){var a=JSON.parse(JSON.stringify(C));a[P].reply=e.target.value,J(a)},name:"reply",id:"reply",className:"form-control"})))))):"",i.a.createElement(O.a,null,i.a.createElement(u.a,{color:"primary",onClick:function(){return a=P,void Object(c.a)(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/complaints-admin",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({id:C[a]._id,reply:C[a].reply})});case 2:401==t.sent.status&&e.history.push("/login"),(n=JSON.parse(JSON.stringify(C)))[a].status=!0,J(n),q(-1);case 8:case"end":return t.stop()}},t)}))();var a}},"Ok"),i.a.createElement(u.a,{color:"secondary",onClick:function(){return q(-1)}},"Close"))))}}}]);
//# sourceMappingURL=31.9738fb0d.chunk.js.map