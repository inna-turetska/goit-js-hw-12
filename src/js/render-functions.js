export const createGalleryCard = imgInfo => {
   return `
    <li class="gallery-card">
      <a href="${imgInfo.largeImageURL}" target="_blank">
        <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
      </a>
      <p>Likes: ${imgInfo.likes}  Views: ${imgInfo.views}  Comments: ${imgInfo.comments}  Downloads: ${imgInfo.downloads}</p>
    </li>`;
};


