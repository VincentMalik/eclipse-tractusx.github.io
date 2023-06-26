"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[92979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Create KIT website"},i=void 0,p={unversionedId:"kit-process/processes/create_KIT_page",id:"kit-process/processes/create_KIT_page",title:"Create KIT website",description:"Project Structure",source:"@site/docs/kit-process/processes/create_KIT_page.md",sourceDirName:"kit-process/processes",slug:"/kit-process/processes/create_KIT_page",permalink:"/docs/kit-process/processes/create_KIT_page",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kit-process/processes/create_KIT_page.md",tags:[],version:"current",frontMatter:{title:"Create KIT website"},sidebar:"docs",previous:{title:"Artefacts",permalink:"/docs/kit-process/artefacts"},next:{title:"Update Documentation",permalink:"/docs/kit-process/processes/update-documentation"}},s={},l=[{value:"Project Structure",id:"project-structure",level:2},{value:"Steps to add a NewKit documentation",id:"steps-to-add-a-newkit-documentation",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"    **********************************************\n    ** DISCLAIMER                               **\n    ** THIS PROCESS IS STILL UNDER DEVELOPMENT  **\n    ** FEEDBACK IS APPRECIATED                  **\n    **********************************************\n")),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"Following our project structure, the collection of our KITs documentation is developed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs/kits")," folder, where each KIT is a subfolder called by its name for organisation purposes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Chain KIT"),", for example, is defined here: ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs/kits/Data Chain Kit"),"."),(0,r.kt)("p",null,"Each folder/KIT's content is structured in at least four pages/subfolders:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adoption View -> ",(0,r.kt)("inlineCode",{parentName:"li"},"page_adoption-view.md")),(0,r.kt)("li",{parentName:"ul"},"Software Operation View -> ",(0,r.kt)("inlineCode",{parentName:"li"},"page_software-operation-view.md")),(0,r.kt)("li",{parentName:"ul"},"Documentation -> ",(0,r.kt)("inlineCode",{parentName:"li"},"page_documentation.md")),(0,r.kt)("li",{parentName:"ul"},"Software Development View/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specification -> ",(0,r.kt)("inlineCode",{parentName:"li"},"page_software-development-view.md")),(0,r.kt)("li",{parentName:"ul"},"OpenAPI definition/"),(0,r.kt)("li",{parentName:"ul"},"Another OpenAPI definition/"),(0,r.kt)("li",{parentName:"ul"},"...")))),(0,r.kt)("h2",{id:"steps-to-add-a-newkit-documentation"},"Steps to add a NewKit documentation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a folder under the ",(0,r.kt)("inlineCode",{parentName:"p"},"./docs/kits")," with the name of the KIT you are developing the documentation of"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-md"},"root\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 NewKIT\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKIT")," folder, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"page_adoption-view.md")," file with the content that suits your use case"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-md"},"root\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 NewKIT\n        \u2514\u2500\u2500 page_adoption-view.md\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKIT")," folder, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"page_software-operation-view.md")," file with the content that suits your use case"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-md"},"root\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 NewKIT\n        \u251c\u2500\u2500 page_adoption-view.md\n        \u2514\u2500\u2500 page_software-operation-view.md\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKIT")," folder, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"page_documentation.md")," file with the content that suits your use case"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-md"},"root\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 NewKIT\n        \u251c\u2500\u2500 page_adoption-view.md\n        \u251c\u2500\u2500 page_software-operation-view.md\n        \u2514\u2500\u2500 page_documentation.md\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"NewKIT")," folder, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Software Development View")," folder that contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"page_software-development-view.md")," file with the content that suits your use case"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-md"},"root\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 NewKIT\n        \u251c\u2500\u2500 page_adoption-view.md\n        \u251c\u2500\u2500 page_software-operation-view.md\n        \u251c\u2500\u2500 page_documentation.md\n        \u2514\u2500\u2500 Software Development View\n            \u2514\u2500\u2500page_software-development-view.md\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenAPI")," based documentation of your KIT, please consult the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/wiki#plugins"},"Plugins section")," to configure your instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Docusaurus-OpenAPI-Docs")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your newly created KIT documentation to the Kits ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar")," page, by incorporating the following declaration in the sidebar object of the ",(0,r.kt)("inlineCode",{parentName:"p"},"sidebar.js")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const sidebars = {\n// other sidebars\nkits: [\n    // copy from here...\n    {\n    type: "category",\n    label: "New KIT name", //change here according your KIT\n    link: {\n        type: "generated-index",\n    },\n    collapsed: true,\n    items: [\n        {\n        type: "autogenerated",\n        dirName: "kits/New KIT folder name given", //change here according your KIT\n        },\n    ],\n    },\n    // ...until here.\n],\n};\n')))))}d.isMDXComponent=!0}}]);