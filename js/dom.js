import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

// Fungsi untuk merender daftar proyek ke DOM
function render(daftar) {
  wadah.innerHTML = "";
  if (daftar.length === 0) {
    if (kosong) kosong.hidden = false;
  } else {
    if (kosong) kosong.hidden = true;
    daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
  }
}

// Fungsi penanda tombol aktif (C.2)
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Render awal saat halaman dibuka
render(daftarProyek);

// Event listener filter (C.1)
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