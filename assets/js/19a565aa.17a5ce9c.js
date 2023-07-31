"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:1},o="Query Services",s={unversionedId:"building-modules/query-services",id:"building-modules/query-services",title:"Query Services",description:"A Protobuf Query service processes queries. Query services are specific to the module in which they are defined, and only process queries defined within said module. They are called from BaseApp's Query method.",source:"@site/docs/building-modules/04-query-services.md",sourceDirName:"building-modules",slug:"/building-modules/query-services",permalink:"/main/building-modules/query-services",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Msg Services",permalink:"/main/building-modules/msg-services"},next:{title:"BeginBlocker and EndBlocker",permalink:"/main/building-modules/beginblock-endblock"}},l={},u=[{value:"Implementation of a module query service",id:"implementation-of-a-module-query-service",level:2},{value:"gRPC Service",id:"grpc-service",level:3},{value:"Calling queries from the State Machine",id:"calling-queries-from-the-state-machine",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-services"},"Query Services"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A Protobuf Query service processes ",(0,a.kt)("a",{parentName:"p",href:"/main/building-modules/messages-and-queries#queries"},(0,a.kt)("inlineCode",{parentName:"a"},"queries")),". Query services are specific to the module in which they are defined, and only process ",(0,a.kt)("inlineCode",{parentName:"p"},"queries")," defined within said module. They are called from ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,a.kt)("a",{parentName:"p",href:"/main/core/baseapp#query"},(0,a.kt)("inlineCode",{parentName:"a"},"Query")," method"),".")),(0,a.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/main/building-modules/module-manager"},"Module Manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/main/building-modules/messages-and-queries"},"Messages and Queries")))),(0,a.kt)("h2",{id:"implementation-of-a-module-query-service"},"Implementation of a module query service"),(0,a.kt)("h3",{id:"grpc-service"},"gRPC Service"),(0,a.kt)("p",null,"When defining a Protobuf ",(0,a.kt)("inlineCode",{parentName:"p"},"Query")," service, a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryServer")," interface is generated for each module with all the service methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type QueryServer interface {\n    QueryBalance(context.Context, *QueryBalanceParams) (*types.Coin, error)\n    QueryAllBalances(context.Context, *QueryAllBalancesParams) (*QueryAllBalancesResponse, error)\n}\n")),(0,a.kt)("p",null,"These custom queries methods should be implemented by a module's keeper, typically in ",(0,a.kt)("inlineCode",{parentName:"p"},"./keeper/grpc_query.go"),". The first parameter of these methods is a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"context.Context"),". Therefore, the Cosmos SDK provides a function ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.UnwrapSDKContext")," to retrieve the ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.Context")," from the provided\n",(0,a.kt)("inlineCode",{parentName:"p"},"context.Context"),"."),(0,a.kt)("p",null,"Here's an example implementation for the bank module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/bank/keeper/grpc_query.go\n")),(0,a.kt)("h3",{id:"calling-queries-from-the-state-machine"},"Calling queries from the State Machine"),(0,a.kt)("p",null,"The Cosmos SDK v0.47 introduces a new ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmos.query.v1.module_query_safe")," Protobuf annotation which is used to state that a query that is safe to be called from within the state machine, for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a Keeper's query function can be called from another module's Keeper,"),(0,a.kt)("li",{parentName:"ul"},"ADR-033 intermodule query calls,"),(0,a.kt)("li",{parentName:"ul"},"CosmWasm contracts can also directly interact with these queries.")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"module_query_safe")," annotation set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", it means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The query is deterministic: given a block height it will return the same response upon multiple calls, and doesn't introduce any state-machine breaking changes across SDK patch versions."),(0,a.kt)("li",{parentName:"ul"},"Gas consumption never fluctuates across calls and across patch versions.")),(0,a.kt)("p",null,"If you are a module developer and want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"module_query_safe")," annotation for your own query, you have to ensure the following things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the query is deterministic and won't introduce state-machine-breaking changes without coordinated upgrades"),(0,a.kt)("li",{parentName:"ul"},"it has its gas tracked, to avoid the attack vector where no gas is accounted for\non potentially high-computation queries.")))}p.isMDXComponent=!0}}]);