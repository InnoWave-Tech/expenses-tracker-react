(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(7782)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var u,a=(u=t(7294))&&u.__esModule?u:{default:u},i=t(6273),l=t(387),c=t(7190);var s={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),u=a.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],u=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):u||t}}),[n,e.href,e.as]),d=u.href,p=u.as,y=e.children,v=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var g=(r=a.default.Children.only(y))&&"object"===typeof r&&r.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),w=x[0],j=x[1],E=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);a.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,j,b,t,n]);var S={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,u,a,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),r[o?"replace":"push"](t,n,{shallow:u,locale:l,scroll:a}))}(e,n,d,p,v,h,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var O="undefined"!==typeof b?b:n&&n.locale,A=n&&n.isLocaleDomain&&i.getDomainLocale(p,O,n&&n.locales,n&&n.domainLocales);S.href=A||i.addBasePath(i.addLocale(p,O,n&&n.defaultLocale))}return a.default.cloneElement(r,S)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,n=u.useRef(),c=o(u.useState(!1),2),s=c[0],f=c[1],d=u.useCallback((function(e){n.current&&(n.current(),n.current=void 0),t||s||e&&e.tagName&&(n.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=l.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,u=n.observer,a=n.elements;return a.set(e,r),u.observe(e),function(){a.delete(e),u.unobserve(e),0===a.size&&(u.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,s]);return u.useEffect((function(){if(!i&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var u=t(7294),a=t(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map},7782:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),o=(t(3456),t(7294),t(1664)),u=t(387);function a(){var e=(0,u.useRouter)().pathname;return(0,n.jsxs)("div",{className:"bg-gray-500 text-white flex h-10 flex-row w-full pl-5 pr-5 items-center justify-center sticky top-0",children:[(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{className:"/"===e?"underline":"",children:"Home"})}),(0,n.jsx)("div",{className:"bg-gray-300 w-0.5 h-2/5 mr-3 ml-3"}),(0,n.jsx)(o.default,{href:"/expenses",children:(0,n.jsx)("a",{className:"/expenses"===e?"underline":"",children:"Expenses"})})]})}function i(e){return(0,n.jsxs)("div",{className:"h-screen",children:[(0,n.jsx)(a,{}),e.children]})}var l=t(2537);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}var f=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsx)(l.H,{children:(0,n.jsx)(i,{children:(0,n.jsx)(r,s({},t))})})}},2537:function(e,r,t){"use strict";t.d(r,{H:function(){return c},k:function(){return s}});var n=t(5893),o=t(7294);function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);a=!0);}catch(l){i=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i={expenses:{transportation:{starred:!1,used:26,budget:100},housing:{starred:!1,used:600,budget:600},food:{starred:!1,used:143,budget:360},amenities:{starred:!1,used:92,budget:80}},customExpenses:[],userName:"John Doe"},l=o.createContext(i);function c(e){var r=a(o.useState(i.expenses),2),t=r[0],u=r[1],c=a(o.useState(i.customExpenses),2),s=c[0],f=c[1],d=a(o.useState(i.userName),2),p=d[0];d[1];return(0,n.jsx)(l.Provider,{value:{expenses:t,customExpenses:s,userName:p,setExpenses:function(e){u(e)},setCustomExpenses:function(e){f(e)}},children:e.children})}function s(){return o.useContext(l)}},3456:function(){},1664:function(e,r,t){e.exports=t(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(387)}));var t=e.O();_N_E=t}]);