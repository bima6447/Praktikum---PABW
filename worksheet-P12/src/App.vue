<script setup>
import { onMounted, watch } from 'vue'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = { nama: 'Bima Gusti Ramadhan', peran: 'Mahasiswa Informatika' }

onMounted(() => {
  const isi = muat() // VERSI diperiksa di dalam muat(); bentuk lama dibuang
  if (isi) state.kategoriAktif = isi.kategoriAktif
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() { // tombol atur ulang dari P11 lembar D.2
  aturUlang()
  state.kategoriAktif = 'Semua'
  simpan(state)
}
</script>

<template>
  <main>
    <KepalaProfil :profil="identitas" />
    <TombolFilter />
    <DaftarProyek />
    
    <div style="text-align: center; margin: 20px 0;">
      <button @click="aturUlangPilihan">Atur Ulang Simpanan</button>
    </div>

    <FormKontak />
  </main>
</template>