import { galleryItems } from "./gallery-items.js";
// Change code below this line

//створення розмітки
function makeImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="large-image.jpg"
                alt="${description}"
            />
        </a>
      </li>`;
    })
    .join("");
}

//рендерінг розмітки
const gallery = document.querySelector(".gallery");
const images = makeImageGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", images);
console.log(makeImageGallery(galleryItems));

//делегування на ul
gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
}

const instance = basicLightbox.create(`
     const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
    onShow: () => {
      document.addEventListener("keydown", keyEsc);
    },
    onClose: () => {
      document.removeEventListener("keydown", keyEsc);
    },
  });

  const keyEsc = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };
`);

instance.show();
