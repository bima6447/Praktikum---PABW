# Praktikum---PABW

## Deklarasi Penggunaan AI

Bagian yang dibantu AI : Referensi pembuatan fungsi murni formatListKeahlian, Analisis dan solusi debugging saat terjadi galat ReferenceError dan SyntaxError di Console, Penjelasan konsep seperti spread operator, pure function, dan array methods

Bagian yang mengerjakan sendiri : Penyusunan struktur berkas dan HTML, Deklarasi variabel data utama di js/app.js, Eksekusi pengujian kode dan screenshot di DevTools Console browser, mengisi jawaban lembar kerja pertemuan 8

Bagian yang Dikerjakan Mandiri
- Menyusun struktur awal HTML (`index.html`), termasuk pengisian data diri, riwayat pendidikan, keahlian, dan penambahan bagian semantik baru.
- Membuat struktur folder proyek dan mengaitkan berkas-berkas CSS (`tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`).
- Mengelola data proyek awal pada berkas `js/app.js`.
- Melakukan pengujian (*testing*) fungsionalitas filter dan validasi formulir secara langsung di browser.

Bagian yang Dibantu AI
- Refactoring & Troubleshooting JavaScript (`js/dom.js`): Membantu menyusun fungsi `render()`, logika event delegation pada tombol filter, dan integrasi penanda tombol aktif (`tandaiTombolAktif`).
- Validasi Formulir & Bug Fixing: Mengidentifikasi dan membenahi kesalahan penulisan regex `pattern` NIM pada `index.html`, menerapkan atribut `novalidate`, serta menambahkan logika real-time check (`checkValidity()`) untuk mengontrol status tombol kirim.
- Styling CSS: Memberikan saran aturan CSS untuk kelas `.aktif` dan status `button:disabled` pada `css/komponen.css`.
- Pemahaman Konsep & Worksheet: Membantu menjelaskan jawaban analisis terkait manipulasi DOM, event delegation, penggunaan `textContent` vs `innerHTML`, serta penanganan kasus eror pada worksheet.

## Pertemuan 10 - Fetch API & DOM
Dalam praktikum ini, saya menggunakan AI untuk membantu:
1. Menjelaskan konsep `fetch` API dan manipulasi DOM.
2. Menyelesaikan error *Uncaught SyntaxError* pada impor modul.
3. Membatasi tampilan data kartu agar rapi.
git add .
git commit -m "P10: periksa, lalu simpan"
git push origin main

## Deklarasi Penggunaan AI - Pertemuan 11

### Bagian yang Dibantu AI
* **Refaktorisasi & Debugging Logika Filter (`js/dom.js`)**: Penambahan logika penentu (*fallback*) kategori berbasis ID (ID genap untuk Web, ID ganjil untuk Data) untuk menangani data API yang belum memiliki properti `kategori`.
* **Validasi Skema & Penanganan Eror (`js/state.js`)**: Penyempurnaan fungsi `muat()` menggunakan struktur `try...catch` dan pengecekan nomor versi (`VERSI = 2`) untuk mengantisipasi data simpanan yang rusak atau menggunakan skema lama[cite: 5, 6].
* **Penyusunan Jawaban Evaluasi**: Pengformulasian jawaban untuk pertanyaan refleksi mengenai batas penyimpanan klien, kebiasaan aman *import/export* ES Modules, dan alasan keamanan data sensitif[cite: 5, 6].

### Bagian yang Dikerjakan Mandiri
* **Implementasi Kode Utama**: Penulisan dan struktur awal berkas `index.html`, `js/dom.js`, `js/state.js`, dan `js/events.js`.
* **Pengujian Interaktif & Simulasi Eror**:
  * Pengujian fitur filter dinamis dan fungsi tombol **Atur Ulang** di peramban.
  * Pengujian ketahanan `localStorage` saat tab ditutup dan dibuka kembali[cite: 4].
  * Eksekusi simulasi pembuat data rusak (`localStorage.setItem(...)`) via DevTools Console[cite: 6, 7].
* **Dokumentasi & Laporan**: Pengambilan tangkapan layar (*screenshot*) bukti pengujian serta penyelesaian seluruh lembar kerja praktikum[cite: 6].