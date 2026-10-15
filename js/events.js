// js/events.js
import { state } from './state.js';
import { render } from './dom.js';

export function pasangPendengar() {
  const tombolFilter = document.querySelectorAll('#filter button');

  tombolFilter.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
      tombolFilter.forEach(function (b) {
        b.classList.remove('aktif');
      });
      tombol.classList.add('aktif');

      const kategori = tombol.dataset.kategori;
      state.kategoriAktif = kategori;

      // Gambar ulang tampilan berdasarkan state baru
      render(state);
    });
  });
}