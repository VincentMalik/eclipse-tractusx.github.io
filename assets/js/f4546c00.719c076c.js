"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7308],{82958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>S});var s=a(87462),r=(a(67294),a(3905)),i=a(26389),o=a(94891),n=(a(75190),a(47507)),d=a(24310),m=a(63303),p=(a(75035),a(85162));const l={id:"import-business-partners",title:"Import new business partner records from SaaS",description:"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import.",sidebar_label:"Import new business partner records from SaaS",hide_title:!0,hide_table_of_contents:!0,api:{tags:["saas-controller"],description:"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import.",operationId:"importBusinessPartners",responses:{200:{description:"Import successfully started",content:{"*/*":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","SAAS_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},409:{description:"Import already running",content:{"*/*":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","SAAS_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},500:{description:"Import couldn't start to unexpected error"}},method:"post",path:"/api/saas/business-partner/sync",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Import new business partner records from SaaS",description:{content:"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import.",type:"text/plain"},url:{path:["api","saas","business-partner","sync"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},c=void 0,u={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/import-business-partners",id:"kits/Business Partner Kit/Software Development View/Pool Api/import-business-partners",title:"Import new business partner records from SaaS",description:"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import.",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/import-business-partners.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/import-business-partners",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/import-business-partners",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"import-business-partners",title:"Import new business partner records from SaaS",description:"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import.",sidebar_label:"Import new business partner records from SaaS",hide_title:!0,hide_table_of_contents:!0,api:{tags:["saas-controller"],description:"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import.",operationId:"importBusinessPartners",responses:{200:{description:"Import successfully started",content:{"*/*":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","SAAS_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},409:{description:"Import already running",content:{"*/*":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","SAAS_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},500:{description:"Import couldn't start to unexpected error"}},method:"post",path:"/api/saas/business-partner/sync",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"4.0.0"},postman:{name:"Import new business partner records from SaaS",description:{content:"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import.",type:"text/plain"},url:{path:["api","saas","business-partner","sync"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Fetch information about the SaaS synchronization",permalink:"/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/get-sync-status"},next:{title:"open-search-controller",permalink:"/docs-kits/next/category/kits/Business Partner Kit/Software Development View/Pool Api/open-search-controller"}},h={},S=[{value:"Import new business partner records from SaaS",id:"import-new-business-partner-records-from-saas",level:2}],f={toc:S};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"import-new-business-partner-records-from-saas"},"Import new business partner records from SaaS"),(0,r.kt)("p",null,"Triggers an asynchronous import of new business partner records from SaaS. A SaaS record counts as new when it does not have a BPN and the BPDM service does not already have a record with the same SaaS ID. This import only regards records with a modifiedAfter timestamp since the last import."),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Import successfully started")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`OPENSEARCH`, `SAAS_IMPORT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_SYNCED`, `RUNNING`, `SUCCESS`, `ERROR`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"count",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"progress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorDetails",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"startedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"finishedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "type": "OPENSEARCH",\n  "status": "NOT_SYNCED",\n  "count": 0,\n  "progress": 0,\n  "errorDetails": "string",\n  "startedAt": "2023-05-31",\n  "finishedAt": "2023-05-31"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Import already running")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`OPENSEARCH`, `SAAS_IMPORT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_SYNCED`, `RUNNING`, `SUCCESS`, `ERROR`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"count",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"progress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errorDetails",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"startedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"finishedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "type": "OPENSEARCH",\n  "status": "NOT_SYNCED",\n  "count": 0,\n  "progress": 0,\n  "errorDetails": "string",\n  "startedAt": "2023-05-31",\n  "finishedAt": "2023-05-31"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Import couldn't start to unexpected error")),(0,r.kt)("div",null)))))}v.isMDXComponent=!0}}]);