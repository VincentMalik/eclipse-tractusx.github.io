"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[26716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Website Overview",sidebar_position:2},r=void 0,s={unversionedId:"website-guidelines/wiki",id:"website-guidelines/wiki",title:"Website Overview",description:"This documentation website was developed with Docusaurus 2.0 for the simplicity and benefits it offers for maintenance, upgrades, and contributions that can be performed in a simple and intuitive manner.",source:"@site/docs/website-guidelines/wiki.md",sourceDirName:"website-guidelines",slug:"/website-guidelines/wiki",permalink:"/docs/website-guidelines/wiki",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/website-guidelines/wiki.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Website Overview",sidebar_position:2},sidebar:"docs",previous:{title:"Artefacts",permalink:"/docs/kit-process/artefacts"},next:{title:"Creating an open API documentation",permalink:"/docs/website-guidelines/create-open-api-doc"}},l={},p=[{value:"How to add/update documentation",id:"how-to-addupdate-documentation",level:3},{value:"MaterialUI Components",id:"materialui-components",level:3},{value:"Plugins",id:"plugins",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"    *********************************************************\n    ** DISCLAIMER                                          **\n    ** YOU ARE ENTERING THE DANGE ZONE                     **\n    ** IN THIS SECTION YOU ONLY FIND TECHNICAL             ** \n    ** ADVISE REGARDING THE WEBSITE ITSELF                 ** \n    ** IF YOU JUST WANT TO ADD CONTENT YOU ARE WRONG HERE! **\n    *********************************************************\n")),(0,o.kt)("p",null,"This documentation website was developed with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2.0")," for the simplicity and benefits it offers for maintenance, upgrades, and contributions that can be performed in a simple and intuitive manner."),(0,o.kt)("h3",{id:"how-to-addupdate-documentation"},"How to add/update documentation"),(0,o.kt)("p",null,"As an allowed user, you'll encounter 2 possible scenarios to modify the documentation of the project. In the following, you'll find instructions on how to modify the documentation in either scenario:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"addingmodifying-md-files-in-the-docs-docs-kits-and-blog-folder"},"Adding/Modifying ",(0,o.kt)("inlineCode",{parentName:"h4"},".md")," files in the ",(0,o.kt)("inlineCode",{parentName:"h4"},"./docs"),", ",(0,o.kt)("inlineCode",{parentName:"h4"},"./docs-kits")," and ",(0,o.kt)("inlineCode",{parentName:"h4"},"./blog")," folder"))),(0,o.kt)("p",null,"One of the benefits of ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2.0")," is that if you ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/create-doc"},"create a doc")," by adding an ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," &/or ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," file under the mentioned folders (each folder is dedicated to an specific content which will be be explained in detail), a page will automatically be generated according to our theme. For more information about ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/configuration"},"configuration"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/styling-layout"},"styling")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/advanced"},"advanced topics"),", please consult the documentation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip")," If you don't want to display the content of an ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," file as a page, and avoid that its content is generated as a ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebar")," item, (",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/sidebar"},"sidebar"),") you should prefix the name of the file with an underscore key (_). In that way ",(0,o.kt)("em",{parentName:"p"},"Docusaurus")," will ignore this file and will not generate a Docs page for its content."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"_example.md")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"generate-openapi-based-documentation-from-yaml-files"},"Generate openAPI based Documentation from ",(0,o.kt)("inlineCode",{parentName:"h4"},".yaml")," files"))),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/website-guidelines/wiki#plugins"},"Plugins")," section, we describe the plugins involved in the ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml")," files retrieval process that define the endpoints and methods of the various applications documented on our site. We also describe the generation of documents in the form of pages that present the  ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml")," content in a clear and interactive way."),(0,o.kt)("h3",{id:"materialui-components"},"MaterialUI Components"),(0,o.kt)("p",null,"In the development of this project, we have used ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/"},"MaterialUI")," for the creation of the components detailed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"faqs-and-productaccordioncard-components"},"FAQs and ProductAccordionCard Components"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<FAQsComponent />")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<ProductAccordionCard />")," make use of a ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-accordion/#basic-accordion"},"Basic Accordion"),", to toggle the answers to the frequently asked questions that we receive about the use of this application and the list of Products displayed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"community")," page."),(0,o.kt)("p",null,"The components forming the mentioned UI are imported as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  import Accordion from '@mui/material/Accordion';\n  import AccordionSummary from '@mui/material/AccordionSummary';\n  import AccordionDetails from '@mui/material/AccordionDetails';\n  import Typography from '@mui/material/Typography';\n  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"react-slick-carousel"},"React-Slick Carousel"))),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"<NewsTickerComponent />")," is developed with the help of ",(0,o.kt)("inlineCode",{parentName:"p"},'React-slick:"^0.29.0"')," and its ",(0,o.kt)("inlineCode",{parentName:"p"},'Slick-Carousel:"^1.8.1"')),(0,o.kt)("p",null,"For its installation and use, you can follow one of these links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-slick"},"NPM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/akiran/react-slick"},"GittHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-slick.neostack.com/docs/get-started"},"DOCS"))),(0,o.kt)("p",null,"In our project, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewsTicker")," component to display the main titles of news written in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./blog")," folder and displayed in the  ",(0,o.kt)("inlineCode",{parentName:"p"},"HomePageHeader")," component."),(0,o.kt)("h3",{id:"plugins"},"Plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"docusaurus-plugin-remote-content-github-repo"},"Docusaurus-Plugin-Remote-Content ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/rdilweb/docusaurus-plugin-remote-content"},"GitHub Repo")))),(0,o.kt)("p",null,"With this plugin, we are able to retrieve files containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," definitions of the methods and endpoints we are interested in from any site/repository (GitHub or not). Once the file is fetched, a local copy is generated. We can then manipulate the copy and store it as we see fit."),(0,o.kt)("p",null,"Its configuration and use is described ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rdilweb/docusaurus-plugin-remote-content#alright-so-how-do-i-use-this"},"here")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," In our project, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," as our package manager. The documentation of the plugin uses ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),". Make sure you change the ",(0,o.kt)("inlineCode",{parentName:"p"},"command line")," by adapting the declaration, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install docusaurus-plugin-remote-content")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add docusaurus-plugin-remote-content")),(0,o.kt)("p",null,"For example, if we want to retrieve and have a local copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"example.yaml")," located at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://my-page.com/folder1/subfolder1.1/example.yaml")," we should add the next declaration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," object of our local ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  // ...\n  plugins: [\n    [\n      "docusaurus-plugin-remote-content",\n      {\n          // options here\n          name: "my-example", // used by CLI, must be path safe\n          sourceBaseUrl: "https://my-page.com/folder1/subfolder1.1/", // the base url for the markdown (gets prepended to all of the documents when fetching)\n          outDir: "openApi/example", // the base directory to output to.\n          documents: ["example.yaml"], // the file names to download, if other file share the `sourceBaseUrl`, you can add it here without the need of create another instance of the plugin\n      },\n    ],\n    [\n    // ...another instance of the plugin\n    ]\n  ],\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important:")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"sourceBaseUrl")," from where you retrieve data is not a live page, you must provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"raw")," link as a source."),(0,o.kt)("p",null,"For more information regarding the options of this plugin, check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rdilweb/docusaurus-plugin-remote-content#options"},"here")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"docusaurus-openapi-docs-github-repo"},"Docusaurus-OpenApi-Docs ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs"},"GitHub Repo")))),(0,o.kt)("p",null,"Once we have the ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," file with the definitions of the methods, either obtained via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Docusaurus-Plugin-Remote-Content")," or because the file was defined locally in our project, we can generate documentation pages. To do this, we can take advantage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Docusaurus")," features and the Docusaurus-OpenApi-Docs plugin. It generates ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs-kits")," folder, which will be parsed into our predefined UI. Checkout our ",(0,o.kt)("a",{parentName:"p",href:"/docs/website-guidelines/create-open-api-doc"},"guideline page: Creating an open API Documentation")," for more specifics."),(0,o.kt)("p",null,"Its use is quite straight forward and well documented. Please check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs#docusaurus-openapi-doc-generator"},"documentation"),". Here, we highlight some main things to consider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs#configuring-docusaurusconfigjs-plugin-and-theme-usage"},"configuration of docusaurus.config for adding more instances")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs#plugin-configuration-options"},"plugin options to generate docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs#generating-openapi-docs"},"generate docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs#cleaning-api-docs"},"cleaning docs"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," In our project, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," as our package manager. The documentation of the plugin uses ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),". Make sure you change the ",(0,o.kt)("inlineCode",{parentName:"p"},"command line")," by adapting the declaration, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install docusaurus-plugin-remote-content")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add docusaurus-plugin-remote-content")))}d.isMDXComponent=!0}}]);