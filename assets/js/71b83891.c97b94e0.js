"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[141],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97700:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>f});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={id:"index",title:"Internals",sidebar_label:"Internals"},s=void 0,l={unversionedId:"internals/index",id:"internals/index",isDocsHomePage:!1,title:"Internals",description:"This part of the site is for those interested in how Flipper works, to help those wanting to modify the source code of the application itself.",source:"@site/../docs/internals/index.mdx",sourceDirName:"internals",slug:"/internals/index",permalink:"/docs/internals/index",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/internals/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Internals",sidebar_label:"Internals"},sidebar:"main",previous:{title:"Extending the Layout Inspector",permalink:"/docs/extending/layout-inspector"},next:{title:"Contributing to the Codebase",permalink:"/docs/internals/contributing"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This part of the site is for those interested in ",(0,i.mdx)("strong",{parentName:"p"},"how")," Flipper works, to help those wanting to modify the source code of the application itself."))}f.isMDXComponent=!0}}]);