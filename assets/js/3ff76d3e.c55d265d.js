"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"TRG 5.01 - Helm Chart requirements"},l=void 0,o={unversionedId:"release/trg-5/trg-5-01",id:"release/trg-5/trg-5-01",title:"TRG 5.01 - Helm Chart requirements",description:"| Status | Created     | Post-History    |",source:"@site/docs/release/trg-5/trg-5-01.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-01",permalink:"/docs/release/trg-5/trg-5-01",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-01.md",tags:[],version:"current",frontMatter:{title:"TRG 5.01 - Helm Chart requirements"},sidebar:"developer",previous:{title:"TRG 4.05 - Container registries",permalink:"/docs/release/trg-4/trg-4-5"},next:{title:"TRG 5.02 - Chart structure",permalink:"/docs/release/trg-5/trg-5-02"}},s={},p=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Released Helm Charts",id:"released-helm-charts",level:3},{value:"Versioning",id:"versioning",level:3},{value:"The <code>values.yaml</code> File",id:"the-valuesyaml-file",level:3},{value:"Dependencies",id:"dependencies",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"10-Nov-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"Eclipse Tractus-X consists of many independent and dependent components and products. While previously software was installed through installers like ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.exe")," or linux packages, in the cloud native world with kubernetes, the alignment options on how to setup is limited."),(0,a.kt)("p",null,"One versatile and well known industry standard are ",(0,a.kt)("strong",{parentName:"p"},"helm charts"),"."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"All Eclipse Tractus-X components ",(0,a.kt)("strong",{parentName:"p"},"must")," be installable via Helm and meet following requirements. The product's Helm\nchart ",(0,a.kt)("strong",{parentName:"p"},"has to meet")," all of these criteria!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Helm chart ",(0,a.kt)("strong",{parentName:"li"},"must be released"),"."),(0,a.kt)("li",{parentName:"ul"},"Appropriate versioning for ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"appVersion")," has to be used in ",(0,a.kt)("inlineCode",{parentName:"li"},"Chart.yaml")),(0,a.kt)("li",{parentName:"ul"},"The released Helm chart ",(0,a.kt)("strong",{parentName:"li"},"must not")," contain any environment specific ",(0,a.kt)("inlineCode",{parentName:"li"},"values-xyz.yaml")," files"),(0,a.kt)("li",{parentName:"ul"},"Helm chart ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," file ",(0,a.kt)("strong",{parentName:"li"},"must")," contain proper default values/placeholders",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No hostname provided for ingress"),(0,a.kt)("li",{parentName:"ul"},"Ingress is disabled"),(0,a.kt)("li",{parentName:"ul"},"No references to any secret engine service (e.g.: Hashicorp Vault)"),(0,a.kt)("li",{parentName:"ul"},"Dependencies should be prefixed with the ",(0,a.kt)("inlineCode",{parentName:"li"},"nameOverride")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"fullnameOverride")," properties"),(0,a.kt)("li",{parentName:"ul"},"Image tag is set to the ",(0,a.kt)("strong",{parentName:"li"},"Chart.yaml")," ",(0,a.kt)("inlineCode",{parentName:"li"},"appVersion")," property"))),(0,a.kt)("li",{parentName:"ul"},"Helm chart ",(0,a.kt)("strong",{parentName:"li"},"must be deployable to any environment without overwriting default values")," with a simple ",(0,a.kt)("inlineCode",{parentName:"li"},"helm install"),"\ncommand"),(0,a.kt)("li",{parentName:"ul"},"If there is an ",(0,a.kt)("strong",{parentName:"li"},"Ingress")," resource present, it can be turned off, and it is disabled by default"),(0,a.kt)("li",{parentName:"ul"},"Helm dependencies have to be declared in ",(0,a.kt)("inlineCode",{parentName:"li"},"Chart.yaml")," file")),(0,a.kt)("h3",{id:"released-helm-charts"},"Released Helm Charts"),(0,a.kt)("p",null,"Eclipse Tractus-X components can only be used and bundled with other components of Tractus-X if there is a version of the\ncomponent with reliable content. This can only be achieved by creating a release of your Helm chart."),(0,a.kt)("p",null,"We recommend to use GitHub ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/helm/chart-releaser-action"},"Chart Releaser Action"),"."),(0,a.kt)("h3",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"Versioning is essential when it comes to releasing Helm charts. In an ideal world your chart version (defined\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),") matches the application version (defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"appVersion")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),") which\nthe Helm chart will deploy. This makes it for users easier to get an idea what will be installed in which version.\nPlease refer also to ",(0,a.kt)("a",{parentName:"p",href:"trg-5-3.md"},"TRG 5.03 - Version strategy"),"."),(0,a.kt)("p",null,"To achieve a proper versioning of your Helm chart keep in mind, that it ",(0,a.kt)("strong",{parentName:"p"},"shall not")," contain version information that could\nchange outside the Helm chart, e.g. container image tags (-> don't use container image tag ",(0,a.kt)("em",{parentName:"p"},"latest"),")."),(0,a.kt)("h3",{id:"the-valuesyaml-file"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"values.yaml")," File"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file is essential for Helm charts. The file ",(0,a.kt)("strong",{parentName:"p"},"must")," contain all values the chart is expecting and\nthere ",(0,a.kt)("strong",{parentName:"p"},"must")," be no other values files except of ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file. Released Helm charts ",(0,a.kt)("strong",{parentName:"p"},"must")," contain\nonly ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"If a Helm chart has dependencies to other Helm charts, e.g. PostgreSQL, these dependencies ",(0,a.kt)("strong",{parentName:"p"},"must")," be specified in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," file. Do not use outdated ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.yaml"),"."))}c.isMDXComponent=!0}}]);