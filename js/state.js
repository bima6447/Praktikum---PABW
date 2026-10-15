// js/state.js
import { render } from './dom.js';

export const state = {
  daftarProyek: [],
  kategoriAktif: 'semua'
};

// Fungsi pengubah kategori sekaligus memicu render
export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}

// Fungsi pengubah data proyek (bila digunakan dari API/app.js)
export function isiDaftarProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}