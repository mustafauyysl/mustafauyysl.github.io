(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),i=c(3),s=c(1),a=c(0),l=Object(s.createContext)(),r=function(e){var t=e.children,c=Object(s.useState)("light"),n=Object(i.a)(c,2),r=n[0],o=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rajshekhar26.github.io/cleanfolio",j="JS.",u="John Smith",h="Front End Engineer",b="Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",m="https://example.com",d={linkedin:"https://linkedin.com",github:"https://github.com"},O=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],p=["HTML","CSS","JavaScript","TypeScript","React","Redux","SASS","Material UI","Git","CI/CD","Jest","Enzyme"],x="johnsmith@mail.com",f=c(16),k=c.n(f),v=c(14),N=c.n(v),g=c(18),_=c.n(g),S=c(17),C=c.n(S),w=(c(28),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],u=o[1],h=function(){return u(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(N.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),y=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(w,{})]})}),q=c(11),P=c.n(q),A=c(19),E=c.n(A),R=(c(33),function(){var e=u,t=h,c=b,n=m,i=d;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(E.a,{})})]})]})]})}),T=c(7),I=c.n(T),J=c(20),L=c.n(J),M=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(L.a,{})})]})}),F=(c(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(M,{project:e},I()())}))})]}):null}),V=(c(37),function(){return p.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),z=c(21),B=c.n(z),H=(c(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(B.a,{fontSize:"large"})})}):null}),D=(c(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),G=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),U=(c(41),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(R,{}),Object(a.jsx)(F,{}),Object(a.jsx)(V,{}),Object(a.jsx)(D,{})]}),Object(a.jsx)(H,{}),Object(a.jsx)(G,{})]})});c(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b7e6ece9.chunk.js.map