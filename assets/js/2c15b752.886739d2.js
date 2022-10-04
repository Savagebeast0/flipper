"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5313],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>m,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,g=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},52373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r,o=t(83117),i=t(80102),a=(t(67294),t(3905)),l=t(44996),c=["components"],s={id:"contributing",title:"Contributing to the Codebase"},p=void 0,u={unversionedId:"internals/contributing",id:"internals/contributing",title:"Contributing to the Codebase",description:"This page contains information that helps you make contributions to the Flipper codebase.",source:"@site/../docs/internals/contributing.mdx",sourceDirName:"internals",slug:"/internals/contributing",permalink:"/docs/internals/contributing",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/internals/contributing.mdx",tags:[],version:"current",frontMatter:{id:"contributing",title:"Contributing to the Codebase"},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/internals/"},next:{title:"Formatting Tips",permalink:"/docs/internals/documentation-formatting"}},m={},d=[{value:"Changelog Entries",id:"changelog-entries",level:2},{value:"Implementation",id:"implementation",level:3}],g=(r="FbInternalOnly",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),b={toc:d};function h(e){var n=e.components,t=(0,i.Z)(e,c);return(0,a.mdx)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page contains information that helps you make contributions to the Flipper codebase."),(0,a.mdx)("h2",{id:"changelog-entries"},"Changelog Entries"),(0,a.mdx)("p",null,"A changelog dialog is displayed when a new version of Flipper is started for the first time. It can also be seen by clicking on the button next to the version number in the 'Welcome' screen."),(0,a.mdx)("img",{alt:"The changelog dialog in Flipper",src:(0,l.default)("img/changelog.png")}),(0,a.mdx)("p",null,"The content is automatically generated during the release process. You should always include a changelog entry if there is a user-visible change in your commit."),(0,a.mdx)("p",null,"To contribute a message, include a note in the body of your commit like in example below."),(0,a.mdx)("admonition",{type:"note"},(0,a.mdx)("p",{parentName:"admonition"},"Unlike other blocks that Phabricator expects (such as 'Summary' and 'Test Plan'), the changelog can only be a single line. The spelling is not case-sensitive.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"[layout] Add Unicorn support\n\nSummary:\nFinally, the moment we've all been waiting for: Unicorn support!\n\nChangelog: Unicorns can be inspected in the Layout Plugin\n\nTest Plan:\n...\n")),(0,a.mdx)(g,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"For internal-only changes, prefix your line with ",(0,a.mdx)("inlineCode",{parentName:"p"},"Facebook Changelog:"),"."),(0,a.mdx)("p",null,"Entries made this way will only show up in internal builds.")),(0,a.mdx)("h3",{id:"implementation"},"Implementation"),(0,a.mdx)("p",null,"You can find the code for the changelog generation in ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/desktop/scripts/generate-changelog.js"},"desktop/scripts/generate-changelog.js"),"."))}h.isMDXComponent=!0}}]);