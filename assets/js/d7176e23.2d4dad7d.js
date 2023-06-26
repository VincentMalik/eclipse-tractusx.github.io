"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8151],{54056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var i=a(87462),l=(a(67294),a(3905)),s=a(26389),n=a(94891),r=(a(75190),a(47507),a(24310)),o=(a(63303),a(75035),a(85162));const p={id:"initiate-transfer",title:"initiateTransfer",description:"Initiates a data transfer for the given request. The transfer will be performed asynchronously.",sidebar_label:"initiateTransfer",hide_title:!0,hide_table_of_contents:!0,api:{description:"Initiates a data transfer for the given request. The transfer will be performed asynchronously.",operationId:"initiateTransfer",requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{callbackAddress:{type:"string",format:"url",example:null},destinationDataAddress:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}}},id:{type:"string",example:null},processId:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"string",example:null},example:null},sourceDataAddress:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}}},traceContext:{type:"object",additionalProperties:{type:"string",example:null},example:null},trackable:{type:"boolean",example:null}}}}}},responses:{200:{description:"Data transfer initiated"},400:{description:"Failed to validate request"}},tags:["Data Plane control API"],method:"post",path:"/transfer",jsonRequestBodyExample:null,info:{title:"EDC Data Plane API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"initiate Transfer",description:{content:"Initiates a data transfer for the given request. The transfer will be performed asynchronously.",type:"text/plain"},url:{path:["transfer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/edc-data-plane-api",custom_edit_url:null},d=void 0,c={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/initiate-transfer",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/initiate-transfer",title:"initiateTransfer",description:"Initiates a data transfer for the given request. The transfer will be performed asynchronously.",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/initiate-transfer.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/initiate-transfer",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/initiate-transfer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"initiate-transfer",title:"initiateTransfer",description:"Initiates a data transfer for the given request. The transfer will be performed asynchronously.",sidebar_label:"initiateTransfer",hide_title:!0,hide_table_of_contents:!0,api:{description:"Initiates a data transfer for the given request. The transfer will be performed asynchronously.",operationId:"initiateTransfer",requestBody:{content:{"application/json":{schema:{type:"object",example:null,properties:{callbackAddress:{type:"string",format:"url",example:null},destinationDataAddress:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}}},id:{type:"string",example:null},processId:{type:"string",example:null},properties:{type:"object",additionalProperties:{type:"string",example:null},example:null},sourceDataAddress:{type:"object",example:null,properties:{properties:{type:"object",additionalProperties:{type:"string",example:null},example:null}}},traceContext:{type:"object",additionalProperties:{type:"string",example:null},example:null},trackable:{type:"boolean",example:null}}}}}},responses:{200:{description:"Data transfer initiated"},400:{description:"Failed to validate request"}},tags:["Data Plane control API"],method:"post",path:"/transfer",jsonRequestBodyExample:null,info:{title:"EDC Data Plane API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"initiate Transfer",description:{content:"Initiates a data transfer for the given request. The transfer will be performed asynchronously.",type:"text/plain"},url:{path:["transfer"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/edc-data-plane-api",custom_edit_url:null},sidebar:"kits",previous:{title:"get",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/get"},next:{title:"patch",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/data-plane-api/patch"}},m={},u=[{value:"initiateTransfer",id:"initiatetransfer",level:2}],y={toc:u};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"initiatetransfer"},"initiateTransfer"),(0,l.kt)("p",null,"Initiates a data transfer for the given request. The transfer will be performed asynchronously."),(0,l.kt)(n.Z,{mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"callbackAddress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"url",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"destinationDataAddress"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"properties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,l.kt)(r.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"processId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"properties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"sourceDataAddress"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"properties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"traceContext"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string")))))),(0,l.kt)(r.Z,{collapsible:!1,name:"trackable",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Data transfer initiated")),(0,l.kt)("div",null)),(0,l.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Failed to validate request")),(0,l.kt)("div",null)))))}k.isMDXComponent=!0}}]);