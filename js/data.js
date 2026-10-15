export const daftarProyek = [
  { id: 1, judul: "UI Aplikasi Pendeteksi Kualitas Air", kategori: "web" },
  { id: 2, judul: "Katalog Produk", kategori: "data" },
];

// Fungsi murni pemformat
export function buatPerkenalan(nama, peran) {
  return `Halo, saya ${nama} sebagai ${peran}.`;
}

export function formatKeahlian(daftarKeahlian) {
  return daftarKeahlian.join(', ');
}

export function formatTanggal(nilai) {
  return new Date(nilai).toLocaleDateString('id-ID');
}