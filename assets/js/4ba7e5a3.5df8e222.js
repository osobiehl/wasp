(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[9735],{2042:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return g}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={keywords:["ISCP","Smart Contracts","Contribute","Pull Request","Linting","Go-lang","golangci-lint"],description:"How to contribute to ISCP. Creating a PR, setting up golangci-lint.",image:"/img/logo/WASP_logo_dark.png"},p="Contributing",s={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"Contributing",description:"How to contribute to ISCP. Creating a PR, setting up golangci-lint.",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/docs/contribute",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/contribute.md",version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Contribute","Pull Request","Linting","Go-lang","golangci-lint"],description:"How to contribute to ISCP. Creating a PR, setting up golangci-lint.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"EVM based smart contracts",permalink:"/docs/guide/evm/introduction"},next:{title:"Welcome to the Wasp",permalink:"/docs/welcome"}},c=[{value:"Creating a Pull Request",id:"creating-a-pull-request",children:[{value:"Lint Setup",id:"lint-setup",children:[]}]}],u={toc:c};function g(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"If you want to contribute to this repository, consider posting a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/issues/new-issue"},"bug report"),", feature request or a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/pulls/"},"pull request"),"."),(0,i.kt)("p",null,"You can also join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"Discord server")," and ping us\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"#smartcontracts-dev"),"."),(0,i.kt)("h2",{id:"creating-a-pull-request"},"Creating a Pull Request"),(0,i.kt)("p",null,"Please base your work on the ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,i.kt)("p",null,"Before creating the Pull Request ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"all the tests pass:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go test -tags rocksdb ./...\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"there are no linting violations (instructions on how to setup linting below):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"golangci-lint run\n")))),(0,i.kt)("h3",{id:"lint-setup"},"Lint Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install golintci:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/install/#local-installation"},"https://golangci-lint.run/usage/install/#local-installation"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dev setup:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/integrations/#editor-integration"},"https://golangci-lint.run/usage/integrations/#editor-integration")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VSCode"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// required:\n"go.lintTool": "golangci-lint",\n// recommended:\n"go.lintOnSave": "package"\n"go.lintFlags": ["--fix"],\n"editor.formatOnSave": true,\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GoLand"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/12496-go-linter"},"Install golintci plugin")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Install golintci plugin",src:n(6690).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure path for golangci"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Configure path for golangci",src:n(912).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a golangci file watcher with custom command (I recommend using --fix)"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Add a golangci file watcher with custom command",src:n(6560).Z})))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Other editors"),": please look into the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/golangci/golangci-lint"},(0,i.kt)("inlineCode",{parentName:"a"},"golangci")," official documentation"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ignoring false positives:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://golangci-lint.run/usage/false-positives/"},"https://golangci-lint.run/usage/false-positives/")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//nolint\n")),(0,i.kt)("p",{parentName:"li"},"for specific rules:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},"//nolint:golint,unused\n")))))}g.isMDXComponent=!0},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),g=s(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6690:function(t,e,n){"use strict";e.Z=n.p+"assets/images/golintci-goland-1-6e97b6e4c7df17ea575c301aa7c51113.png"},912:function(t,e,n){"use strict";e.Z=n.p+"assets/images/golintci-goland-2-d3eb0f9e4810e1dd3abd093a1ef4f3fc.png"},6560:function(t,e,n){"use strict";e.Z=n.p+"assets/images/golintci-goland-3-743934a7d30130bd2a92f1ad024544be.png"}}]);