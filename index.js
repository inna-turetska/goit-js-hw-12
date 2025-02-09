import{S as n}from"./assets/vendor-DZKIp1cr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=[{pct:"../img/projects/project-1.jpg",pct2x:"../img/projects/project-1@2x.jpg"},{pct:"../img/projects/project-2.jpg",pct2x:"../img/projects/project-2@2x.jpg"},{pct:"../img/projects/project-3.jpg",pct2x:"../img/projects/project-3@2x.jpg"}],l=document.querySelector(".projects-list"),a=document.querySelector(".swiper-button-prev"),u=document.querySelector(".swiper-button-next");function d(o){return o.map(r=>` <li class="projects-cards swiper-slide">
          <div class="project-top-card">
            <ul class="project-tags">
              <li class="project-tag">#react</li>
              <li class="project-tag">#js</li>
              <li class="project-tag">#node js</li>
              <li class="project-tag">#git</li>
            </ul>
            <h3 class="projects-text">
              Programming Across Borders: Ideas, Technologies, Innovations
            </h3>
            <a target="_blank" href="https://github.com/SerhiiShevchenkoGRV/ProfIT-project01" class="project-button">See projects</a>
          </div>

          <div class="project-bottom-card">
           <img class="project-img"
              srcset="${r.pct} 1x, ${r.pct2x} 2x"
              src="${r.pct}" 
              alt="Project image" />
          </div>
        </li>`).join("")}l.innerHTML=d(p);document.addEventListener("DOMContentLoaded",function(){const o=new n(".swiper",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{forceToAxis:!0,sensitivity:1,invert:!1},touchEventsTarget:"container",simulateTouch:!0,grabCursor:!0});o.on("slideChange",function(){a.classList.toggle("custom-disabled",o.isBeginning),u.classList.toggle("custom-disabled",o.isEnd)})});
//# sourceMappingURL=index.js.map
