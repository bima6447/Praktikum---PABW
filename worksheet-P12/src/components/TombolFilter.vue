<script setup>
import { kategoriAktif, daftarKategori } from '../data.js'
</script>

<template>
  <div class="tombol-filter">
    <button 
      v-for="kategori in daftarKategori" 
      :key="kategori"
      :class="{ aktif: kategoriAktif === kategori }"
      @click="kategoriAktif = kategori"
    >
      {{ kategori }}
    </button>
  </div>
</template>