import axios from 'axios';

(function() {
  function installGallery() {
    getData();
  }

  function getData() {
    return axios.get('../gallery-items.json').then(response => {
      insertItems(response.data);
    });
  }

  function insertItems(galleryResponse) {
    let galleryContent = `<div class="close__wrapper">
                            <div class="close" id="close"></div>
                          </div>`;
    const galleryItems = Object.values(galleryResponse);

    galleryItems.forEach(galleryItem => {
      galleryContent += createGalleryItem(galleryItem);
    });
    outputGallerryContent(galleryContent);
  }

  function createGalleryItem(item) {
    return `<div class="main__gallery__item">
                <div class="main__gallery__item__image__wrapper">
                    <div class="grey"></div>
                    <img src="${
                      item.image
                    }" alt="" class="main__gallery__item__image">
                </div>
                <p class="main__gallery__item__text">${item.content}</p>
            </div>`;
  }

  function outputGallerryContent(galleryContent) {
    document.getElementById('galleryWrapper').innerHTML = galleryContent;
    addEventOnCollapsedGalleryButton();
  }

  function addEventOnCollapsedGalleryButton() {
    const showGalleryButton = document.getElementById('showGallery');
    const gallery = document.getElementById('galleryWrapper');
    const closeGalleryButton = document.getElementById('close');

    showGalleryButton.addEventListener('click', () => {
      gallery.classList.add('vissible');
      closeGalleryButton.classList.add('vissible');
    });
    closeGalleryButton.addEventListener('click', () => {
      gallery.classList.remove('vissible');
      closeGalleryButton.classList.remove('vissible');
    });
  }

  installGallery();
})();
