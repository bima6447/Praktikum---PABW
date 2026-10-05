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

const kalimat = `Halo, nama saya ${profil.nama}, Saya seorang ${profil.peran} dan sedang belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran}) {
    return `${nama}  — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(".");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.log(buatPerkenalan({ nama: "Bima", peran: "Mahasiswa" }));
console.log(buatPerkenalan({ nama: "Ehong", peran: "Programmer" }));
console.log(buatPerkenalan({ nama: "Rahman", peran: "Designer" }));