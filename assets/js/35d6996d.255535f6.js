"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5085],{52991:(t,e,i)=>{i.d(e,{Z:()=>D});var a=i(67294),n=i(86010),s=i(53438),r=i(39960),c=i(13919),o=i(95999);const d="cardContainer_fWXF",l="cardTitle_rnsV",m="cardDescription_PWke";function u(t){let{href:e,children:i}=t;return a.createElement(r.Z,{href:e,className:(0,n.Z)("card padding--lg",d)},i)}function p(t){let{href:e,icon:i,title:s,description:r}=t;return a.createElement(u,{href:e},a.createElement("h2",{className:(0,n.Z)("text--truncate",l),title:s},i," ",s),r&&a.createElement("p",{className:(0,n.Z)("text--truncate",m),title:r},r))}function h(t){let{item:e}=t;const i=(0,s.Wl)(e);return i?a.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const i=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(e.docId??void 0);return a.createElement(p,{href:e.href,icon:i,title:e.label,description:n?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return a.createElement(f,{item:e});case"category":return a.createElement(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function k(t){let{className:e}=t;const i=(0,s.jA)();return a.createElement(D,{items:i.items,className:e})}function D(t){const{items:e,className:i}=t;if(!e)return a.createElement(k,t);const r=(0,s.MN)(e);return a.createElement("section",{className:(0,n.Z)("row",i)},r.map(((t,e)=>a.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},a.createElement(g,{item:t})))))}},95417:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=i(87462),n=(i(67294),i(3905)),s=i(52991);const r={id:"DCK",title:"Data Chain Kits",description:"Data Chain Kit",sidebar_position:1,slug:"/sidebar"},c=void 0,o={unversionedId:"kits/Data Chain Kit/DCK",id:"kits/Data Chain Kit/DCK",title:"Data Chain Kits",description:"Data Chain Kit",source:"@site/docs/kits/Data Chain Kit/dd.mdx",sourceDirName:"kits/Data Chain Kit",slug:"/sidebar",permalink:"/docs/sidebar",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/Data Chain Kit/dd.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"DCK",title:"Data Chain Kits",description:"Data Chain Kit",sidebar_position:1,slug:"/sidebar"},sidebar:"kits",previous:{title:"Update existing site business partners",permalink:"/docs/kits/Business Partner Kit/Software Development View/Pool Api/update-site"},next:{title:"Adoption View",permalink:"/docs/kits/Data Chain Kit/Adoption View"}},d={},l=[],m={toc:l};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Datachain kit banner",src:i(92710).Z,width:"1008",height:"270"})),(0,n.kt)("p",null,"This Kit is for ...."),(0,n.kt)(s.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},92710:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/doc-datachain_header-minified-6df42d0afcb3dc1721d25a33b1feddd2.png"}}]);