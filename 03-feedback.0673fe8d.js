!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),v=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,s=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(h,t),s?j(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function h(){var e=p();if(S(e))return T(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?m(n,u-(e-c)):n}(e))}function T(e){return f=void 0,b&&r?j(e):(r=i=void 0,a)}function w(){var e=p(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(v)return f=setTimeout(h,t),j(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=g(t)||0,y(n)&&(s=!!n.leading,u=(v="maxWait"in n)?d(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function y(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=y(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),O=j.querySelector('input[name="email"]'),S=j.querySelector('textarea[name="message"]'),h="feedback-form-state";document.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem(h);if(e){var t=JSON.parse(e);O.value=t.email,S.value=t.message}}));var T=_.throttle((function(){var e={email:O.value,message:S.value};localStorage.setItem(h,JSON.stringify(e))}),500);j.addEventListener("input",T),j.addEventListener("submit",(function(e){e.preventDefault(),O.value="",S.value="";var t={email:O.value,message:S.value};console.log(t),localStorage.removeItem(h)}))}();
//# sourceMappingURL=03-feedback.0673fe8d.js.map