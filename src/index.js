import galleryItems from '../gallery-items';

(function() {
  function installGallery() {
    insertItems();
  }

  function insertItems(galleryResponse) {
    let galleryContent = ``;

    galleryItems.forEach(galleryItem => {
      galleryContent += createGalleryItem(galleryItem);
    });
    outputGallerryContent(galleryContent);
  }

  function createGalleryItem(item) {
    return `<div class="main__gallery__item">
                <div 
                  class="main__gallery__item__image" 
                  style="background-image:url('${item.image}')">
                    <div class="grey"></div>
                </div>
                <p class="main__gallery__item__text">${item.content}</p>
            </div>`;
  }

  function outputGallerryContent(galleryContent) {
    document.getElementById('galleryWrapper').innerHTML = galleryContent;
  }

  installGallery();
})();
