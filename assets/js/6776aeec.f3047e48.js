"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[71789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const s={},o="Local TXDC Setup",c={unversionedId:"kits/tractusx-edc/docs/samples/Local TXDC Setup",id:"kits/tractusx-edc/docs/samples/Local TXDC Setup",title:"Local TXDC Setup",description:"This document describes how to set up two TXDConnector instances locally. The Supporting Infrastructure Deployment, used",source:"@site/docs-kits/kits/tractusx-edc/docs/samples/Local TXDC Setup.md",sourceDirName:"kits/tractusx-edc/docs/samples",slug:"/kits/tractusx-edc/docs/samples/Local TXDC Setup",permalink:"/docs-kits/next/kits/tractusx-edc/docs/samples/Local TXDC Setup",draft:!1,tags:[],version:"current",frontMatter:{}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local Deployment",id:"local-deployment",level:2},{value:"Supporting Infrastructure",id:"supporting-infrastructure",level:3},{value:"Plato Connector",id:"plato-connector",level:3},{value:"Sokrates Connector",id:"sokrates-connector",level:3},{value:"Uninstall",id:"uninstall",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-txdc-setup"},"Local TXDC Setup"),(0,a.kt)("p",null,"This document describes how to set up two TXDConnector instances locally. The Supporting Infrastructure Deployment, used\nby this example, must never be used productively. The deployment of the two TXDConnector instances, done by this example,\nis not suitable for productive deployment scenarios."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://helm.sh"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Helm-URL-lightgrey",alt:"Helm"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Kubernetes-URL-lightgrey",alt:"Kubernetes"}))),(0,a.kt)("h2",{id:"local-deployment"},"Local Deployment"),(0,a.kt)("p",null,"The Local TXDC Setup consists of three separate deployments. The Supporting Infrastructure, that is required to\nrun connectors, and two different TXDC Connector instances, that can communicate with each other."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/tractusx-edc/edc-tests/deployment/test-infrastructure/"},"TXDC Supporting Infrastructure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/tractusx-edc/charts/tractusx-connector/"},"TXDC Connector")," Plato"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-kits/next/kits/tractusx-edc/charts/tractusx-connector/"},"TXDC Connector")," Sokrates")),(0,a.kt)("h3",{id:"supporting-infrastructure"},"Supporting Infrastructure"),(0,a.kt)("p",null,"Before the connectors can be setup, the Supporting Infrastructure must be in place. It comes with pre-configured everything\nto run two connectors independently."),(0,a.kt)("p",null,"For this local test scenario,\nthe ",(0,a.kt)("a",{parentName:"p",href:"../../edc-tests/cucumber/src/main/resources/deployment/helm/supporting-infrastructure/README.md"},"Supporting Infrastructure"),"\nof the TXDC Business Tests can be used."),(0,a.kt)("p",null,"Install the TXDC Supporting Infrastructure by running the following command from the project root directory. The Minio\nset can be skipped, as it's only used by AWS S3 Transfer Business Tests. Also, the PostgreSQL Database is not really\nmandatory to try out the EDC. So it can be disabled as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm dependency update edc-tests/cucumber/src/main/resources/deployment/helm/supporting-infrastructure\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install infrastructure edc-tests/cucumber/src/main/resources/deployment/helm/supporting-infrastructure \\\n    --namespace cx \\\n    --create-namespace \\\n    --set install.minio=false \\\n    --set install.postgresql=false\n")),(0,a.kt)("h3",{id:"plato-connector"},"Plato Connector"),(0,a.kt)("p",null,"After the supporting infrastructure is deployed the Plato Connector can be added. The Supporting Infrastructure\nDeployment has a DAPS Client and Vault Secrets configured accordingly. So that the TXDConnector can use them directly."),(0,a.kt)("p",null,"Install Plato by running the following command from the project root directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install plato charts/tractusx-connector \\\n    --namespace cx \\\n    --create-namespace \\\n    --set fullnameOverride=plato \\\n    --set controlplane.image.tag=latest \\\n    --set controlplane.service.type=NodePort \\\n    --set controlplane.endpoints.management.authKey=password \\\n    --set vault.hashicorp.enabled=true \\\n    --set vault.hashicorp.url=http://vault:8200 \\\n    --set vault.hashicorp.token=root \\\n    --set vault.secretNames.transferProxyTokenSignerPublicKey=plato/daps/my-plato-daps-crt \\\n    --set vault.secretNames.transferProxyTokenSignerPrivateKey=plato/daps/my-plato-daps-key \\\n    --set vault.secretNames.transferProxyTokenEncryptionAesKey=plato/data-encryption-aes-keys \\\n    --set vault.secretNames.dapsPrivateKey=plato/daps/my-plato-daps-key \\\n    --set vault.secretNames.dapsPublicKey=plato/daps/my-plato-daps-crt \\\n    --set daps.url=http://ids-daps:4567 \\\n    --set daps.clientId=99:83:A7:17:86:FF:98:93:CE:A0:DD:A1:F1:36:FA:F6:0F:75:0A:23:keyid:99:83:A7:17:86:FF:98:93:CE:A0:DD:A1:F1:36:FA:F6:0F:75:0A:23 \\\n    --set backendService.httpProxyTokenReceiverUrl=http://backend:8080\n")),(0,a.kt)("p",null,"The different settings are explained in the ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/tractusx-edc/charts/tractusx-connector/"},"TXDC Connector")," documentation.\nBasically this deployment overrides the full name, to avoid naming conflicts, and sets a NodePort, to access the\ncontainers from outside the local Kubernetes cluster. Then it configures a DAPS instance and the corresponding vault,\nwhere the DAPS secrets are persisted, so that the connector has its own identity."),(0,a.kt)("h3",{id:"sokrates-connector"},"Sokrates Connector"),(0,a.kt)("p",null,"After Plato is set up the same can be done for Sokrates. The main difference will be, that Sokrates uses another DAPS\nClient ID with different public-/private keys."),(0,a.kt)("p",null,"Install Sokrates by running the following command from the project root directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm install sokrates charts/tractusx-connector  \\\n    --namespace cx \\\n    --create-namespace \\\n    --set fullnameOverride=sokrates \\\n    --set controlplane.image.tag=latest \\\n    --set controlplane.service.type=NodePort \\\n    --set controlplane.endpoints.management.authKey=password \\\n    --set vault.hashicorp.enabled=true \\\n    --set vault.hashicorp.url=http://vault:8200 \\\n    --set vault.hashicorp.token=root \\\n    --set vault.secretNames.transferProxyTokenSignerPublicKey=sokrates/daps/my-sokrates-daps-crt \\\n    --set vault.secretNames.transferProxyTokenSignerPrivateKey=sokrates/daps/my-sokrates-daps-key \\\n    --set vault.secretNames.transferProxyTokenEncryptionAesKey=sokrates/data-encryption-aes-keys \\\n    --set vault.secretNames.dapsPrivateKey=sokrates/daps/my-sokrates-daps-key \\\n    --set vault.secretNames.dapsPublicKey=sokrates/daps/my-sokrates-daps-crt \\\n    --set daps.url=http://ids-daps:4567 \\\n    --set daps.clientId=E7:07:2D:74:56:66:31:F0:7B:10:EA:B6:03:06:4C:23:7F:ED:A6:65:keyid:E7:07:2D:74:56:66:31:F0:7B:10:EA:B6:03:06:4C:23:7F:ED:A6:65 \\\n    --set backendService.httpProxyTokenReceiverUrl=http://backend:8080\n")),(0,a.kt)("h2",{id:"uninstall"},"Uninstall"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall --namespace cx infrastructure\nhelm uninstall --namespace cx plato\nhelm uninstall --namespace cx sokrates\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To try out the local setup, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/tractusx-edc/docs/samples/Transfer%20Data"},"Transfer Example Documentation"))))}u.isMDXComponent=!0}}]);