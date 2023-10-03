// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Отримання посилання на список галереї
const galleryList = document.querySelector('.gallery');

// Створення розмітки галереї
const galleryMarkup = galleryItems.map(item => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
}).join('');

// Додавання розмітки до списку галереї
galleryList.innerHTML = galleryMarkup;

// Створення нового екземпляру SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a');

// Додавання слухача подій для закриття модального вікна клавішею Escape
lightbox.on('show.simplelightbox', () => {
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      lightbox.close();
    }
  });
});

// Видалення слухача подій при закритті модального вікна
lightbox.on('close.simplelightbox', () => {
  window.removeEventListener('keydown', event => {
    if (event.key === 'Escape') {
      lightbox.close();
    }
  });
});

console.log(SimpleLightbox);
console.log(galleryItems);


