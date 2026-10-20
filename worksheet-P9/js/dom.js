import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const formulir = document.querySelector("form");
const tombolKirim = formulir?.querySelector('button[type="submit"]');

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(daftar) {
  if (!wadah) return;
  wadah.textContent = "";

  if (daftar.length === 0) {
    if (kosong) kosong.hidden = false;
    return;
  }
  if (kosong) kosong.hidden = true;

  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Render awal
render(daftarProyek);

// Filter proyek
if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    tandaiTombolAktif(tombol);

    const kategori = tombol.dataset.kategori;
    const terpilih = daftarProyek.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );

    render(terpilih);
  });
}

// Logika Validasi Tombol Kirim (D.3)
function periksaKelayakanForm() {
  if (formulir && tombolKirim) {
    tombolKirim.disabled = !formulir.checkValidity();
  }
}

if (formulir && tombolKirim) {
  // Cek saat pertama kali dimuat
  periksaKelayakanForm();

  // Cek setiap kali input diisi / diubah
  formulir.addEventListener("input", periksaKelayakanForm);

  // Cegah pengiriman jika belum valid
  formulir.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}