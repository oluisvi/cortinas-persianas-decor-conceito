const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('p');
document.querySelectorAll('.gallery-card').forEach((card) => {
  card.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = card.querySelector('img')?.alt || 'Foto de referência da Decor';
    lightboxCaption.textContent = card.dataset.caption || '';
    lightbox.showModal();
  });
});
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });
