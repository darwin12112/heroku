(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{112:function(e,a,t){"use strict";var l=t(116),n=t(2),r=t.n(n);a.a=Object(l.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},113:function(e,a,t){"use strict";var l=t(43),n=t(18),r=t(4),c=t.n(r),m=t(1),o=t.n(m),s=(t(112),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,t=e.tag,r=e.className,m=e.type,i=Object(n.a)(e,["tag","className","type"]),E=c()(Object(l.a)({},m,!!m),r);return a=t||(!t&&s[m]?s[m]:"p"),o.a.createElement(a,Object.assign({},i,{className:E}))};i.defaultProps={type:"p"},a.a=i},114:function(e,a,t){"use strict";var l=t(18),n=t(1),r=t.n(n),c=(t(112),t(20)),m=t(113),o=c.a.create("page"),s=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,c=e.className,s=e.children,i=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),E=o.b("px-3",c);return r.a.createElement(n,Object.assign({className:E},i),r.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?r.a.createElement(m.a,{type:"h4",className:o.e("title")},a):a,t&&t),s)};s.defaultProps={tag:"div",title:""},a.a=s},116:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var l=t(43);function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(a){Object(l.a)(e,a,t[a])})}return e}},118:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(1),c=t.n(r),m=t(2),o=t.n(m),s=t(4),i=t.n(s),E=t(3),p={tag:E.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,m=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),s=Object(E.j)(i()(a,"card-body"),t);return c.a.createElement(m,Object(l.a)({},o,{className:s,ref:r}))};u.propTypes=p,u.defaultProps={tag:"div"},a.a=u},119:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(1),c=t.n(r),m=t(2),o=t.n(m),s=t(4),i=t.n(s),E=t(3),p={tag:E.n,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),o=Object(E.j)(i()(a,"card-header"),t);return c.a.createElement(r,Object(l.a)({},m,{className:o}))};u.propTypes=p,u.defaultProps={tag:"div"},a.a=u},356:function(e,a,t){"use strict";t.r(a);var l=t(114),n=t(1),r=t.n(n),c=t(106),m=t(107),o=t(108),s=t(119),i=t(118),E=t(56),p=t(22),u=t(97),d=t(23),h=t(5),b=t(6),f=t(2),g=t.n(f),x=t(4),y=t.n(x),w=t(3),v={children:g.a.node,inline:g.a.bool,tag:w.n,color:g.a.string,className:g.a.string,cssModule:g.a.object},k=function(e){var a=e.className,t=e.cssModule,l=e.inline,n=e.color,c=e.tag,m=Object(b.a)(e,["className","cssModule","inline","color","tag"]),o=Object(w.j)(y()(a,!l&&"form-text",!!n&&"text-"+n),t);return r.a.createElement(c,Object(h.a)({},m,{className:o}))};k.propTypes=v,k.defaultProps={tag:"small",color:"muted"};var O=k,N=t(52),S={children:g.a.node,tag:w.n,className:g.a.string,cssModule:g.a.object,valid:g.a.bool,tooltip:g.a.bool},j={tag:"div",valid:void 0},P=function(e){var a=e.className,t=e.cssModule,l=e.valid,n=e.tooltip,c=e.tag,m=Object(b.a)(e,["className","cssModule","valid","tooltip","tag"]),o=n?"tooltip":"feedback",s=Object(w.j)(y()(a,l?"valid-"+o:"invalid-"+o),t);return r.a.createElement(c,Object(h.a)({},m,{className:s}))};P.propTypes=S,P.defaultProps=j;var M=P,T=t(17),I=t(41);a.default=function(){return r.a.createElement(l.a,{title:"My Account"},r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(I.a,{className:"form-control",color:"danger",to:"/logout",style:{textAlign:"center"}},r.a.createElement(T.d,null)," LogOut"),JSON.parse(localStorage.getItem("auth")).user.admin?r.a.createElement(I.a,{className:"form-control",color:"danger",to:"/user-admin",style:{textAlign:"center"}},r.a.createElement(T.h,null)," Admin"):"",r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Input Types"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Plain Text (Static)"),r.a.createElement(d.a,{plaintext:!0,value:"Some plain text/ static value",readOnly:!0})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Email"),r.a.createElement(d.a,{type:"email",name:"email",placeholder:"with a placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword"},"Password"),r.a.createElement(d.a,{type:"password",name:"password",placeholder:"password placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleUrl"},"Url"),r.a.createElement(d.a,{type:"url",name:"url",id:"exampleUrl",placeholder:"url placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleNumber"},"Number"),r.a.createElement(d.a,{type:"number",name:"number",id:"exampleNumber",placeholder:"number placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleDatetime"},"Datetime"),r.a.createElement(d.a,{type:"datetime",name:"datetime",id:"exampleDatetime",placeholder:"datetime placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleDate"},"Date"),r.a.createElement(d.a,{type:"date",name:"date",id:"exampleDate",placeholder:"date placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleTime"},"Time"),r.a.createElement(d.a,{type:"time",name:"time",id:"exampleTime",placeholder:"time placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleColor"},"Color"),r.a.createElement(d.a,{type:"color",name:"color",id:"exampleColor",placeholder:"color placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleSearch"},"Search"),r.a.createElement(d.a,{type:"search",name:"search",id:"exampleSearch",placeholder:"search placeholder"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleSelect"},"Select"),r.a.createElement(d.a,{type:"select",name:"select"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleSelectMulti"},"Select Multiple"),r.a.createElement(d.a,{type:"select",name:"selectMulti",multiple:!0},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleText"},"Text Area"),r.a.createElement(d.a,{type:"textarea",name:"text"})),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleFile"},"File"),r.a.createElement(d.a,{type:"file",name:"file"}),r.a.createElement(O,{color:"muted"},"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.")),r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio"})," Option one is this and that\u2014be sure to include why it's great")),r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox"})," Check me out")))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Form Grid"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleEmail",sm:2},"Email"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"email",name:"email",placeholder:"with a placeholder"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"examplePassword",sm:2},"Password"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"password",name:"password",placeholder:"password placeholder"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleSelect",sm:2},"Select"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"select",name:"select"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleSelectMulti",sm:2},"Select Multiple"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"select",name:"selectMulti",multiple:!0}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleText",sm:2},"Text Area"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"textarea",name:"text"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleFile",sm:2},"File"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"file",name:"file"}),r.a.createElement(O,{color:"muted"},"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."))),r.a.createElement(p.a,{tag:"fieldset",row:!0},r.a.createElement(u.a,{for:"checkbox2",sm:2},"Radio"),r.a.createElement(m.a,{sm:10},r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio",name:"radio2"})," Option one is this and that\u2014be sure to include why it's great")),r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio",name:"radio2"})," Option two can be something else and selecting it will deselect option one")),r.a.createElement(p.a,{check:!0,disabled:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"radio",name:"radio2",disabled:!0})," Option three is disabled")))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"checkbox2",sm:2},"Checkbox"),r.a.createElement(m.a,{sm:{size:10}},r.a.createElement(p.a,{check:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox",id:"checkbox2"})," Check me out")))),r.a.createElement(p.a,{check:!0,row:!0},r.a.createElement(m.a,{sm:{size:10,offset:2}},r.a.createElement(N.a,null,"Submit")))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Form Validation"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Input with success"),r.a.createElement(d.a,{valid:!0}),r.a.createElement(M,null,r.a.createElement("a",{href:"https://github.com/twbs/bootstrap/issues/23372"},"A bug")," ","fixed in (the currently unreleased) (",r.a.createElement("a",{href:"https://github.com/twbs/bootstrap/pull/23377"},"PR"),") bootstrap"," ",r.a.createElement("a",{href:"https://github.com/twbs/bootstrap/issues/23278"},"v4 beta-2")," ","shows invalid-feedback with is-valid inputs."),r.a.createElement(O,null,"Example help text that remains unchanged.")),r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword"},"Input with danger"),r.a.createElement(d.a,{valid:!1}),r.a.createElement(M,null,"Oh noes! that name is already taken"),r.a.createElement(O,null,"Example help text that remains unchanged.")))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Hidden Labels"),r.a.createElement(i.a,null,r.a.createElement(E.a,{inline:!0},r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail",hidden:!0},"Email"),r.a.createElement(d.a,{type:"email",name:"email",placeholder:"Email"}))," ",r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword",hidden:!0},"Password"),r.a.createElement(d.a,{type:"password",name:"password",placeholder:"Password"}))," ",r.a.createElement(N.a,null,"Submit")))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Inline Form"),r.a.createElement(i.a,null,r.a.createElement(E.a,{inline:!0},r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"exampleEmail"},"Email")," ",r.a.createElement(d.a,{type:"email",name:"email",placeholder:"something@idk.cool"}))," ",r.a.createElement(p.a,null,r.a.createElement(u.a,{for:"examplePassword"},"Password")," ",r.a.createElement(d.a,{type:"password",name:"password",placeholder:"don't tell!"}))," ",r.a.createElement(N.a,null,"Submit"))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Inline Checkboxes"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{check:!0,inline:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox"})," Some input")),r.a.createElement(p.a,{check:!0,inline:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(d.a,{type:"checkbox"})," Some other input"))))))),r.a.createElement(c.a,null,r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Input Sizing"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(d.a,{className:"mb-2",placeholder:"lg",bsSize:"lg"}),r.a.createElement(d.a,{className:"mb-2",placeholder:"default"}),r.a.createElement(d.a,{className:"mb-2",placeholder:"sm",bsSize:"sm"}),r.a.createElement(d.a,{className:"mb-2",type:"select",bsSize:"lg"},r.a.createElement("option",null,"Large Select")),r.a.createElement(d.a,{className:"mb-2",type:"select"},r.a.createElement("option",null,"Default Select")),r.a.createElement(d.a,{className:"mb-2",type:"select",bsSize:"sm"},r.a.createElement("option",null,"Small Select")))))),r.a.createElement(m.a,{xl:6,lg:12,md:12},r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Input Grid Sizing"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleEmail",sm:2,size:"lg"},"Email"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"email",name:"email",placeholder:"lg",bsSize:"lg"}))),r.a.createElement(p.a,{row:!0},r.a.createElement(u.a,{for:"exampleEmail2",sm:2},"Email"),r.a.createElement(m.a,{sm:10},r.a.createElement(d.a,{type:"email",name:"email",id:"exampleEmail2",placeholder:"default"})))))))))}}}]);
//# sourceMappingURL=17.a24a7a02.chunk.js.map