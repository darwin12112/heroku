(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{111:function(e,a,t){"use strict";var n=t(113),l=t(2),r=t.n(l);Object(n.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},112:function(e,a,t){"use strict";var n=t(40),l=t(17),r=t(4),c=t.n(r),o=t(1),m=t.n(o),s=(t(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,t=e.tag,r=e.className,o=e.type,i=Object(l.a)(e,["tag","className","type"]),u=c()(Object(n.a)({},o,!!o),r);return a=t||(!t&&s[o]?s[o]:"p"),m.a.createElement(a,Object.assign({},i,{className:u}))};i.defaultProps={type:"p"},a.a=i},114:function(e,a,t){"use strict";var n=t(17),l=t(1),r=t.n(l),c=(t(111),t(19)),o=t(112),m=c.a.create("page"),s=function(e){var a=e.title,t=e.breadcrumbs,l=e.tag,c=e.className,s=e.children,i=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=m.b("px-3",c);return r.a.createElement(l,Object.assign({className:u},i),r.a.createElement("div",{className:m.e("header")},a&&"string"===typeof a?r.a.createElement(o.a,{type:"h4",className:m.e("title")},a):a,t&&t),s)};s.defaultProps={tag:"div",title:""},a.a=s},133:function(e,a,t){"use strict";t.r(a);var n=t(116),l=t.n(n),r=t(113),c=t(117),o=t(115),m=t(114),s=t(1),i=t.n(s),u=t(105),p=t(106),g=t(92),d=t(104),h=t(107),E=t(125),f=t(124),N=t(121),O=t(122),b=t(94),k=t(95),y=t(96),v=t(123),S=t(16),j=t(38);a.default=function(e){var a=Object(s.useState)(!1),t=Object(o.a)(a,2),n=t[0],w=t[1],x=Object(s.useState)(!1),C=Object(o.a)(x,2),I=C[0],J=C[1],P=Object(s.useState)({isOpen:!1,name:JSON.parse(localStorage.getItem("auth")).user.nickname}),A=Object(o.a)(P,2),R=A[0],T=A[1];return i.a.createElement(m.a,{className:"MyPage"},i.a.createElement(u.a,null,i.a.createElement(p.a,{xl:12,lg:12,md:12,style:{backgroundColor:"teal",color:"white"}},i.a.createElement("div",{className:"mt-2"},i.a.createElement("div",{className:"mr-3",style:{float:"left",overflow:"hidden",width:"50px",height:"50px",borderRadius:"50px",backgroundColor:"#424242"}},i.a.createElement("div",{style:{width:"50px",height:"50px",backgroundSize:"cover",backgroundImage:"url('/img/avatar.svg')",backgroundPosition:"center center;"}})),i.a.createElement("span",{className:"mt-2",style:{fontWeight:"200"}},"User: ",R.name),i.a.createElement("br",null),i.a.createElement("span",{style:{fontWeight:"200"}},"ID: ",JSON.parse(localStorage.getItem("auth")).user._id)),i.a.createElement("div",{style:{clear:"both",padding:"0 12px",fontSize:"1.4rem"}},"Mobile: ",JSON.parse(localStorage.getItem("auth")).user.phone),i.a.createElement("div",{style:{padding:"0 12px",fontSize:"1.4rem"}},"Available Balance: \u20b9",JSON.parse(localStorage.getItem("auth")).user.budget," "),i.a.createElement("div",{style:{padding:"0 12px"}},i.a.createElement(g.a,{color:"primary",onClick:function(){return e.history.push("/recharge")}},"Recharge"),"\xa0",i.a.createElement(g.a,{onClick:function(){return T(Object(r.a)({},R,{isOpen:!0}))},color:"warning"},"Change Nick Name")))),i.a.createElement(u.a,null,i.a.createElement(p.a,{xl:12,lg:12,md:12},JSON.parse(localStorage.getItem("auth")).user.admin?i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{className:"form-control",color:"link",to:"/complaint-admin"},i.a.createElement(S.v,{className:"mr-3"})," Admin Complaints"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/withdrawl-admin"},i.a.createElement(S.v,{className:"mr-3"})," Admin Withdrawl")):"",i.a.createElement(j.a,{className:"form-control",color:"link",to:"/promotion"},i.a.createElement(S.p,{className:"mr-3"})," Promotion"),i.a.createElement(g.a,{tag:"a",className:"form-control",color:"link",onClick:function(){return w(!n)},style:{marginBottom:"0rem"}},i.a.createElement(S.w,{className:"mr-3"})," Wallet"),i.a.createElement(d.a,{isOpen:n},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement(j.a,{className:"form-control",color:"link",to:"/recharge"},"Recharge"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/withdrawl"},"Withdrawl")))),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/bank"},i.a.createElement(S.c,{className:"mr-3"})," Bank Card"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/account"},i.a.createElement(S.o,{className:"mr-3"})," Acount Security"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/complaint"},i.a.createElement(S.r,{className:"mr-3"})," Complaints & Suggetions"),i.a.createElement(g.a,{tag:"a",className:"form-control",color:"link",onClick:function(){return J(!I)},style:{marginBottom:"0rem"}},i.a.createElement(S.h,{className:"mr-3"})," About"),i.a.createElement(d.a,{isOpen:I},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement(j.a,{className:"form-control",color:"link",to:"/policy"},"Privacy Policy"),i.a.createElement(j.a,{className:"form-control",color:"link",to:"/agreement"},"Risk Disclosure Agreement")))),i.a.createElement(j.a,{className:"form-control logout",color:"link",to:"/logout"},i.a.createElement(S.q,{className:"mr-3"})," LogOut"))),i.a.createElement(u.a,null,i.a.createElement("div",{style:{height:"100px"}})),i.a.createElement(f.a,{isOpen:R.isOpen,toggle:function(){return T(Object(r.a)({},R,{isOpen:!1}))}},i.a.createElement(N.a,{toggle:function(){return T(Object(r.a)({},R,{isOpen:!1}))}},"Change Nick Name"),i.a.createElement(O.a,null,i.a.createElement(u.a,null,i.a.createElement(p.a,{md:12},i.a.createElement(b.a,null,i.a.createElement(k.a,null,i.a.createElement(y.a,{type:"text",onChange:function(e){T(Object(r.a)({},R,{name:e.target.value}))},id:"exampleSelect1",className:"form-control",value:R.name})))))),i.a.createElement(v.a,null,i.a.createElement(g.a,{color:"primary",onClick:function(){console.log(R.name),Object(c.a)(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/nickname",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({nickname:R.name})});case 2:e.sent,(a=JSON.parse(localStorage.getItem("auth"))).user.nickname=R.name,localStorage.setItem("auth",JSON.stringify(a)),T(Object(r.a)({},R,{isOpen:!1}));case 7:case"end":return e.stop()}},e)}))()}},"Ok"),i.a.createElement(g.a,{color:"secondary",onClick:function(){return T(Object(r.a)({},R,{isOpen:!1}))}},"Close"))))}}}]);
//# sourceMappingURL=32.4d3685d9.chunk.js.map