"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[68489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},s="Transfer Data",l={unversionedId:"kits/tractusx-edc/docs/samples/Transfer Data",id:"kits/tractusx-edc/docs/samples/Transfer Data",title:"Transfer Data",description:"This document will showcase a data transfer between two connectors.",source:"@site/docs-kits/kits/tractusx-edc/docs/samples/Transfer Data.md",sourceDirName:"kits/tractusx-edc/docs/samples",slug:"/kits/tractusx-edc/docs/samples/Transfer Data",permalink:"/docs-kits/next/kits/tractusx-edc/docs/samples/Transfer Data",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"EDC API Examples",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/operation-view/page08_api"},next:{title:"Upgrading TractusX EDC",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/operation-view/page09_upgrading"}},i={},p=[{value:"Table of Content",id:"table-of-content",level:2},{value:"1. Optional - Local Setup",id:"1-optional---local-setup",level:2},{value:"See Node Ports using Minikube",id:"see-node-ports-using-minikube",level:3},{value:"See Node Ports using Kubernetes",id:"see-node-ports-using-kubernetes",level:3},{value:"Set Environment Variables, used by this example",id:"set-environment-variables-used-by-this-example",level:3},{value:"2. Setup Data Offer",id:"2-setup-data-offer",level:2},{value:"3. Request Contract Offer Catalog",id:"3-request-contract-offer-catalog",level:2},{value:"4. Negotiate Contract",id:"4-negotiate-contract",level:2},{value:"5. Transfer Data",id:"5-transfer-data",level:2},{value:"6. Verify Data Transfer",id:"6-verify-data-transfer",level:2},{value:"Delete All Data",id:"delete-all-data",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transfer-data"},"Transfer Data"),(0,o.kt)("p",null,"This document will showcase a data transfer between two connectors."),(0,o.kt)("p",null,"For this transfer connector ",(0,o.kt)("strong",{parentName:"p"},"Bob")," will act as data provider, and connector ",(0,o.kt)("strong",{parentName:"p"},"Alice")," will act as data\nconsumer. But the roles could be inverse as well."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note: Before running the examples the corresponding environment variables must be set.\nHow such an environment can be setup locally is documented in ",(0,o.kt)("a",{parentName:"p",href:"#1-optional---local-setup"},"chapter 1"),".")),(0,o.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-optional---local-setup"},"Optional - Local Setup")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-setup-data-offer"},"Setup Data Offer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-request-contract-offer-catalog"},"Request Contract Offers")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4-negotiate-contract"},"Negotiate Contract")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#5-transfer-data"},"Transfer Data")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#6-verify-data-transfer"},"Verify Data Transfer"))),(0,o.kt)("h2",{id:"1-optional---local-setup"},"1. Optional - Local Setup"),(0,o.kt)("p",null,"To create a local setup with two connectors have a look at\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/tractusx-edc/docs/samples/Local%20TXDC%20Setup"},"Local TXDC Setup Documentation"),".\nIt creates two connectors (Plato & Sokrates) with exposed Node Ports."),(0,o.kt)("h3",{id:"see-node-ports-using-minikube"},"See Node Ports using Minikube"),(0,o.kt)("p",null,"Run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"minkube service list\n")),(0,o.kt)("p",null,"Minikube will then print out something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"|-------------|-----------------------|-----------------|---------------------------|\n|  NAMESPACE  |         NAME          |   TARGET PORT   |            URL            |\n|-------------|-----------------------|-----------------|---------------------------|\n| cx          | backend               | frontend/8080   | http://192.168.49.2:31918 |\n|             |                       | backend/8081    | http://192.168.49.2:30193 | < Transfer Backend API\n| cx          | ids-daps              | No node port    |\n| cx          | plato-controlplane    | default/8080    | http://192.168.49.2:31016 |\n|             |                       | control/8083    | http://192.168.49.2:32510 |\n|             |                       | data/8081       | http://192.168.49.2:30423 | < Plato Data Management API\n|             |                       | validation/8082 | http://192.168.49.2:30997 |\n|             |                       | ids/8084        | http://192.168.49.2:32709 | < Plato IDS API\n|             |                       | metrics/8085    | http://192.168.49.2:31124 |\n| cx          | plato-dataplane       | No node port    |\n| cx          | sokrates-controlplane | default/8080    | http://192.168.49.2:32297 |\n|             |                       | control/8083    | http://192.168.49.2:32671 |\n|             |                       | data/8081       | http://192.168.49.2:31772 | < Sokrates Data Management API\n|             |                       | validation/8082 | http://192.168.49.2:30540 |\n|             |                       | ids/8084        | http://192.168.49.2:32543 | < Sokrates IDS API\n|             |                       | metrics/8085    | http://192.168.49.2:30247 |\n| cx          | sokrates-dataplane    | No node port    |\n| cx          | vault                 | No node port    |\n| cx          | vault-internal        | No node port    |\n| cx          | vault-ui              | No node port    |\n| default     | kubernetes            | No node port    |\n| kube-system | kube-dns              | No node port    |\n|-------------|-----------------------|-----------------|---------------------------|\n")),(0,o.kt)("p",null,"The most important APIs, used by this example, are highlighted. How they are used is described in subchapter ",(0,o.kt)("a",{parentName:"p",href:"#set-environment-variables-used-by-this-example"},"'Set\nEnvironment Variables"),", used by this example below."),(0,o.kt)("h3",{id:"see-node-ports-using-kubernetes"},"See Node Ports using Kubernetes"),(0,o.kt)("p",null,"Using Kubernetes only the Node Ports of each Service must be checked separately."),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe service -n cx plato-controlplane \n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe service -n cx sokrates-controlplane \n")),(0,o.kt)("p",null,"Kubernetes will then print out something like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"Name:                     plato-controlplane\nNamespace:                cx\nLabels:                   app.kubernetes.io/component=edc-controlplane\n                          app.kubernetes.io/instance=plato-controlplane\n                          app.kubernetes.io/managed-by=Helm\n                          app.kubernetes.io/name=tractusx-connector-controlplane\n                          app.kubernetes.io/part-of=edc\n                          app.kubernetes.io/version=0.2.0\n                          helm.sh/chart=tractusx-connector-0.2.0\nAnnotations:              meta.helm.sh/release-name: plato\n                          meta.helm.sh/release-namespace: cx\nSelector:                 app.kubernetes.io/instance=plato-controlplane,app.kubernetes.io/name=tractusx-connector-controlplane\nType:                     NodePort\nIP Family Policy:         SingleStack\nIP Families:              IPv4\nIP:                       10.110.180.57\nIPs:                      10.110.180.57\nPort:                     default  8080/TCP\nTargetPort:               default/TCP\nNodePort:                 default  31016/TCP\nEndpoints:                172.17.0.6:8080\nPort:                     control  8083/TCP\nTargetPort:               control/TCP\nNodePort:                 control  32510/TCP\nEndpoints:                172.17.0.6:8083\nPort:                     data  8081/TCP\nTargetPort:               data/TCP\nNodePort:                 data  30423/TCP                      < Plato Data Manamgent API\nEndpoints:                172.17.0.6:8081\nPort:                     validation  8082/TCP\nTargetPort:               validation/TCP\nNodePort:                 validation  30997/TCP\nEndpoints:                172.17.0.6:8082\nPort:                     ids  8084/TCP\nTargetPort:               ids/TCP\nNodePort:                 ids  32709/TCP                        < Plato IDS API\nEndpoints:                172.17.0.6:8084\nPort:                     metrics  8085/TCP\nTargetPort:               metrics/TCP\nNodePort:                 metrics  31124/TCP\nEndpoints:                172.17.0.6:8085\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   <none>\n")),(0,o.kt)("p",null,"The most important APIs, used by this example, are highlighted. How they are used is described in subchapter ",(0,o.kt)("a",{parentName:"p",href:"#set-environment-variables-used-by-this-example"},"'Set\nEnvironment Variables"),", used by this example below.\nIn comparison to the Minikube example this call shows only the ports. To call the ports the Kubernetes Node IP / URL is\nrequired. Where to get the IP may vary depending on how Kubernetes is deployed."),(0,o.kt)("h3",{id:"set-environment-variables-used-by-this-example"},"Set Environment Variables, used by this example"),(0,o.kt)("p",null,"Environment Variables, containing a URL, used by this example are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BOB_DATAMGMT_URL"),(0,o.kt)("li",{parentName:"ul"},"ALICE_DATAMGMT_URL"),(0,o.kt)("li",{parentName:"ul"},"BOB_IDS_URL"),(0,o.kt)("li",{parentName:"ul"},"ALICE_BACKEND_URL")),(0,o.kt)("p",null,"Let's assume we will use Sokrates as Bob, and Plato as Alice."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BOB_DATAMGMT_URL")," must be the Node URL. In this local setup it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.49.2:31772")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ALICE_DATAMGMT_URL")," must be the Node URL. In this local setup it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.49.2:30423")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BOB_IDS_URL")," must be internal Kubernetes URL. In this local setup ",(0,o.kt)("inlineCode",{parentName:"p"},"http://sokrates-controlplane:8084")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ALICE_BACKEND_URL")," must the Node URL. In this local setup it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.49.2:30193")),(0,o.kt)("h2",{id:"2-setup-data-offer"},"2. Setup Data Offer"),(0,o.kt)("p",null,"Set up a data offer in ",(0,o.kt)("strong",{parentName:"p"},"Bob"),", so that ",(0,o.kt)("strong",{parentName:"p"},"Alice")," has something to consume."),(0,o.kt)("p",null,"In case you are unfamiliar with the EDC terms ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Policy")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractDefinition")," please have a look at the\nofficial open source documentation (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/blob/main/docs/developer/architecture/domain-model.md"},"link"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence 1",src:n(97061).Z,width:"797",height:"360"})),(0,o.kt)("p",null,"The following commands will create an Asset, a Policy and a Contract Definition.\nFor simplicity ",(0,o.kt)("inlineCode",{parentName:"p"},"https://jsonplaceholder.typicode.com/todos/1")," is used as data source of the asset, but could be any\nother API, that is reachable from the Provider Data Plane."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "${BOB_DATAMGMT_URL}/data/assets" \\\n    --header \'X-Api-Key: password\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n             "asset": {\n                "properties": {\n                        "asset:prop:id": "1",\n                        "asset:prop:description": "Tractus-X EDC Demo Asset"\n                    }\n                },\n                "dataAddress": {\n                    "properties": {\n                        "type": "HttpData",\n                        "baseUrl": "https://jsonplaceholder.typicode.com/todos/1"\n                    }\n                }\n            }\' \\\n    -s -o /dev/null -w \'Response Code: %{http_code}\\n\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "${BOB_DATAMGMT_URL}/data/policydefinitions" \\\n    --header \'X-Api-Key: password\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n               "id": "1",\n                "policy": {\n                    "prohibitions": [],\n                    "obligations": [],\n                    "permissions": [\n                        {\n                            "edctype": "dataspaceconnector:permission",\n                            "action": { "type": "USE" },\n                            "constraints": []\n                        }\n                    ]\n                }\n            }\' \\\n    -s -o /dev/null -w \'Response Code: %{http_code}\\n\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "${BOB_DATAMGMT_URL}/data/contractdefinitions" \\\n    --header \'X-Api-Key: password\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n                "id": "1",\n                "criteria": [\n                    {\n                        "operandLeft": "asset:prop:id",\n                        "operator": "=",\n                        "operandRight": "1"\n                    }\n                ],\n                "accessPolicyId": "1",\n                "contractPolicyId": "1"\n            }\' \\\n    -s -o /dev/null -w \'Response Code: %{http_code}\\n\'\n')),(0,o.kt)("h2",{id:"3-request-contract-offer-catalog"},"3. Request Contract Offer Catalog"),(0,o.kt)("p",null,"In this step Alice gets told to request contract offers from another connector (in this case Bob). Alice will\nthen request the catalog over IDS messaging."),(0,o.kt)("p",null,"For IDS messaging connectors will identify each other using the configured IDS DAPS. Therefore, it is important that\nconnectors, that intent to send messages to each other, have the same DAPS instance configured."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence 1",src:n(25457).Z,width:"957",height:"302"})),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -G -X GET \"${ALICE_DATAMGMT_URL}/data/catalog\" \\\n    --data-urlencode \"providerUrl=${BOB_IDS_URL}/api/v1/ids/data\" \\\n    --header 'X-Api-Key: password' \\\n    --header 'Content-Type: application/json' \\\n    -s | jq\n")),(0,o.kt)("h2",{id:"4-negotiate-contract"},"4. Negotiate Contract"),(0,o.kt)("p",null,"Initiate a contract negotiation for the asset (from step 1). Part of the negotiation payload is the contract\noffer (received in step 2)."),(0,o.kt)("p",null,"In the diagram the IDS contract negotiation is marked as simplified, because the EDC is exchanging multiple messages\nduring contract negotiation. But the inter-controlplane communication is not in the scope of this document."),(0,o.kt)("p",null,"After the negotiation is initiated ensure that is has concluded. This is done by requesting the negotiation from the API\nand checking whether the ",(0,o.kt)("inlineCode",{parentName:"p"},"contractAgreementId")," is set. This might take a few seconds."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence 1",src:n(60632).Z,width:"932",height:"360"})),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export NEGOTIATION_ID=$( \\\n    curl -X POST "${ALICE_DATAMGMT_URL}/data/contractnegotiations" \\\n        --header "X-Api-Key: password" \\\n        --header "Content-Type: application/json" \\\n        --data "{\n                    \\"connectorId\\": \\"foo\\",\n                    \\"connectorAddress\\": \\"${BOB_IDS_URL}/api/v1/ids/data\\",\n                    \\"offer\\": {\n                        \\"offerId\\": \\"1:foo\\",\n                        \\"assetId\\": \\"1\\",\n                        \\"policy\\": {\n                            \\"uid\\": \\"1\\",\n                            \\"prohibitions\\": [],\n                            \\"obligations\\": [],\n                            \\"permissions\\": [\n                                {\n                                    \\"edctype\\": \\"dataspaceconnector:permission\\",\n                                    \\"action\\": { \\"type\\": \\"USE\\" },\n                                    \\"target\\": \\"1\\",\n                                    \\"constraints\\": []\n                                }\n                            ]\n                        }\n                    }\n                }" \\\n    -s | jq -r \'.id\')\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"${ALICE_DATAMGMT_URL}/data/contractnegotiations/${NEGOTIATION_ID}\" \\\n    --header 'X-Api-Key: password' \\\n    --header 'Content-Type: application/json' \\\n    -s | jq\n")),(0,o.kt)("h2",{id:"5-transfer-data"},"5. Transfer Data"),(0,o.kt)("p",null,"Initiate a data transfer using the contract agreement from the negotiation (from step 3). Then wait until the state of\nthe transfer process is ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPLETED"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence 1",src:n(42807).Z,width:"1106",height:"693"})),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_AGREEMENT_ID=$( \\\n    curl -X GET \"$ALICE_DATAMGMT_URL/data/contractnegotiations/$NEGOTIATION_ID\" \\\n    --header 'X-Api-Key: password' \\\n    --header 'Content-Type: application/json' \\\n    -s | jq -r '.contractAgreementId')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export TRANSFER_PROCESS_ID=$(tr -dc \'[:alnum:]\' < /dev/urandom | head -c20)\nexport TRANSFER_ID=$( \\\n    curl -X POST "${ALICE_DATAMGMT_URL}/data/transferprocess" \\\n    --header "X-Api-Key: password" \\\n    --header "Content-Type: application/json" \\\n    --data "{\n                \\"id\\": \\"${TRANSFER_PROCESS_ID}\\", \n                \\"connectorId\\": \\"foo\\", \n                \\"connectorAddress\\": \\"${BOB_IDS_URL}/api/v1/ids/data\\", \n                \\"contractId\\": \\"${CONTRACT_AGREEMENT_ID}\\", \n                \\"assetId\\": \\"1\\", \n                \\"managedResources\\": \\"false\\", \n                \\"dataDestination\\": { \\"type\\": \\"HttpProxy\\" }\n            }" \\\n     -s | jq -r \'.id\')\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"${ALICE_DATAMGMT_URL}/data/transferprocess/${TRANSFER_ID}\" \\\n    --header 'X-Api-Key: password' \\\n    --header 'Content-Type: application/json' \\\n    -s | jq\n")),(0,o.kt)("h2",{id:"6-verify-data-transfer"},"6. Verify Data Transfer"),(0,o.kt)("p",null,"After the transfer is complete the Backend Application has downloaded the data. The Backend Application stores the data\nlocally. In this demo the transfer can be verified by executing a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," call in the Pod."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence 1",src:n(54923).Z,width:"797",height:"243"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \"${ALICE_BACKEND_URL}/${TRANSFER_PROCESS_ID}\" \\\n    --header 'Accept: application/octet-stream' \\\n    -s | jq\n")),(0,o.kt)("h2",{id:"delete-all-data"},"Delete All Data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube kubectl -- delete pvc -n edc-all-in-one --all\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"minikube kubectl -- delete pv -n edc-all-in-one --all\n")))}d.isMDXComponent=!0},97061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer_sequence_1-646d98e473ff6ccce99bec782e0c62a4.png"},25457:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer_sequence_2-c63823519f5a2037a412f6afe8e28f60.png"},60632:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer_sequence_3-784b70db5b2310933e97bee42b4bd73f.png"},42807:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer_sequence_4-2d18a75b8aaf6f863b3117676617d888.png"},54923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer_sequence_5-e59eb9de2e6376daab4cfaed0a8147ae.png"}}]);