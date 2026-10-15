import { pilihKategori, aturUlang } from './state.js';

export function pasangPendengar() {
  const tombolFilter = document.querySelectorAll('#filter button[data-kategori]');

  tombolFilter.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
      const kategori = tombol.dataset.kategori;
      if (kategori) {
        pilihKategori(kategori);
      }
    });
  });

  const tombolReset = document.querySelector('#btn-reset');
  if (tombolReset) {
    tombolReset.addEventListener('click', function () {
      aturUlang();
    });
  }
}