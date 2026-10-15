// js/dom.js

const wadah = document.querySelector('#daftar');
const pesanKosong = document.querySelector('#pesan-kosong');

export function render(state) {
  if (!wadah) return;
  wadah.textContent = '';

  let daftar = state.daftarProyek || [];

  // Filter data berdasarkan kategori yang sedang aktif di state
  if (state.kategoriAktif && state.kategoriAktif !== 'semua') {
    daftar = daftar.filter(function (item) {
      if (item.kategori) {
        return item.kategori === state.kategoriAktif;
      }
      // Logika penyaring API P10 (ID genap untuk 'web', ganjil untuk 'data')
      return state.kategoriAktif === 'web' ? item.id % 2 === 0 : item.id % 2 !== 0;
    });
  }

  if (daftar.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  daftar.slice(0, 6).forEach(function (n) {
    const item = document.createElement('li');
    const kartu = document.createElement('article');
    kartu.classList.add('kartu');

    const judul = document.createElement('h3');
    judul.textContent = n.titulu || n.title || n.judul;

    kartu.appendChild(judul);
    item.appendChild(kartu);
    wadah.appendChild(item);
  });
}