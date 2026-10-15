import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
  const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI));
  } catch {
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
  kategoriAktif: (simpanan && simpanan.versi === VERSI) ? simpanan.kategoriAktif : 'semua'
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