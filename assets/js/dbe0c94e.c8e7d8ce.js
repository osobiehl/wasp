(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[6693],{3338:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=o(2122),a=o(9756),r=(o(7294),o(3905)),i=["components"],l={description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install"]},s="Solo",c={unversionedId:"guide/solo/what-is-solo",id:"guide/solo/what-is-solo",isDocsHomePage:!1,title:"Solo",description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols",source:"@site/docs/guide/solo/what-is-solo.md",sourceDirName:"guide/solo",slug:"/guide/solo/what-is-solo",permalink:"/docs/guide/solo/what-is-solo",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/solo/what-is-solo.md",version:"current",frontMatter:{description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install"]},sidebar:"tutorialSidebar",previous:{title:"Off-ledger Requests",permalink:"/docs/guide/core_concepts/smartcontract-interaction/off-ledger-requests"},next:{title:"First Example",permalink:"/docs/guide/solo/first-example"}},p=[{value:"What is Solo?",id:"what-is-solo",children:[]},{value:"Installation",id:"installation",children:[]}],u={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solo"},"Solo"),(0,r.kt)("h2",{id:"what-is-solo"},"What is Solo?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/packages/solo"},(0,r.kt)("em",{parentName:"a"},"Solo"))," is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols before deploying them on the distributed network."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," tests are written in Go. Go (version 1.16) needs to be installed on your machine."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," is part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp.git"},(0,r.kt)("em",{parentName:"a"},"Wasp")," codebase repository"),". You can access the Solo framework by cloning the repository with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\n")),(0,r.kt)("p",null,"Alternatively, you can install the Solo package separately using the following command:"),(0,r.kt)("p",null,"In Linux/macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("p",null,"In Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get -buildmode=exe github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("p",null,"To run Rust/Wasm smart contracts you will also need ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," and ",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-pack/installer/"},"wasm-pack")," installed.\nYou can use any development environment for Rust and Go.\nThe GoLang environment with the Rust plugin is a good combination."),(0,r.kt)("p",null,"You can find example implementations of smart contracts (including source code\nand tests) in the Wasp repository, in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/rust"},"contracts/rust folder"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find the documentation for all the functionalities available in solo in ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/iotaledger/wasp/packages/solo"},"go-docs"),"."))),(0,r.kt)("p",null,"In the following pages some usage examples will be presented. The example code can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples"},"Wasp repository"),"."))}m.isMDXComponent=!0},3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return p},kt:function(){return d}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);