import Swiper from 'swiper/bundle';


const projectImages = [
    {
        pct:"../img/projects/project-1.jpg",
        pct2x: "../img/projects/project-1@2x.jpg",
    },
     {
        pct:"../img/projects/project-2.jpg",
        pct2x: "../img/projects/project-2@2x.jpg",
    },
      {
        pct:"../img/projects/project-3.jpg",
        pct2x: "../img/projects/project-3@2x.jpg",
    }
]



const projectCards = document.querySelector(".projects-list")
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

function projectGalleryImages(img) {
    return img.map((image) =>
        ` <li class="projects-cards swiper-slide">
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
              srcset="${image.pct} 1x, ${image.pct2x} 2x"
              src="${image.pct}" 
              alt="Project image" />
          </div>
        </li>`
    ).join("");
}


projectCards.innerHTML = projectGalleryImages(projectImages);

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            invert: false
        },
    
        touchEventsTarget: 'container',
        simulateTouch: true,
        grabCursor: true,
    });

    swiper.on('slideChange', function () {
        
        prevButton.classList.toggle('custom-disabled', swiper.isBeginning);
        nextButton.classList.toggle('custom-disabled', swiper.isEnd);
    });
    
})