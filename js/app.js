import { ambilNotisia } from './api.js';

// --- DI-EXPORT UNTUK DOM.JS ---
export const daftarProyek = [
  { judul: "UI Aplikasi Pendeteksi kualitas air", tahun: 2025, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

// --- LOGIKA RENDERING & FILTER ---
const wadah = document.querySelector('#daftar');
const tombolFilter = document.querySelectorAll('#filter button');
const pesanKosong = document.querySelector('#pesan-kosong');

let dataNotisia = [];

function gambar(daftar) {
  wadah.textContent = '';

  if (!daftar || daftar.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  // Tampilkan 6 data pertama agar rapi
  daftar.slice(0, 6).forEach(function (n) {
    const item = document.createElement('li');
    const kartu = document.createElement('article');
    kartu.classList.add('kartu');

    const judul = document.createElement('h3');
    judul.textContent = n.titulu || n.title;

    kartu.appendChild(judul);
    item.appendChild(kartu);
    wadah.appendChild(item);
  });
}

async function tampilkan() {
  if (!wadah) return;
  wadah.textContent = 'Memuat...';

  try {
    dataNotisia = await ambilNotisia();
    gambar(dataNotisia);
  } catch (galat) {
    wadah.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

tombolFilter.forEach(function (tombol) {
  tombol.addEventListener('click', function () {
    tombolFilter.forEach(function (b) {
      b.classList.remove('aktif');
    });
    tombol.classList.add('aktif');

    const kategori = tombol.dataset.kategori;
    if (kategori === 'semua') {
      gambar(dataNotisia);
    } else {
      const hasilFilter = dataNotisia.filter(function (item) {
        return kategori === 'web' ? item.id % 2 === 0 : item.id % 2 !== 0;
      });
      gambar(hasilFilter);
    }
  });
});

tampilkan();