(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".pgn",type:"fraction",renderFraction:function(n,t){return'<span class="'+n+'"></span> <b class="light"><pre style="display:inline"> —— </pre></b> <span class="'+t+'"></span>'}},navigation:{nextEl:".btn-next",prevEl:".btn-prev"},effect:"coverflow",coverflowEffect:{rotate:50,slideShadows:!1}});var s=!0;window.addEventListener("scroll",function(){for(var n=document.querySelectorAll(".active"),t=0;t<n.length;t++){var o=n[t];if(c(o)&&s){for(var i=o.getElementsByClassName("data"),e=0;e<i.length;e++)f(i[e]);s=!1}}});function c(n){var t=n.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(n){var t=0,o=parseInt(n.innerText),i=1e3,e=10,r=(o-t)/(i/e),a=t,l=setInterval(function(){a+=r,n.innerText=Math.round(a),a>=o&&(clearInterval(l),n.innerText=o)},e)}
