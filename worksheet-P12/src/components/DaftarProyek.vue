<script setup>
import { computed } from 'vue'
import { dataProyek, kategoriAktif } from '../data.js'

const proyekTersaring = computed(() => {
  if (!kategoriAktif.value || kategoriAktif.value === 'Semua') {
    return dataProyek
  }
  return dataProyek.filter(item => item.kategori === kategoriAktif.value)
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