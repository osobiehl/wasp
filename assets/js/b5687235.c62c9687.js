(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[1992],{1871:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},1137:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(7294),a=t(4179);var c=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,o=39;var m=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,m=e.values,f=e.groupId,p=e.className,d=c(),b=d.tabGroupChoices,w=d.setTabGroupChoices,h=(0,r.useState)(a),v=h[0],C=h[1],F=r.Children.toArray(e.children),y=[];if(null!=f){var S=b[f];null!=S&&S!==v&&m.some((function(e){return e.value===S}))&&C(S)}var g=function(e){var n=e.currentTarget,t=y.indexOf(n),r=m[t].value;C(r),null!=f&&(w(f,r),setTimeout((function(){var e,t,r,a,c,u,s,l;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,c=e.right,u=window,s=u.innerHeight,l=u.innerWidth,t>=0&&c<=l&&a<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case o:var r=y.indexOf(e.target)+1;t=y[r]||y[0];break;case l:var a=y.indexOf(e.target)-1;t=y[a]||y[y.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":t},p)},m.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":v===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:g,onClick:g},t)}))),n?(0,r.cloneElement)(F.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},F.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},4179:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(void 0);n.Z=r},8214:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return f},default:function(){return d}});var r=t(2122),a=t(9756),c=(t(7294),t(3905)),u=t(1137),s=t(1871),i=["components"],l={},o="Function Descriptors",m={unversionedId:"guide/schema/funcdesc",id:"guide/schema/funcdesc",isDocsHomePage:!1,title:"Function Descriptors",description:"The schema tool provides us with an easy way to access to smart contract functions through",source:"@site/docs/guide/schema/funcdesc.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/funcdesc",permalink:"/docs/guide/schema/funcdesc",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/schema/funcdesc.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Token Transfers",permalink:"/docs/guide/schema/transfers"},next:{title:"Calling Functions",permalink:"/docs/guide/schema/call"}},f=[],p={toc:f};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"function-descriptors"},"Function Descriptors"),(0,c.kt)("p",null,"The schema tool provides us with an easy way to access to smart contract functions through\nso-called ",(0,c.kt)("em",{parentName:"p"},"function descriptors"),". These are structures that provide access to the optional\nparams and results maps through strict compile-time checked interfaces. They will also\nallow you to initiate the function by calling it synchronously or posting a request to run\nit asynchronously."),(0,c.kt)("p",null,"The schema tool will generate a specific function descriptor for each func and view. It\nwill also generate an interface called ScFuncs that can be used to create and initialize\neach function descriptor. Here is the code generated for the ",(0,c.kt)("inlineCode",{parentName:"p"},"dividend")," example\nin ",(0,c.kt)("inlineCode",{parentName:"p"},"contract.rs"),":"),(0,c.kt)(u.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,c.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package dividend\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\ntype DivideCall struct {\n    Func *wasmlib.ScFunc\n}\n\ntype InitCall struct {\n    Func   *wasmlib.ScInitFunc\n    Params MutableInitParams\n}\n\ntype MemberCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableMemberParams\n}\n\ntype SetOwnerCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableSetOwnerParams\n}\n\ntype GetFactorCall struct {\n    Func    *wasmlib.ScView\n    Params  MutableGetFactorParams\n    Results ImmutableGetFactorResults\n}\n\ntype GetOwnerCall struct {\n    Func    *wasmlib.ScView\n    Results ImmutableGetOwnerResults\n}\n\ntype Funcs struct{}\n\nvar ScFuncs Funcs\n\nfunc (sc Funcs) Divide(ctx wasmlib.ScFuncCallContext) *DivideCall {\n    return &DivideCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncDivide)}\n}\n\nfunc (sc Funcs) Init(ctx wasmlib.ScFuncCallContext) *InitCall {\n    f := &InitCall{Func: wasmlib.NewScInitFunc(ctx, HScName, HFuncInit, keyMap[:], idxMap[:])}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) Member(ctx wasmlib.ScFuncCallContext) *MemberCall {\n    f := &MemberCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncMember)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) SetOwner(ctx wasmlib.ScFuncCallContext) *SetOwnerCall {\n    f := &SetOwnerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetOwner)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) GetFactor(ctx wasmlib.ScViewCallContext) *GetFactorCall {\n    f := &GetFactorCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetFactor)}\n    f.Func.SetPtrs(&f.Params.id, &f.Results.id)\n    return f\n}\n\nfunc (sc Funcs) GetOwner(ctx wasmlib.ScViewCallContext) *GetOwnerCall {\n    f := &GetOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetOwner)}\n    f.Func.SetPtrs(nil, &f.Results.id)\n    return f\n}\n'))),(0,c.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"use std::ptr;\n\nuse wasmlib::*;\n\nuse crate::consts::*;\nuse crate::params::*;\nuse crate::results::*;\n\npub struct DivideCall {\n    pub func: ScFunc,\n}\n\npub struct InitCall {\n    pub func:   ScFunc,\n    pub params: MutableInitParams,\n}\n\npub struct MemberCall {\n    pub func:   ScFunc,\n    pub params: MutableMemberParams,\n}\n\npub struct SetOwnerCall {\n    pub func:   ScFunc,\n    pub params: MutableSetOwnerParams,\n}\n\npub struct GetFactorCall {\n    pub func:    ScView,\n    pub params:  MutableGetFactorParams,\n    pub results: ImmutableGetFactorResults,\n}\n\npub struct ScFuncs {\n}\n\nimpl ScFuncs {\n    pub fn divide(_ctx: & dyn ScFuncCallContext) -> DivideCall {\n        DivideCall {\n            func: ScFunc::new(HSC_NAME, HFUNC_DIVIDE),\n        }\n    }\n    pub fn init(_ctx: & dyn ScFuncCallContext) -> InitCall {\n        let mut f = InitCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_INIT),\n            params: MutableInitParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn member(_ctx: & dyn ScFuncCallContext) -> MemberCall {\n        let mut f = MemberCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_MEMBER),\n            params: MutableMemberParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn set_owner(_ctx: & dyn ScFuncCallContext) -> SetOwnerCall {\n        let mut f = SetOwnerCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_SET_OWNER),\n            params: MutableSetOwnerParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn get_factor(_ctx: & dyn ScViewCallContext) -> GetFactorCall {\n        let mut f = GetFactorCall {\n            func:    ScView::new(HSC_NAME, HVIEW_GET_FACTOR),\n            params:  MutableGetFactorParams { id: 0 },\n            results: ImmutableGetFactorResults { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);\n        f\n    }\n}\n")))),(0,c.kt)("p",null,"As you can see a struct has been generated for each of the funcs and views. Note that the\nstructs only provide access to ",(0,c.kt)("inlineCode",{parentName:"p"},"params")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"results")," when these are specified for the\nfunction. Also note that each struct has a ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member that can be used to initiate the\nfunction call in certain ways. The ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member will be of type ScFunc or ScView,\ndepending on whether the function is a func or a view."),(0,c.kt)("p",null,"The ScFuncs struct provides a member function for each func or view that will create their\nrespective function descriptor, initialize it properly, and returns it."),(0,c.kt)("p",null,"In the next section we will look at how to use function descriptors to call a smart\ncontract function synchronously."))}d.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return o},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},o=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),f=l(t),p=a,d=f["".concat(i,".").concat(p)]||f[p]||m[p]||c;return t?r.createElement(d,u(u({ref:n},o),{},{components:t})):r.createElement(d,u({ref:n},o))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,u=new Array(c);u[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<c;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);