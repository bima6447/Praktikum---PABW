// js/dom.js

const wadah = document.querySelector('#daftar');
const kosong = document.querySelector('#pesan-kosong');

function buatKartu(item) {
  const li = document.createElement('li');
  const kartu = document.createElement('article');
  kartu.classList.add('kartu');

  const judul = document.createElement('h3');
  judul.textContent = item.judul || item.title || item.titulu;

  kartu.appendChild(judul);
  li.appendChild(kartu);
  return li;
}

function saring(state) {
  const daftar = state.daftarProyek || [];
  if (!state.kategoriAktif || state.kategoriAktif === 'semua') {
    return daftar;
  }
  return daftar.filter(function (item) {
    // Jika data dari API memiliki properti kategori, gunakan nilai tersebut
    if (item.kategori) {
      return item.kategori === state.kategoriAktif;
    }
    // Jika data API tidak memiliki properti kategori, gunakan penentu bawaan modul (ID genap = web, ID ganjil = data)
    return state.kategoriAktif === 'web' ? item.id % 2 === 0 : item.id % 2 !== 0;
  });
}

export function render(state) {
  const tombolFilter = document.querySelectorAll('#filter button[data-kategori]');
  tombolFilter.forEach((tombol) => {
    if (tombol.dataset.kategori === state.kategoriAktif) {
      tombol.classList.add('aktif');
    } else {
      tombol.classList.remove('aktif');
    }
  });

  if (!wadah) return;

  wadah.textContent = "";

  const tampil = saring(state);

  if (tampil.length === 0) {
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;

  tampil.slice(0, 6).forEach((item) => wadah.append(buatKartu(item)));
}