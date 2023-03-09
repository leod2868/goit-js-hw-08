import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const items = galleryItems.map(({original, preview, description})=> {
  return `<a class="gallery__item" href="${original}" >
   <img
     class="gallery__image"
     src="${preview}"
     alt="${description}"/>
  </a>`}).join("");
    
const galleryBox = document.querySelector('.gallery');

galleryBox.innerHTML = items;


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });












console.log(galleryItems);
