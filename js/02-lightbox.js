import { galleryItems } from "./gallery-items.js";
// Change code below this line

function makeImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
      </li>`;
    })
    .join("");
}

const gallery = document.querySelector(".gallery");
const images = makeImageGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", images);
// console.log(makeImageGallery(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
