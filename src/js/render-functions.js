import SimpleLightbox from 'simplelightbox';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(imgs) {
  const gallery = document.querySelector('.gallery');

  console.log(imgs);
  

  return imgs
    .map(
      img => `
        <li class='item'>
          <a class='gallery-item' href='${img.largeImageURL}'>
            <img 
              class='gallery-img' 
              src='${img.webformatURL}' 
              alt='${img.tags}' 
              loading="lazy" 
            />
          </a>
          <div class='info'>
            <ul class='info-list'>
              <li><h3>Likes</h3><p>${img.likes}</p></li>
              <li><h3>Views</h3><p>${img.views}</p></li>
              <li><h3>Comments</h3><p>${img.comments}</p></li>
              <li><h3>Downloads</h3><p>${img.downloads}</p></li>
            </ul>
          </div>
        </li>
      `
    )
    .join('');
}

export function createLightbox() {
  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('is-hidden'); 
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('is-hidden'); 
}