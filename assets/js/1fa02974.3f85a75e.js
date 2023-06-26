"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[80202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},14668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Graduation Process",sidebar_position:1},o=void 0,s={unversionedId:"kit-process/graduation-process",id:"kit-process/graduation-process",title:"Graduation Process",description:"At this point we describe the development process of a KIT. Since the KITs are to be developed in opensource we have decided to use the Graduation Process of the cncf in a slightly modified version. The goal is to track the progress of each kit and to achieve a certain level of quality.",source:"@site/docs/kit-process/graduation-process.md",sourceDirName:"kit-process",slug:"/kit-process/graduation-process",permalink:"/docs/kit-process/graduation-process",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kit-process/graduation-process.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Graduation Process",sidebar_position:1},sidebar:"docs",previous:{title:"TRG 7.07 - Legal notice for documentation",permalink:"/docs/release/trg-7/trg-7-07"},next:{title:"Graduation Process",permalink:"/docs/kit-process/graduation-process"}},l={},d=[{value:"Stages",id:"stages",level:2},{value:"Stage: Sandbox",id:"stage-sandbox",level:3},{value:"Stage: Incubating",id:"stage-incubating",level:3},{value:"Stage: Graduated",id:"stage-graduated",level:3},{value:"Promotion Process",id:"promotion-process",level:2},{value:"Artfacts &amp; Deliverables",id:"artfacts--deliverables",level:2},{value:"Legend",id:"legend",level:3}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"    **********************************************\n    ** DISCLAIMER                               **\n    ** THIS PROCESS IS STILL UNDER DEVELOPMENT  **\n    ** FEEDBACK IS APPRECIATED                  **\n    **********************************************\n")),(0,n.kt)("p",null,"At this point we describe the development process of a KIT. Since the KITs are to be developed in opensource we have decided to use the Graduation Process of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.cncf.io"},"cncf")," in a slightly modified version. The goal is to track the progress of each kit and to achieve a certain level of quality."),(0,n.kt)("h2",{id:"stages"},"Stages"),(0,n.kt)("p",null,"In our version we use three stages Sandbox, Incubating and Graduated. In each stage, different goals have to be achieved."),(0,n.kt)("h3",{id:"stage-sandbox"},"Stage: Sandbox"),(0,n.kt)("p",null,"In the Sandbox stage, the developers have identified a problem or have an idea on how to extend the usefulness of the data space to the community. They develop an solution for this problem together with a vison/mission."),(0,n.kt)("h3",{id:"stage-incubating"},"Stage: Incubating"),(0,n.kt)("p",null,"In the next stage, the Incubating stage, the solution plan is implemented, and the developers must create various artifacts and deliverables required by the community. Once the KIT is promited to the incubating stage it must implement the defined ",(0,n.kt)("a",{parentName:"p",href:"versioning"},"versioning scheme")," starting with the version ",(0,n.kt)("inlineCode",{parentName:"p"},"0.0.0"),"."),(0,n.kt)("h3",{id:"stage-graduated"},"Stage: Graduated"),(0,n.kt)("p",null,"In the final stage, the Graduated stage, the KIT is production ready, published and maintained by the community."),(0,n.kt)("h2",{id:"promotion-process"},"Promotion Process"),(0,n.kt)("p",null,"As described, a KIT passes through different stages. In order to be promoted from one level to the next, the developers must fulfill various criteria. For each stage, different artifacts and deliverables are defined that have to be completed. A distinction is made between mandatory (\u2713) and recommended ((\u2713)) deliverables. In order to be promoted to the next level, a kit must have completed all necessary items of the lower level and at least one necessary item of the following level. As soon as this criteria is met a promotion has to be requested. To achieve graduated status, additionaly a case study must be completed with a partner from the community. The aim of this case study is to verify the content of the KIT. The performing partner tries to solve the problem only with the help of the KIT and, if necessary, to make suggestions for improvement that have to be implemented."),(0,n.kt)("h2",{id:"artfacts--deliverables"},"Artfacts & Deliverables"),(0,n.kt)("p",null,"In the table below shows which artefacts must be completed to progress to the next stage . ",(0,n.kt)("a",{parentName:"p",href:"artefacts"},"here")," you will find the more detailed descriptions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Artefact/Stage"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Sandbox \u2192 Incubating"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Incubating \u2192 Graduated"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#vision--mission"},"Vision/Mission")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#business-value"},"Business Value(s)")),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#use-case--domain-explanation"},"Use Case/ Domain explanation"),"\xa0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#standards"},"Standarts")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#api-specifications"},"API-Specification/Protocols")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#logic--schema"},"Logic/Schema")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#documentation-in-the-context-of-development"},"Documentation")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#tutorials"},"Tutorials/Videos")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#semantic-models"},"Semantic Models")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#business-process"},"Buisiness Processes")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#sample-data"},"Sample Data")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#reference-implementation"},"Reference Implementation")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Quick Setup Guide"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713 ","*")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Architecture"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"artefacts/#whitepaper"},"Whitepaper")),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)")))),(0,n.kt)("h3",{id:"legend"},"Legend"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Symbol"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:"center"},"mandatory to progress to the next stage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"(\u2713)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"recommended")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"center"},"if a reference implementation exists")))))}p.isMDXComponent=!0}}]);