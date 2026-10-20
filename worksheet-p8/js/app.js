const nama = "Bima";
const jumlahProyek = 3;
let pilihanAktif = "semua";

console.log(typeof nama);
console.log(typeof jumlahProyek);
console.log(typeof belumDibuat);

const profil = {
    nama: "Bima Gusti Ramadhan",
    peran: "Mahasiswa Informatika",
    keahlian: ["HTML", "CSS", "JavaScript"],
};

const daftarProyek = [
    { judul: "Halaman Profil", tahun: 2026, selesai: true },
    { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

const kalimat = `Halo, nama saya ${profil.nama}, Saya seorang ${profil.peran} dan sedang belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran}) {
    return `${nama}  — ${peran}`;
}

function formatListKeahlian(daftarKeahlian) {
    return daftarKeahlian.map(item => item.toUpperCase()).join(", ");
}

const formatKeahlian = (daftar) => daftar.join(",");

console.log(buatPerkenalan(profil));
console.log(formatListKeahlian(profil.keahlian));

console.log(buatPerkenalan({ nama: "Bima", peran: "Mahasiswa" }));
console.log(buatPerkenalan({ nama: "Ehong", peran: "Programmer" }));
console.log(buatPerkenalan({ nama: "Rahman", peran: "Designer" }));

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);

const kotaAsal = "Banjarnegara";
console.log(kotaAsal);

const hobi = ["Menonton"];
console.log(hobi.join(","));

const keahlian = ["HTML", "CSS", "JavaScript"];
console.log(formatListKeahlian(keahlian));
