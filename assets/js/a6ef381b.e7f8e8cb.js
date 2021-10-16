(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[6934],{1871:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1137:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7294),r=n(4179);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,m=e.values,h=e.groupId,f=e.className,d=o(),p=d.tabGroupChoices,w=d.setTabGroupChoices,g=(0,a.useState)(r),y=g[0],b=g[1],k=a.Children.toArray(e.children),v=[];if(null!=h){var C=p[h];null!=C&&C!==y&&m.some((function(e){return e.value===C}))&&b(C)}var x=function(e){var t=e.currentTarget,n=v.indexOf(t),a=m[n].value;b(a),null!=h&&(w(h,a),setTimeout((function(){var e,n,a,r,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case c:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4179:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},3111:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return h},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=n(1137),s=n(1871),l=["components"],c={},u="Using the Schema Tool",m={unversionedId:"guide/schema/usage",id:"guide/schema/usage",isDocsHomePage:!1,title:"Using the Schema Tool",description:"We tried to make the creation of smart contracts as simple as possible. The schema",source:"@site/docs/guide/schema/usage.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/usage",permalink:"/docs/guide/schema/usage",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/schema/usage.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Schema Tool",permalink:"/docs/guide/schema/schema"},next:{title:"Structured Data Types",permalink:"/docs/guide/schema/structs"}},h=[],f={toc:h};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-schema-tool"},"Using the Schema Tool"),(0,o.kt)("p",null,"We tried to make the creation of smart contracts as simple as possible. The ",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),"\ntool will assist you along the way as unobtrusively as possible. We will now walk you\nthrough the steps to create a new smart contract from scratch."),(0,o.kt)("p",null,"First you decide on a central folder where you want to keep all your smart contracts. Each\nsmart contract you create will be maintained in a separate subfolder of this folder. We\nwill use certain naming conventions that the schema tool expects throughout this usage\nsection. First we will select a camel case name for our smart contract. For our example\nhere we will use the name ",(0,o.kt)("inlineCode",{parentName:"p"},"MySmartContract"),"."),(0,o.kt)("p",null,"Once you know what your smart contract will be named it is time to set up your subfolder.\nSimply navigate to the central smart contract folder, and run the schema tool's\ninitialization function there like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema -init MySmartContract")),(0,o.kt)("p",null,"This command will create a subfolder named ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract")," and generate an initial YAML\nschema definition file inside this subfolder. We prefer to use YAML over JSON by default,\nbecause a YAML file is easier to read and edit manually. If for some reason you prefer to\nuse JSON instead, you can run the schema tool like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema -init MySmartContract -type=json")),(0,o.kt)("p",null,"Note that the generated subfolder name is all lower case. This is due to best practices\nfor package names both in Rust and in Go. The generated schema definition file looks like\nthis:"),(0,o.kt)(i.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "MySmartContract",\n  "description": "MySmartContract description",\n  "structs": {},\n  "typedefs": {},\n  "state": {\n    "owner": "AgentID // current owner of this smart contract"\n  },\n  "funcs": {\n    "init": {\n      "params": {\n        "owner": "?AgentID // optional owner of this smart contract"\n      }\n    },\n    "setOwner": {\n      "access": "owner // current owner of this smart contract",\n      "params": {\n        "owner": "AgentID // new owner of this smart contract"\n      }\n    }\n  },\n  "views": {\n    "getOwner": {\n      "results": {\n        "owner": "AgentID // current owner of this smart contract"\n      }\n    }\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"name: MySmartContract\ndescription: MySmartContract description\nstructs: {}\ntypedefs: {}\nstate:\n  owner: AgentID // current owner of this smart contract\nfuncs:\n  init:\n    params:\n      owner: ?AgentID // optional owner of this smart contract\n  setOwner:\n    access: owner // current owner of this smart contract\n    params:\n      owner: AgentID // new owner of this smart contract\nviews:\n  getOwner:\n    results:\n      owner: AgentID // current owner of this smart contract\n")))),(0,o.kt)("p",null,"The schema definition file has been pre-populated with all sections that you could need,\nand some functions that allow you to maintain the ownership of the smart contract. Now\nthat the schema definition file exists it is up to you to modify it further to reflect the\nrequirements of your smart contract."),(0,o.kt)("p",null,"We use camel case naming convention throughout the schema definition file when naming\nitems. Function and variable names always start with a lower case character, and type\nnames always start with an upper case character."),(0,o.kt)("p",null,"The first thing you may want to do before you do anything else is to modify the\n",(0,o.kt)("inlineCode",{parentName:"p"},"description")," field to something more sensible. And if you already know how to use the\nschema tool then now is the moment to fill out some sections with the definitions you know\nyou will need."),(0,o.kt)("p",null,"The next step is to go into the new ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract")," subfolder and run the schema tool\nthere to generate the initial code. If you just want to generate Rust code you run the\nschema tool with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-rust")," option and the type of the generated schema like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema -rust")),(0,o.kt)("p",null,"If you just want to generate Go code you run the schema tool with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-go")," option like\nthis:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema -go")),(0,o.kt)("p",null,"And if you want to generate both Rust and Go code you need to specify both options like\nthis:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"schema -rust -go")),(0,o.kt)("p",null,"Note that the schema tool will automatically determine the type of the schema definition\nfile (YAML or JSON) by its file extension."),(0,o.kt)("p",null,"The schema tool will generate a complete set of source files for the desired language(s).\nAfter generating the Rust code for the first time you should modify the Cargo.toml file to\nyour likings, and potentially add the new project to a Rust workspace. Cargo.toml will not\nbe regenerated once it already exists. The generated files together readily compile into a\nWasm file by using the appropriate command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Rust: ",(0,o.kt)("inlineCode",{parentName:"li"},"wasm-pack build"),". This will use the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," subfolder that contains all Rust\nsource files. The only file in this folder that you should edit manually is\n",(0,o.kt)("inlineCode",{parentName:"li"},"mysmartcontract.rs"),". All other files will be regenerated and overwritten whenever the\nschema tool is run again."),(0,o.kt)("li",{parentName:"ul"},"For Go: ",(0,o.kt)("inlineCode",{parentName:"li"},"tinygo build -target wasm wasmmain/main.go"),". This will use the go source files\nin the current folder. The only file in this folder that you should edit manually is\n",(0,o.kt)("inlineCode",{parentName:"li"},"mysmartcontract.go"),". All other files will be regenerated and overwritten whenever the\nschema tool is run again.")),(0,o.kt)("p",null,"For now, we will focus on the Rust code that is generated, but the Go code is essentially\nidentical, barring some language idiosyncrasy differences. Just view .rs files next to .go\nfiles with the same name, and you will see what we mean."),(0,o.kt)("p",null,"Anyway, to show you an example of the initially generated Rust code, ",(0,o.kt)("inlineCode",{parentName:"p"},"mysmartcontract.rs"),"\nlooks like this before you even start modifying it:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package mysmartcontract\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\nfunc funcInit(ctx wasmlib.ScFuncContext, f *InitContext) {\n    if f.Params.Owner().Exists() {\n        f.State.Owner().SetValue(f.Params.Owner().Value())\n        return\n    }\n    f.State.Owner().SetValue(ctx.ContractCreator())\n}\n\nfunc funcSetOwner(ctx wasmlib.ScFuncContext, f *SetOwnerContext) {\n    f.State.Owner().SetValue(f.Params.Owner().Value())\n}\n\nfunc viewGetOwner(ctx wasmlib.ScViewContext, f *GetOwnerContext) {\n    f.Results.Owner().SetValue(f.State.Owner().Value())\n}\n'))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\n\nuse crate::*;\n\npub fn func_init(ctx: &ScFuncContext, f: &InitContext) {\n    if f.params.owner().exists() {\n        f.state.owner().set_value(f.params.owner().value());\n        return;\n    }\n    f.state.owner().set_value(ctx.contract_creator());\n}\n\npub fn func_set_owner(_ctx: &ScFuncContext, f: &SetOwnerContext) {\n    f.state.owner().set_value(f.params.owner().value());\n}\n\npub fn view_get_owner(_ctx: &ScViewContext, f: &GetOwnerContext) {\n    f.results.owner().set_value(f.state.owner().value());\n}\n")))),(0,o.kt)("p",null,"As you can see the schema tool generated an initial working version of the functions that\nare used to maintain the smart contract owner that will suffice for most cases."),(0,o.kt)("p",null,"For a smooth building experience it is a good idea to set up a build rule in your build\nenvironment that runs the schema tool with the required parameters whenever the schema\ndefinition file changes. That way regeneration of files is automatic and you no longer\nhave to start the schema tool manually each time after changing the schema definition\nfile. Note that the schema tool will only regenerate the code when it finds that the\nschema definition file has been modified since the last time it generated the code.\nYou can force the schema tool to regenerate all code by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"-force")," flag to its\ncommand line parameter."),(0,o.kt)("p",null,"In the next section we will look at how a smart contract uses state storage."))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),f=r,d=h["".concat(l,".").concat(f)]||h[f]||m[f]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);