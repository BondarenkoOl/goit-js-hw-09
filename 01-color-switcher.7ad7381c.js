const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;e.setAttribute("disabled",!0);let r=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),r=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.7ad7381c.js.map
