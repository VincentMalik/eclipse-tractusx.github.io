"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[64195],{59692:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(39960);const s={kits_gallery:"kits_gallery_PBz0",container:"container_VBxV",title_container:"title_container_GoEm",gallery_container:"gallery_container_KZr1",gallery_item:"gallery_item_Cgm7",item_img:"item_img_RiWv"};function r(e){let{itemsArray:t,title:a,description:r}=e;return n.createElement("section",{className:s.kits_gallery},n.createElement("div",{className:s.container},n.createElement("div",{className:s.title_container},n.createElement("h2",{className:"title-h2"},a),n.createElement("p",{className:"subtitle-h3"},r)),n.createElement("div",{className:s.gallery_container},t.map(((e,t)=>n.createElement("div",{key:t,className:s.gallery_item},n.createElement(i.Z,{to:e.pageRoute,className:s.gallery_link},n.createElement("img",{src:e.img,className:s.item_img}))))))))}},13479:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var n=a(67294),i=a(52263),s=a(67418),r=a(39960),c=a(87462),l=a(46066);const o=[{date:"10.02.2023",title:"Eclipse Tractus-X Developer Portal is LIVE!",blogLink:"/blog/portal-is-live"},{date:"26.05.2023",title:"Tractus-X 3.1 is available now",blogLink:"/blog/new-release-3-1-0"}],m={news_ticker:"news_ticker_EymU",container:"container_XTRf",button_container:"button_container_ZrKt",button:"button_TBEJ",carousel_container:"carousel_container_S1kG",slider_item:"slider_item_Ey4k",date:"date__dYN",introduction:"introduction_g0nv",arrow:"arrow_EjwB",arrow_container:"arrow_container_DeUQ"};function d(){const e=e=>{let{date:t,title:a,blogLink:i}=e;return n.createElement(r.Z,{className:m.slider_item,to:i},n.createElement("div",{className:m.date},t),n.createElement("div",{className:m.introduction},n.createElement("strong",null,a)),n.createElement("div",{className:m.arrow_container},n.createElement("div",{className:m.arrow},"->")))};return n.createElement("section",{className:m.news_ticker},n.createElement("div",{className:m.container},n.createElement("div",{className:m.button_container},n.createElement(r.Z,{className:m.button,to:"/blog"},"News")),n.createElement("div",{className:m.carousel_container},n.createElement(l.Z,(0,c.Z)({},{dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,speed:3e3,autoplaySpeed:6e3},{className:m.slider}),o.map(((t,a)=>n.createElement(e,(0,c.Z)({key:a},t))))))))}const u="heroBanner_IPoZ",p="container_Fwk4",g="title__Rvb",_="subtitle_qDyw",f="subtitle_box_n37J",E="btn_container_tPJk";function b(){return n.createElement("header",{className:u},n.createElement("div",{className:p},n.createElement("h1",{className:g},"Welcome to ",n.createElement("br",null),"Eclipse Tractus-X"),n.createElement("div",{className:f},n.createElement("p",{className:_},"We support service and app provider in developing applications for the Catena-X ecosystem. Find documentation, APIs, SDKs and more.")),n.createElement("div",{className:E},n.createElement(r.Z,{className:"button",to:"/developer"},"Our Dev Kits"))),n.createElement(d,null))}const h=a.p+"assets/images/business_kit-minified-759f83cfbc074c5502cf95e90aa7bfca.png",v=a.p+"assets/images/connector_kit-minified-f34970a01e5df2f6843677b075f22842.png",N=a.p+"assets/images/datachain_kit-minified-554dd6b3dc7f7f8d29a80c2f0cfa82b1.png";a.p;const k=a.p+"assets/images/about-us-card-minified-4f4ad7e73118b6fa922a2ca5e8cd5d32.png",w="about_us_sIX3",y="container_tT5G",T="img_container_BDGj",Z="img_ULpw",x="information_container_AUSI";function I(){return n.createElement("section",{className:w},n.createElement("div",{className:y},n.createElement("div",{className:T},n.createElement("img",{className:Z,src:k})),n.createElement("div",{className:x},n.createElement("h2",{className:"title-h2"},"About Eclipse Tractus-X"),n.createElement("p",{className:"subtitle-h3"},"Background about Eclipse Tractus-X, license and legal information."),n.createElement("div",null,n.createElement(r.Z,{className:"button",to:"/aboutus"},"About Tractus-X")))))}var K=a(42194),A=a(23330),C=a(22797),B=a(78862),S=a(23508);const X=[{id:1,question:"Why are there KITs and where does this naming comes from?",answer:"KIT means \u201cKeep It Together\u201d - Catena-X KITs aim to accelerate the development of Catena-X applications and services and contribute significantly to the rapid scaling of the Catena-X ecosystem."},{id:2,question:"Are there more KITs coming?",answer:"There are the first three lighthouse KITs available. More and more KITs will come from different domains."},{id:3,question:"Does every KIT contain the same things and follow the same structure?",answer:"KITs are guided with three different views (adoption, develop and operation) but not every KIT will provide the same objectives. Some will be more focused on the adoption view with a vision & mission, semantic model .. and other KITs will have a different target-group like developers - so there will be more focus on the technical specification."}],D="faqs_Cby0",R="container_Zg83",P="title_container_BpR_",q="accordion_box_PIQ3",F="accordion_F8I5",V="btn_container_eq9r";function L(){const[e,t]=(0,n.useState)([]),a=e.length===X.length;return n.createElement("section",{className:D},n.createElement("div",{className:R},n.createElement("div",{className:P},n.createElement("h2",{className:"title-h2"},"FAQs")),n.createElement("div",{className:q},X.map((a=>{return n.createElement(K.Z,{key:a.id,className:F,expanded:e.includes(a.id),onChange:(i=a.id,(a,n)=>{t(n?[...e,i]:e.filter((e=>e!==i)))}),sx:{"&:before":{display:"none"},backgroundColor:"transparent"},elevation:0},n.createElement(A.Z,{expandIcon:n.createElement(S.Z,{sx:{color:"#FAA023"}}),"aria-controls":`panel${a.id}-content`,id:`panel${a.id}-header`,sx:{color:"#fff",paddingBottom:"1rem"}},n.createElement(B.Z,{sx:{fontFamily:"Manrope, sans-serif",fontSize:"18px",fontWeight:"bold",lineHeight:"26px",letterSpacing:"0.6px"}},a.question)),n.createElement(C.Z,{sx:{color:"#fff",paddingBottom:"2rem"}},n.createElement(B.Z,{sx:{fontFamily:"Manrope, sans-serif",fontSize:"14px",lineHeight:"22px",letterSpacing:"-0.4px"}},a.answer)));var i}))),n.createElement("div",{className:V},n.createElement("button",{className:"button",onClick:()=>{if(e.length===X.length)t([]);else{const e=X.map((e=>e.id));t(e)}}},a?"Close All":"Open All"))))}var U=a(59692),W=a(14822);function G(){const{siteConfig:e}=(0,i.Z)();return n.createElement(s.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(b,null),n.createElement("main",null,n.createElement(I,null),n.createElement(U.Z,{itemsArray:W.Y,title:"Our Kits",description:"Unlock the power of kits. Browse the latest kits, their documentation, including tutorials,sample code, articles, and API reference."}),n.createElement(L,null)))}},14822:(e,t,a)=>{a.d(t,{Y:()=>n});const n=[{id:1,img:a.p+"assets/images/bpkit-4d5d7c5edbe3f3e161ad6c0dfcaac5ee.png",pageRoute:"docs-kits/kits/Business Partner Kit/Adoption View"},{id:2,img:a.p+"assets/images/datachainkit-bc7e2d916ddf729220d49741f8aa8a6a.png",pageRoute:"docs-kits/kits/Data Chain Kit/Adoption View"},{id:3,img:a.p+"assets/images/connectorkit-min-81d8f35a17ffe4aee1e2a4a8b3bbe42a.png",pageRoute:"docs-kits/kits/tractusx-edc/docs/kit/adoption-view/Adoption%20View"},{id:4,img:a.p+"assets/images/traceabilitykit-38d487512ce71cbd8982743797f7c99e.png",pageRoute:"docs-kits/kits/Traceability%20Kit/Adoption%20View%20Traceability%20Kit"}]}}]);