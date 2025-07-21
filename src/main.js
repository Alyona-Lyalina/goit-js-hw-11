import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  createLightbox
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('input[name="search-text"]');

formEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  clearGallery();

  const searchQuery = inputEl.value.trim();

   if (!searchQuery) {
    iziToast.warning({
      title: 'Error',
      message: 'Please type something to search',
      position: 'topRight',
    });
    hideLoader();
    return;
   }
    
  inputEl.value = '';

  showLoader();

  getImagesByQuery(searchQuery)
    .then(res => {
      if (res.length === 0) {
        iziToast.info({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const markup = createGallery(res);
      document.querySelector('.gallery').innerHTML = markup;
      createLightbox();
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Try again later.',
        position: 'topRight',
      });
      console.error(err);
    })
    .finally(() => {
      hideLoader();
    });
}

