// js/dom.js

const wadah = document.querySelector('#daftar');
const kosong = document.querySelector('#pesan-kosong');

// Fungsi pembantu untuk membuat elemen kartu/item HTML
function buatKartu(item) {
  const li = document.createElement('li');
  const kartu = document.createElement('article');
  kartu.classList.add('kartu');

  const judul = document.createElement('h3');
  judul.textContent = item.titulu || item.title || item.judul;

  kartu.appendChild(judul);
  li.appendChild(kartu);
  return li;
}

// Fungsi saring membaca kategori dari state.kategoriAktif
function saring(state) {
  const daftar = state.daftarProyek || [];
  if (!state.kategoriAktif || state.kategoriAktif === 'semua') {
    return daftar;
  }
  return daftar.filter(function (item) {
    if (item.kategori) {
      return item.kategori === state.kategoriAktif;
    }
    return state.kategoriAktif === 'web' ? item.id % 2 === 0 : item.id % 2 !== 0;
  });
}

export function render(state) {
  if (!wadah) return;

  // 1. Kosongkan wadah
  wadah.textContent = "";

  const tampil = saring(state);

  // 2. Periksa keadaan kosong
  if (tampil.length === 0) {
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;

  // 3. Isi ulang wadah
  tampil.slice(0, 6).forEach((item) => wadah.append(buatKartu(item)));
}