"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),v=o,f=u["".concat(s,".").concat(v)]||u[v]||d[v]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=v;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},45371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},c="Development View",a={unversionedId:"kits/tractusx-edc/docs/kit/development-view/page00_development_view",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/page00_development_view",title:"Development View",description:"Connector kit banner",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/page00_development_view.md",sourceDirName:"kits/tractusx-edc/docs/kit/development-view",slug:"/kits/tractusx-edc/docs/kit/development-view/page00_development_view",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/page00_development_view",draft:!1,tags:[],version:"3.1.0",frontMatter:{},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/adoption-view/Adoption View"},next:{title:"Tractus-X EDC",permalink:"/docs-kits/kits/tractusx-edc/docs/"}},s={},p=[{value:"Connector Kit",id:"connector-kit",level:2},{value:"Project Overview",id:"project-overview",level:2},{value:"The EDC",id:"the-edc",level:2}],l={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-view"},"Development View"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connector kit banner",src:n(63080).Z,width:"286",height:"244"})),(0,o.kt)("h2",{id:"connector-kit"},"Connector Kit"),(0,o.kt)("h2",{id:"project-overview"},"Project Overview"),(0,o.kt)("p",null,"TractusX is an initiative of companies under the umbrella of the Eclipse Foundation.\nIt is a pilot for the larger initiative of CatenaX.\nA broader overview of the project can be found on the initiative's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"Github page"),"\nor the homepage of the ",(0,o.kt)("a",{parentName:"p",href:"https://projects.eclipse.org/projects/automotive.tractusx"},"Eclipse Foundation"),"."),(0,o.kt)("h2",{id:"the-edc"},"The EDC"),(0,o.kt)("p",null,"The Eclipse Dataspace Connector is one of the core components facilitating TractusX."),(0,o.kt)("admonition",{title:"TractusX EDC or Core EDC?",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This documentation is for TractusX EDC.\nIt includes the Core EDC with all of its functionality.\nHowever, this core is supplemented by extensions that allow for the use of additional backends and connection types.\nFurthermore, the provided Helm charts, build configuration and tests allow for a smoother deployment.")),(0,o.kt)("p",null,"You can find the repository for the TractusX EDC ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"here"),"."))}u.isMDXComponent=!0},63080:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ConnectorKitIcon-44f7fb56f8da1b27337f8c23f28067d2.png"}}]);