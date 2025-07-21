import{a as u,S as d,i as s}from"./assets/vendor-IIuzG3t8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const f="https://pixabay.com/api/",h="51391206-f7366ee1e78940710a4e5645c";function p(r){return u.get(f,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(e=>e.data.hits).catch(e=>(console.error("Error fetching images:",e.message),[]))}let m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){return document.querySelector(".gallery"),console.log(r),r.map(e=>`
        <li class='item'>
          <a class='gallery-item' href='${e.largeImageURL}'>
            <img 
              class='gallery-img' 
              src='${e.webformatURL}' 
              alt='${e.tags}' 
              loading="lazy" 
            />
          </a>
          <div class='info'>
            <ul class='info-list'>
              <li><h3>Likes</h3><p>${e.likes}</p></li>
              <li><h3>Views</h3><p>${e.views}</p></li>
              <li><h3>Comments</h3><p>${e.comments}</p></li>
              <li><h3>Downloads</h3><p>${e.downloads}</p></li>
            </ul>
          </div>
        </li>
      `).join("")}function y(){m.refresh()}function L(){const r=document.querySelector(".gallery");r.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}const w=document.querySelector(".form"),c=document.querySelector('input[name="search-text"]');w.addEventListener("submit",q);function q(r){r.preventDefault(),L();const e=c.value.trim();if(!e){s.warning({title:"Error",message:"Please type something to search",position:"topRight"}),l();return}c.value="",S(),p(e).then(i=>{if(i.length===0){s.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const n=g(i);document.querySelector(".gallery").innerHTML=n,y()}).catch(i=>{s.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"}),console.error(i)}).finally(()=>{l()})}
//# sourceMappingURL=index.js.map
