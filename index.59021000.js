var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequirea340;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var d={id:e,exports:{}};return o[e]=d,t.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequirea340=t);var d=t("bk7Qu"),l=t("5G98m");(()=>{const e={openModalBtn:document.querySelector(".footer__items--ref"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function o(){const o=document.documentElement.style.getPropertyValue("--scroll-y");return e.modal.classList.toggle("is-hidden"),window.addEventListener("keydown",t),e.modal.classList.contains("is-hidden")?(n("auto","","",""),e.modal.classList.contains("is-hidden")&&window.removeEventListener("keydown",t),window.scrollTo(0,-1*parseInt(e.body.style.top||"0"))):((0,l.funcControlArts)(document.querySelectorAll(".t-js")),n("scroll",`${o}`,`${(0,d.controlScreen)()}`,"fixed"))}function n(o,n,t,d){return e.body.style.overflowY=`${o}`,e.body.style.position=`${d}`,e.body.style.width=`${t}`,e.body.style.top=`-${n}`}function t(n){if("Escape"===n.code)return o(),console.log("esc"),e.modal.classList.contains("is-hidden")&&window.removeEventListener("keydown",t)}e.openModalBtn.addEventListener("click",o),e.modal.addEventListener("click",(function(n){if(n.target===n.currentTarget)return o(),e.modal.classList.contains("is-hidden")&&window.removeEventListener("keydown",t)})),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.59021000.js.map
