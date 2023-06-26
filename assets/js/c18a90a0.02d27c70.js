"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[93061],{58217:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>I,frontMatter:()=>c,metadata:()=>y,toc:()=>E});var a=i(87462),s=(i(67294),i(3905)),r=i(26389),n=i(94891),o=i(75190),l=i(47507),d=i(24310),m=i(63303),p=(i(75035),i(85162));const c={id:"get-site-by-external-id",title:"Get site by external identifier",description:"Get site by external identifier.",sidebar_label:"Get site by external identifier",hide_title:!0,hide_table_of_contents:!0,api:{tags:["site-controller"],description:"Get site by external identifier.",operationId:"getSiteByExternalId",parameters:[{name:"externalId",in:"path",description:"External identifier",required:!0,schema:{type:"string"}}],responses:{200:{description:"Found site with external identifier",content:{"*/*":{schema:{type:"object",properties:{name:{type:"string"},mainAddress:{type:"object",properties:{version:{type:"object",properties:{characterSet:{type:"string",enum:["ARABIC","CHINESE","CHINESE_TRADITIONAL","CYRILLIC","GREEK","HANGUL_KOREAN","HEBREW","HIRAGANA","KANJI","KATAKANA","LATIN","THAI","WESTERN_LATIN_STANDARD","UNDEFINED"]},language:{type:"string",enum:["undefined","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]}},description:"Localization record for an address"},careOf:{type:"string"},contexts:{type:"array",items:{type:"string"}},country:{type:"string",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},administrativeAreas:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},fipsCode:{type:"string"},type:{type:"string",enum:["COUNTY","REGION","OTHER"]}},description:"Areas such as country regions or counties"}},postCodes:{type:"array",items:{type:"object",properties:{value:{type:"string"},type:{type:"string",enum:["CEDEX","LARGE_MAIL_USER","OTHER","POST_BOX","REGULAR"]}},description:"Postcode record for an address"}},localities:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},type:{type:"string",enum:["BLOCK","CITY","DISTRICT","OTHER","POST_OFFICE_CITY","QUARTER"]}},description:"Locality record for an address such as city, block or district"}},thoroughfares:{type:"array",items:{type:"object",properties:{value:{type:"string"},name:{type:"string"},shortName:{type:"string"},number:{type:"string"},direction:{type:"string"},type:{type:"string",enum:["INDUSTRIAL_ZONE","OTHER","RIVER","SQUARE","STREET"]}},description:"Thoroughfare record for an address such as street, square or industrial zone"}},premises:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["BUILDING","OTHER","LEVEL","HARBOUR","ROOM","SUITE","UNIT","WAREHOUSE"]}},description:"Premise record for an address such as building, room or floor"}},postalDeliveryPoints:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["INTERURBAN_DELIVERY_POINT","MAIL_STATION","MAILBOX","OTHER","POST_OFFICE_BOX"]}},description:"Postal delivery point record for an address"}},geographicCoordinates:{type:"object",properties:{longitude:{type:"number",format:"float"},latitude:{type:"number",format:"float"},altitude:{type:"number",format:"float"}},description:"Geo coordinates record for an address"},types:{type:"array",items:{type:"string",enum:["BRANCH_OFFICE","CARE_OF","HEADQUARTER","LEGAL_ALTERNATIVE","PO_BOX","REGISTERED","REGISTERED_AGENT_MAIL","REGISTERED_AGENT_PHYSICAL","VAT_REGISTERED","UNSPECIFIC"]}}},description:"Localized address record for a business partner"},externalId:{type:"string"},legalEntityExternalId:{type:"string"},bpn:{type:"string"},processStartedAt:{type:"string",format:"date-time"}},description:"Site with legal entity reference"}}}},404:{description:"No site found under specified external identifier"}},method:"get",path:"/api/catena/input/sites/{externalId}",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0"},postman:{name:"Get site by external identifier",description:{content:"Get site by external identifier.",type:"text/plain"},url:{path:["api","catena","input","sites",":externalId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) External identifier",type:"text/plain"},type:"any",value:"",key:"externalId"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},u=void 0,y={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/get-site-by-external-id",id:"version-3.1.0/kits/Business Partner Kit/Software Development View/Gate Api/get-site-by-external-id",title:"Get site by external identifier",description:"Get site by external identifier.",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/Business Partner Kit/Software Development View/Gate Api/get-site-by-external-id.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/get-site-by-external-id",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/get-site-by-external-id",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"get-site-by-external-id",title:"Get site by external identifier",description:"Get site by external identifier.",sidebar_label:"Get site by external identifier",hide_title:!0,hide_table_of_contents:!0,api:{tags:["site-controller"],description:"Get site by external identifier.",operationId:"getSiteByExternalId",parameters:[{name:"externalId",in:"path",description:"External identifier",required:!0,schema:{type:"string"}}],responses:{200:{description:"Found site with external identifier",content:{"*/*":{schema:{type:"object",properties:{name:{type:"string"},mainAddress:{type:"object",properties:{version:{type:"object",properties:{characterSet:{type:"string",enum:["ARABIC","CHINESE","CHINESE_TRADITIONAL","CYRILLIC","GREEK","HANGUL_KOREAN","HEBREW","HIRAGANA","KANJI","KATAKANA","LATIN","THAI","WESTERN_LATIN_STANDARD","UNDEFINED"]},language:{type:"string",enum:["undefined","aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]}},description:"Localization record for an address"},careOf:{type:"string"},contexts:{type:"array",items:{type:"string"}},country:{type:"string",enum:["UNDEFINED","AC","AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BU","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CP","CR","CS","CU","CV","CW","CX","CY","CZ","DE","DG","DJ","DK","DM","DO","DZ","EA","EC","EE","EG","EH","ER","ES","ET","EU","EZ","FI","FJ","FK","FM","FO","FR","FX","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","IC","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NT","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SU","SV","SX","SY","SZ","TA","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TP","TR","TT","TV","TW","TZ","UA","UG","UK","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XI","XU","XK","YE","YT","YU","ZA","ZM","ZR","ZW"]},administrativeAreas:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},fipsCode:{type:"string"},type:{type:"string",enum:["COUNTY","REGION","OTHER"]}},description:"Areas such as country regions or counties"}},postCodes:{type:"array",items:{type:"object",properties:{value:{type:"string"},type:{type:"string",enum:["CEDEX","LARGE_MAIL_USER","OTHER","POST_BOX","REGULAR"]}},description:"Postcode record for an address"}},localities:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},type:{type:"string",enum:["BLOCK","CITY","DISTRICT","OTHER","POST_OFFICE_CITY","QUARTER"]}},description:"Locality record for an address such as city, block or district"}},thoroughfares:{type:"array",items:{type:"object",properties:{value:{type:"string"},name:{type:"string"},shortName:{type:"string"},number:{type:"string"},direction:{type:"string"},type:{type:"string",enum:["INDUSTRIAL_ZONE","OTHER","RIVER","SQUARE","STREET"]}},description:"Thoroughfare record for an address such as street, square or industrial zone"}},premises:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["BUILDING","OTHER","LEVEL","HARBOUR","ROOM","SUITE","UNIT","WAREHOUSE"]}},description:"Premise record for an address such as building, room or floor"}},postalDeliveryPoints:{type:"array",items:{type:"object",properties:{value:{type:"string"},shortName:{type:"string"},number:{type:"string"},type:{type:"string",enum:["INTERURBAN_DELIVERY_POINT","MAIL_STATION","MAILBOX","OTHER","POST_OFFICE_BOX"]}},description:"Postal delivery point record for an address"}},geographicCoordinates:{type:"object",properties:{longitude:{type:"number",format:"float"},latitude:{type:"number",format:"float"},altitude:{type:"number",format:"float"}},description:"Geo coordinates record for an address"},types:{type:"array",items:{type:"string",enum:["BRANCH_OFFICE","CARE_OF","HEADQUARTER","LEGAL_ALTERNATIVE","PO_BOX","REGISTERED","REGISTERED_AGENT_MAIL","REGISTERED_AGENT_PHYSICAL","VAT_REGISTERED","UNSPECIFIC"]}}},description:"Localized address record for a business partner"},externalId:{type:"string"},legalEntityExternalId:{type:"string"},bpn:{type:"string"},processStartedAt:{type:"string",format:"date-time"}},description:"Site with legal entity reference"}}}},404:{description:"No site found under specified external identifier"}},method:"get",path:"/api/catena/input/sites/{externalId}",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0"},postman:{name:"Get site by external identifier",description:{content:"Get site by external identifier.",type:"text/plain"},url:{path:["api","catena","input","sites",":externalId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) External identifier",type:"text/plain"},type:"any",value:"",key:"externalId"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"Validate a site",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/validate-site"},next:{title:"legal-entity-controller",permalink:"/docs-kits/category/kits/Business Partner Kit/Software Development View/Gate Api/legal-entity-controller"}},g={},E=[{value:"Get site by external identifier",id:"get-site-by-external-identifier",level:2}],T={toc:E};function I(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},T,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-site-by-external-identifier"},"Get site by external identifier"),(0,s.kt)("p",null,"Get site by external identifier."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"externalId",in:"path",description:"External identifier",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Found site with external identifier")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"mainAddress"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Localized address record for a business partner")),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"version"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Localization record for an address")),(0,s.kt)(d.Z,{collapsible:!1,name:"characterSet",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`ARABIC`, `CHINESE`, `CHINESE_TRADITIONAL`, `CYRILLIC`, `GREEK`, `HANGUL_KOREAN`, `HEBREW`, `HIRAGANA`, `KANJI`, `KATAKANA`, `LATIN`, `THAI`, `WESTERN_LATIN_STANDARD`, `UNDEFINED`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"language",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`undefined`, `aa`, `ab`, `ae`, `af`, `ak`, `am`, `an`, `ar`, `as`, `av`, `ay`, `az`, `ba`, `be`, `bg`, `bh`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `ca`, `ce`, `ch`, `co`, `cr`, `cs`, `cu`, `cv`, `cy`, `da`, `de`, `dv`, `dz`, `ee`, `el`, `en`, `eo`, `es`, `et`, `eu`, `fa`, `ff`, `fi`, `fj`, `fo`, `fr`, `fy`, `ga`, `gd`, `gl`, `gn`, `gu`, `gv`, `ha`, `he`, `hi`, `ho`, `hr`, `ht`, `hu`, `hy`, `hz`, `ia`, `id`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `it`, `iu`, `ja`, `jv`, `ka`, `kg`, `ki`, `kj`, `kk`, `kl`, `km`, `kn`, `ko`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lu`, `lv`, `mg`, `mh`, `mi`, `mk`, `ml`, `mn`, `mr`, `ms`, `mt`, `my`, `na`, `nb`, `nd`, `ne`, `ng`, `nl`, `nn`, `no`, `nr`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pi`, `pl`, `ps`, `pt`, `qu`, `rm`, `rn`, `ro`, `ru`, `rw`, `sa`, `sc`, `sd`, `se`, `sg`, `si`, `sk`, `sl`, `sm`, `sn`, `so`, `sq`, `sr`, `ss`, `st`, `su`, `sv`, `sw`, `ta`, `te`, `tg`, `th`, `ti`, `tk`, `tl`, `tn`, `to`, `tr`, `ts`, `tt`, `tw`, `ty`, `ug`, `uk`, `ur`, `uz`, `ve`, `vi`, `vo`, `wa`, `wo`, `xh`, `yi`, `yo`, `za`, `zh`, `zu`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"careOf",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"contexts",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"country",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`UNDEFINED`, `AC`, `AD`, `AE`, `AF`, `AG`, `AI`, `AL`, `AM`, `AN`, `AO`, `AQ`, `AR`, `AS`, `AT`, `AU`, `AW`, `AX`, `AZ`, `BA`, `BB`, `BD`, `BE`, `BF`, `BG`, `BH`, `BI`, `BJ`, `BL`, `BM`, `BN`, `BO`, `BQ`, `BR`, `BS`, `BT`, `BU`, `BV`, `BW`, `BY`, `BZ`, `CA`, `CC`, `CD`, `CF`, `CG`, `CH`, `CI`, `CK`, `CL`, `CM`, `CN`, `CO`, `CP`, `CR`, `CS`, `CU`, `CV`, `CW`, `CX`, `CY`, `CZ`, `DE`, `DG`, `DJ`, `DK`, `DM`, `DO`, `DZ`, `EA`, `EC`, `EE`, `EG`, `EH`, `ER`, `ES`, `ET`, `EU`, `EZ`, `FI`, `FJ`, `FK`, `FM`, `FO`, `FR`, `FX`, `GA`, `GB`, `GD`, `GE`, `GF`, `GG`, `GH`, `GI`, `GL`, `GM`, `GN`, `GP`, `GQ`, `GR`, `GS`, `GT`, `GU`, `GW`, `GY`, `HK`, `HM`, `HN`, `HR`, `HT`, `HU`, `IC`, `ID`, `IE`, `IL`, `IM`, `IN`, `IO`, `IQ`, `IR`, `IS`, `IT`, `JE`, `JM`, `JO`, `JP`, `KE`, `KG`, `KH`, `KI`, `KM`, `KN`, `KP`, `KR`, `KW`, `KY`, `KZ`, `LA`, `LB`, `LC`, `LI`, `LK`, `LR`, `LS`, `LT`, `LU`, `LV`, `LY`, `MA`, `MC`, `MD`, `ME`, `MF`, `MG`, `MH`, `MK`, `ML`, `MM`, `MN`, `MO`, `MP`, `MQ`, `MR`, `MS`, `MT`, `MU`, `MV`, `MW`, `MX`, `MY`, `MZ`, `NA`, `NC`, `NE`, `NF`, `NG`, `NI`, `NL`, `NO`, `NP`, `NR`, `NT`, `NU`, `NZ`, `OM`, `PA`, `PE`, `PF`, `PG`, `PH`, `PK`, `PL`, `PM`, `PN`, `PR`, `PS`, `PT`, `PW`, `PY`, `QA`, `RE`, `RO`, `RS`, `RU`, `RW`, `SA`, `SB`, `SC`, `SD`, `SE`, `SF`, `SG`, `SH`, `SI`, `SJ`, `SK`, `SL`, `SM`, `SN`, `SO`, `SR`, `SS`, `ST`, `SU`, `SV`, `SX`, `SY`, `SZ`, `TA`, `TC`, `TD`, `TF`, `TG`, `TH`, `TJ`, `TK`, `TL`, `TM`, `TN`, `TO`, `TP`, `TR`, `TT`, `TV`, `TW`, `TZ`, `UA`, `UG`, `UK`, `UM`, `US`, `UY`, `UZ`, `VA`, `VC`, `VE`, `VG`, `VI`, `VN`, `VU`, `WF`, `WS`, `XI`, `XU`, `XK`, `YE`, `YT`, `YU`, `ZA`, `ZM`, `ZR`, `ZW`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"administrativeAreas"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"fipsCode",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`COUNTY`, `REGION`, `OTHER`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"postCodes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`CEDEX`, `LARGE_MAIL_USER`, `OTHER`, `POST_BOX`, `REGULAR`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"localities"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`BLOCK`, `CITY`, `DISTRICT`, `OTHER`, `POST_OFFICE_CITY`, `QUARTER`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"thoroughfares"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"direction",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`INDUSTRIAL_ZONE`, `OTHER`, `RIVER`, `SQUARE`, `STREET`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"premises"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`BUILDING`, `OTHER`, `LEVEL`, `HARBOUR`, `ROOM`, `SUITE`, `UNIT`, `WAREHOUSE`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"postalDeliveryPoints"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"shortName",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"number",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`INTERURBAN_DELIVERY_POINT`, `MAIL_STATION`, `MAILBOX`, `OTHER`, `POST_OFFICE_BOX`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"geographicCoordinates"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Geo coordinates record for an address")),(0,s.kt)(d.Z,{collapsible:!1,name:"longitude",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"latitude",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"altitude",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"types",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:"**Possible values:** [`BRANCH_OFFICE`, `CARE_OF`, `HEADQUARTER`, `LEGAL_ALTERNATIVE`, `PO_BOX`, `REGISTERED`, `REGISTERED_AGENT_MAIL`, `REGISTERED_AGENT_PHYSICAL`, `VAT_REGISTERED`, `UNSPECIFIC`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"externalId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"legalEntityExternalId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"processStartedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "name": "string",\n  "mainAddress": {\n    "version": {\n      "characterSet": "ARABIC",\n      "language": "undefined"\n    },\n    "careOf": "string",\n    "contexts": [\n      "string"\n    ],\n    "country": "UNDEFINED",\n    "administrativeAreas": [\n      {\n        "value": "string",\n        "shortName": "string",\n        "fipsCode": "string",\n        "type": "COUNTY"\n      }\n    ],\n    "postCodes": [\n      {\n        "value": "string",\n        "type": "CEDEX"\n      }\n    ],\n    "localities": [\n      {\n        "value": "string",\n        "shortName": "string",\n        "type": "BLOCK"\n      }\n    ],\n    "thoroughfares": [\n      {\n        "value": "string",\n        "name": "string",\n        "shortName": "string",\n        "number": "string",\n        "direction": "string",\n        "type": "INDUSTRIAL_ZONE"\n      }\n    ],\n    "premises": [\n      {\n        "value": "string",\n        "shortName": "string",\n        "number": "string",\n        "type": "BUILDING"\n      }\n    ],\n    "postalDeliveryPoints": [\n      {\n        "value": "string",\n        "shortName": "string",\n        "number": "string",\n        "type": "INTERURBAN_DELIVERY_POINT"\n      }\n    ],\n    "geographicCoordinates": {\n      "longitude": 0,\n      "latitude": 0,\n      "altitude": 0\n    },\n    "types": [\n      "BRANCH_OFFICE"\n    ]\n  },\n  "externalId": "string",\n  "legalEntityExternalId": "string",\n  "bpn": "string",\n  "processStartedAt": "2023-05-31"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No site found under specified external identifier")),(0,s.kt)("div",null)))))}I.isMDXComponent=!0}}]);