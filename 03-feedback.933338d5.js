var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=a||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return f.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,u=setTimeout(S,t),v?g(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-c>=i}function S(){var e=d();if(O(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return b?s(n,i-(e-c)):n}(e))}function h(e){return u=void 0,y&&o?g(e):(o=r=void 0,a)}function T(){var e=d(),n=O(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(b)return u=setTimeout(S,t),g(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=p(t)||0,m(n)&&(v=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:h(d())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=m(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y=b.querySelector('input[name="email"]'),g=b.querySelector('textarea[name="message"]');document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);y.value=t.email,g.value=t.message}}));const j=_.throttle((()=>{const e={email:y.value,message:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);b.addEventListener("input",j),b.addEventListener("submit",(e=>{e.preventDefault(),y.value="",g.value="";const t={email:y.value,message:g.value};console.log(t),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.933338d5.js.map