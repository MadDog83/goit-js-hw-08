function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function b(e,t,n){var r,o,i,f,a,u,c=0,l=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function h(){var e=p();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?v(n,i-(e-c)):n}(e))}function w(e){return a=void 0,b&&r?y(e):(r=o=void 0,f)}function T(){var e=p(),n=O(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=m(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(m(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},T.flush=function(){return void 0===a?f:w(p())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");let j={};!function(){const e=localStorage.getItem("feedback-form-state");if(e){j=JSON.parse(e);for(const[e,t]of Object.entries(j))y.elements[e].value=t}}(),y.addEventListener("input",e(t)((e=>{j={...j,[e.target.name]:e.target.value},localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=Object.values(j);return e.length>=2&&e.every((e=>""!==e))})()?(console.log(j),y.reset(),localStorage.removeItem("feedback-form-state"),j={}):alert("Будь ласка, заповніть принаймні два поля форми")}));
//# sourceMappingURL=03-feedback.1b7f3d30.js.map
