(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[7494],{8808:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={},s="Smart Contract Schema Tool",l={unversionedId:"guide/schema/schema",id:"guide/schema/schema",isDocsHomePage:!1,title:"Smart Contract Schema Tool",description:"Smart contracts need to be very robust. Preferably it would be very hard to make mistakes",source:"@site/docs/guide/schema/schema.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/schema",permalink:"/docs/guide/schema/schema",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/schema/schema.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Function Call Context",permalink:"/docs/guide/schema/context"},next:{title:"Using the Schema Tool",permalink:"/docs/guide/schema/usage"}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contract-schema-tool"},"Smart Contract Schema Tool"),(0,o.kt)("p",null,"Smart contracts need to be very robust. Preferably it would be very hard to make mistakes\nwhen writing smart contract code. The generic nature of WasmLib allows for a lot of\nflexibility, but it also provides you with a lot of opportunities to make mistakes. In\naddition, there is a lot of repetitive coding involved. The setup code that is needed for\nevery smart contract must follow strict rules. You also want to assure that certain\nfunctions can only be called by specific entities, and that function parameters values\nhave been properly checked before their usage."),(0,o.kt)("p",null,"The best way to increase robustness is by using a code generator that will take care of\nmost repetitive coding tasks. A code generator only needs to be debugged once, after which\nthe generated code is 100% accurate and trustworthy. Another advantage of code generation\nis that you can regenerate code to correctly reflect any changes to the smart contract\ninterface. A code generator can also help you by generating wrapper code that limits what\nyou can do to mirror the intent behind it. This enables compile-time enforcing of some\naspects of the defined smart contract behavior. A code generator can also support multiple\ndifferent programming languages."),(0,o.kt)("p",null,"During our initial experiences with creating demo smart contracts for WasmLib we quickly\nidentified a number of areas where there was a lot of repetitive coding going on. Examples\nof such repetition were:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setting up the ",(0,o.kt)("inlineCode",{parentName:"li"},"on_load")," function and keeping it up to date"),(0,o.kt)("li",{parentName:"ul"},"checking function access rights"),(0,o.kt)("li",{parentName:"ul"},"verifying function parameter types"),(0,o.kt)("li",{parentName:"ul"},"verifying the presence of mandatory function parameters"),(0,o.kt)("li",{parentName:"ul"},"setting up access to state, params, and results maps"),(0,o.kt)("li",{parentName:"ul"},"defining common strings as constants")),(0,o.kt)("p",null,"To facilitate the code generation we decided to use a ",(0,o.kt)("em",{parentName:"p"},"schema definition file")," for smart\ncontracts. In such a schema definition file all aspects of a smart contract that should be\nknown by someone who wants to use the contract are clearly defined in a single place. This\nschema definition file then becomes the source of truth for how the smart contract works."),(0,o.kt)("p",null,"The schema definition file defines things like the state variables that the smart\ncontract uses, the Funcs and Views that the contract implements, the access rights for\neach function, the input parameters and output results for each function, and additional\ndata structures that the contract uses."),(0,o.kt)("p",null,"With detailed schema information readily available in a single location it suddenly\nbecomes possible to do a lot more than just generating repetitive code fragments. We can\nuse the schema information to generate interfaces for functions, parameters, results, and\nstate that use strict compile-time type-checking. This reduces the likelihood that errors\nare introduced significantly."),(0,o.kt)("p",null,"Another advantage of knowing everything about important smart contract aspects is that it\nis possible to generate constants to prevent repeating of typo-prone key strings and\nprecalculate necessary values like Hnames and encode them as constants instead of having\nthe code recalculate them every time they are needed."),(0,o.kt)("p",null,"Similarly, since we know all static keys that are going to be used by the smart contract\nin advance, we can now generate code that will negotiate the corresponding key IDs with\nthe host only once in the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_load")," function and cache those values for use in future\nfunction calls."),(0,o.kt)("p",null,"The previous two optimizations mean that the code becomes both simpler and more efficient.\nNote that all the improvements described above are independent of the programming language\nused."),(0,o.kt)("p",null,"Future additions to the schema tool that we envision are the automatic generation of smart\ncontract interface classes for use with client side Javascript, and automatic generation\nof a web API for smart contracts. The schema defintion file can also provide a starting\npoint for other tooling, for example a tool that automatically audits a smart contract."),(0,o.kt)("p",null,"In the next section we will look at how the schema tool works."))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,p=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);