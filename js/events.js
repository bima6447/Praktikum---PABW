// js/events.js
import { pilihKategori } from './state.js';

export function pasangPendengar() {
  const tombolFilter = document.querySelectorAll('#filter button');

  tombolFilter.forEach(function (tombol) {
    tombol.addEventListener('click', function () {
      tombolFilter.forEach(function (b) {
        b.classList.remove('aktif');
      });
      tombol.classList.add('aktif');

      const kategori = tombol.dataset.kategori;
      
      // Panggil fungsi pengubah dari state.js (tanpa ubah state & tanpa panggil render langsung)
      pilihKategori(kategori);
    });
  });
}