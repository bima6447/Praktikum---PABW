// src/state.js
import { reactive } from 'vue'
import { dataProyek } from './data.js'

export const state = reactive({
  daftarProyek: dataProyek,
  kategoriAktif: 'Semua',
  daftarKategori: ['Semua', 'Web', 'Mobile', 'UI/UX']
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}