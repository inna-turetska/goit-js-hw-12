import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { fetchImages } from './js/pixabay-api.js';
import { createGalleryCard } from "./js/render-functions.js";

const searchFormEl = document.querySelector(".search-form");
const galleryEl = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadButton = document.querySelector(".load-button");

let page = 1;
let query = "";

const onSearchFormSubmit = async (event) => {
  try {
    event.preventDefault();

    query = event.currentTarget.elements.user_query.value.trim();

    if (query === "") {
      iziToast.error({
        message: "Please fill the form",
        position: "topRight",
      });
      return;
    }

    page = 1;
    loadButton.classList.add("is-hidden");
    loader.classList.remove("is-hidden");

    const { data } = await fetchImages(query, page);

    if (data.total === 0) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });

      galleryEl.innerHTML = "";
      loader.classList.add("is-hidden");
      searchFormEl.reset();
      return;
    }


    const totalPages = Math.ceil(data.totalHits / 15); 

    const galleryMarkup = data.hits.map(el => createGalleryCard(el)).join('');
    galleryEl.innerHTML = galleryMarkup;

    loader.classList.add("is-hidden");
   
    
    if (totalPages > 1) {
      loadButton.classList.remove("is-hidden");
      loadButton.addEventListener("click", () => onLoadBtnClick(totalPages));
    }

    const lightbox = new SimpleLightbox(".gallery a", { captionsData: 'alt', captionDelay: 250 });
    lightbox.refresh();

    searchFormEl.reset();
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: "Something went wrong, please try again later.",
      position: "topRight",
    });
    loader.classList.add("is-hidden");
  }
};

const onLoadBtnClick = async (totalPages) => {
  try {
    page++;

    loader.classList.remove("is-hidden");

    const { data } = await fetchImages(query, page);
    const galleryMarkup = data.hits.map(el => createGalleryCard(el)).join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

    const lightbox = new SimpleLightbox(".gallery a", { captionsData: 'alt', captionDelay: 250 });
    lightbox.refresh();

    const galleryItem = document.querySelector(".gallery-card");
    if (galleryItem) {
      const itemHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: itemHeight * 2,
        left: 0,
        behavior: "smooth"
      });
    }
  
    
    loader.classList.add("is-hidden");

    
    if (page >= totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
      loadButton.classList.add("is-hidden");
      loadButton.removeEventListener("click", () => onLoadBtnClick(totalPages));
    }
  } catch (err) {
    console.log(err);
    loader.classList.add("is-hidden");
  }
};

searchFormEl.addEventListener("submit", onSearchFormSubmit);