import { ambilNotisia } from './api.js';

// --- Variabel & Profil ---
const nama = "Bima";
const jumlahProyek = 3;
let pilihanAktif = "semua";

console.log(typeof nama);
console.log(typeof jumlahProyek);

const profil = {
  nama: "Bima Gusti Ramadhan",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export const daftarProyek = [
  { judul: "UI Aplikasi Pendeteksi kualitas air", tahun: 2025, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

const kalimat = `Halo, nama saya ${profil.nama}, Saya seorang ${profil.peran} dan sedang belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama}  — ${peran}`;
}

function formatListKeahlian(daftarKeahlian) {
  return daftarKeahlian.map(item => item.toUpperCase()).join(", ");
}

console.log(buatPerkenalan(profil));
console.log(formatListKeahlian(profil.keahlian));

console.log(buatPerkenalan({ nama: "Bima", peran: "Mahasiswa" }));
console.log(buatPerkenalan({ nama: "Ehong", peran: "Programmer" }));
console.log(buatPerkenalan({ nama: "Rahman", peran: "Designer" }));

console.table(profil.keahlian);
console.table(daftarProyek);

// --- Simulasi Pengaksesan Peta Data C.2 ---
const dataUji = {
  penulis: { nama: "Bima", peran: "Mahasiswa" },
  daftarNotisia: ["Pengumuman 1", "Pengumuman 2"],
  jumlahData: 100,
  statusAktif: true
};

console.log("Nama Penulis:", dataUji.penulis.nama);
dataUji.daftarNotisia.forEach((item) => {
  console.log("Isi Notisia:", item);
});
console.log("Jumlah Data:", dataUji.jumlahData);
console.log("Status Aktif:", dataUji.statusAktif);

// --- D.1 Telusuri Larik dan Gambar Kartu ---
const wadah = document.querySelector('#daftar');

function gambar(daftar) {
  wadah.textContent = '';

  daftar.forEach(function (n) {
    const kartu = document.createElement('article');
    const judul = document.createElement('h3');

    // Gunakan n.titulu jika ada, atau n.title dari JsonPlaceholder API
    judul.textContent = n.titulu || n.title;

    kartu.appendChild(judul);
    wadah.appendChild(kartu);
  });
}

async function tampilkan() {
  if (!wadah) return;
  wadah.textContent = 'Memuat...';

  try {
    const daftar = await ambilNotisia();

    if (!daftar || daftar.length === 0) {
      wadah.textContent = 'Belum ada notisia';
      return;
    }

    gambar(daftar);
  } catch (galat) {
    wadah.textContent = 'Gagal memuat data: ' + galat.message;
  }
}

tampilkan();