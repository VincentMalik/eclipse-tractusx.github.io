"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[92035],{57180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var i=a(87462),n=(a(67294),a(3905)),s=a(26389),o=a(94891),l=a(75190),c=a(47507),p=a(24310),r=a(63303),d=(a(75035),a(85162));const m={id:"decline-negotiation",title:"declineNegotiation",description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"declineNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"declineNegotiation",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{description:"Request to decline the Contract negotiation was successfully received",links:{"poll-state":{operationId:"getNegotiationState"}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"A contract negotiation with the given ID does not exist"}},tags:["Contract Negotiation"],method:"post",path:"/contractnegotiations/{id}/decline",info:{title:"EDC Contract Negotiation API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"decline Negotiation",description:{content:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["contractnegotiations",":id","decline"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/edc-contract-negotiation-api",custom_edit_url:null},u=void 0,g={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/decline-negotiation",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/decline-negotiation",title:"declineNegotiation",description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/decline-negotiation.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/decline-negotiation",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/decline-negotiation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"decline-negotiation",title:"declineNegotiation",description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",sidebar_label:"declineNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",operationId:"declineNegotiation",parameters:[{in:"path",name:"id",required:!0,schema:{type:"string",example:null}}],responses:{200:{description:"Request to decline the Contract negotiation was successfully received",links:{"poll-state":{operationId:"getNegotiationState"}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed, e.g. id was null"},404:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"A contract negotiation with the given ID does not exist"}},tags:["Contract Negotiation"],method:"post",path:"/contractnegotiations/{id}/decline",info:{title:"EDC Contract Negotiation API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"decline Negotiation",description:{content:"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state.",type:"text/plain"},url:{path:["contractnegotiations",":id","decline"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/edc-contract-negotiation-api",custom_edit_url:null},sidebar:"kits",previous:{title:"cancelNegotiation",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/cancel-negotiation"},next:{title:"getAgreementForNegotiation",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-negotiation-api/get-agreement-for-negotiation"}},h={},y=[{value:"declineNegotiation",id:"declinenegotiation",level:2}],v={toc:y};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"declinenegotiation"},"declineNegotiation"),(0,n.kt)("p",null,"Requests cancelling the contract negotiation. Due to the asynchronous nature of contract negotiations, a successful response only indicates that the request was successfully received. Clients must poll the /{id}/state endpoint to track the state."),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request to decline the Contract negotiation was successfully received")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request was malformed, e.g. id was null")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(r.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A contract negotiation with the given ID does not exist")),(0,n.kt)("div",null,(0,n.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(r.Z,{mdxType:"SchemaTabs"},(0,n.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);