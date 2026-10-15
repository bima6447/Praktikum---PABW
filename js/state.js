import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
  const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

// Fungsi muat diperbarui sesuai modul E.2
export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); // bentuk lama: buang
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI); // isi rusak: buang
    return null;
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  render(state);
}

const simpanan = muat();

export const state = {
  daftarProyek: [],
  kategoriAktif: simpanan?.kategoriAktif || 'semua'
};

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function isiDaftarProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}