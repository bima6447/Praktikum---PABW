// js/app.js
import { state } from './state.js';
import { render } from './dom.js';
import { pasangPendengar } from './events.js';
import { ambilNotisia } from './api.js';

async function inisialisasiApp() {
  // 1. Pasang event listener (tombol filter, atur ulang, dll)
  pasangPendengar();

  // 2. Ambil data dari API P10 dan masukkan ke state
  try {
    const dataApi = await ambilNotisia();
    state.daftarProyek = dataApi;
  } catch (error) {
    console.error('Gagal mengambil data API:', error);
  }

  // 3. Gambar tampilan dari state
  render(state);
}

// Jalankan perakitan aplikasi
inisialisasiApp();