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
                data-source="${original}"
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

//прослуховування на ul
gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  // console.log(evt.target.nodeName);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onKeyPress);
      },
    }
  );

  function onKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }

  instance.show();
}

console.log(galleryItems);
