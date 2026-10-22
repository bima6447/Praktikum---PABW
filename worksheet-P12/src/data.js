import { ref } from 'vue'

export const kategoriAktif = ref('Semua')
export const daftarKategori = ['Semua', 'Web', 'Mobile', 'UI/UX', 'Film']

export const dataProyek = [
  { 
    id: 1, 
    judul: 'Aplikasi Pendeteksi Kualitas Air', 
    deskripsi: 'Sistem monitoring kualitas air.', 
    kategori: 'UI/UX' 
  },
  { 
    id: 2, 
    judul: 'Aplikasi Warmindo', 
    deskripsi: 'Aplikasi Warmindo Online.', 
    kategori: 'Mobile' 
  },
  { 
    id: 3, 
    judul: 'Film Dokumenter Tentang Budaya di Banjarnegara', 
    deskripsi: 'Film dokumenter melestarikan ebeg gading banjarnegara.', 
    kategori: 'Film' 
  }
]