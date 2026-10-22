// src/simpanan.js
export const KUNCI = "pabw-p11"
export const VERSI = "1.0"

export function muat() {
  const dataTersimpan = localStorage.getItem(KUNCI)
  if (!dataTersimpan) return null

  try {
    const data = JSON.parse(dataTersimpan)
    // Memeriksa versi; jika tidak sesuai/bentuk lama, abaikan/dibuang
    if (data && data.versi === VERSI) {
      return data
    }
  } catch (e) {
    console.error("Gagal memuat data:", e)
  }
  return null
}

export function simpan(data) {
  const dataUntukDisimpan = {
    ...data,
    versi: VERSI
  }
  localStorage.setItem(KUNCI, JSON.stringify(dataUntukDisimpan))
}

export function aturUlang() {
  localStorage.removeItem(KUNCI)
}