import{a as L,i as c,S as g}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=(r,s)=>{const o={params:{q:encodeURIComponent(r),key:"48226590-99b6af351d6e3a0b674791be6",per_page:15,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}};return L.get("https://pixabay.com/api/",o)},y=r=>`
    <li class="gallery-card">
      <a href="${r.largeImageURL}" target="_blank">
        <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <p>Likes: ${r.likes}  Views: ${r.views}  Comments: ${r.comments}  Downloads: ${r.downloads}</p>
    </li>`,h=document.querySelector(".search-form"),m=document.querySelector(".gallery"),a=document.querySelector(".loader"),n=document.querySelector(".load-button");let l=1,d="";const b=async r=>{try{if(r.preventDefault(),d=r.currentTarget.elements.user_query.value.trim(),d===""){c.error({message:"Please fill the form",position:"topRight"});return}l=1,n.classList.add("is-hidden"),a.classList.remove("is-hidden");const{data:s}=await p(d,l);if(s.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.innerHTML="",a.classList.add("is-hidden"),h.reset();return}const o=Math.ceil(s.totalHits/15),i=s.hits.map(t=>y(t)).join("");m.innerHTML=i,a.classList.add("is-hidden"),o>1&&(n.classList.remove("is-hidden"),n.addEventListener("click",()=>f(o))),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),h.reset()}catch(s){console.log(s),c.error({message:"Something went wrong, please try again later.",position:"topRight"}),a.classList.add("is-hidden")}},f=async r=>{try{l++,a.classList.remove("is-hidden");const{data:s}=await p(d,l),o=s.hits.map(t=>y(t)).join("");m.insertAdjacentHTML("beforeend",o),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh();const e=document.querySelector(".gallery-card");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,left:0,behavior:"smooth"})}a.classList.add("is-hidden"),l>=r&&(c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.classList.add("is-hidden"),n.removeEventListener("click",()=>f(r)))}catch(s){console.log(s),a.classList.add("is-hidden")}};h.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
