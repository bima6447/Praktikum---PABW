<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const proyekTersaring = computed(() => {
  if (!state.kategoriAktif || state.kategoriAktif.toLowerCase() === 'semua') {
    return state.daftarProyek
  }
  return state.daftarProyek.filter(
    item => item.kategori.toLowerCase() === state.kategoriAktif.toLowerCase()
  )
})
</script>

<template>
  <section class="daftar-proyek">
    <div 
      v-for="proyek in proyekTersaring" 
      :key="proyek.id" 
      class="kartu-proyek"
    >
      <h3>{{ proyek.judul }}</h3>
      <p>{{ proyek.deskripsi }}</p>
      <span class="kategori">{{ proyek.kategori }}</span>
    </div>
  </section>
</template>