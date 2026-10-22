<script setup>
import { state, pilihKategori } from '../state.js'
</script>

<template>
  <div class="tombol-filter">
    <button 
      v-for="kategori in state.daftarKategori" 
      :key="kategori"
      :class="{ aktif: state.kategoriAktif === kategori }"
      @click="pilihKategori(kategori)"
    >
      {{ kategori }}
    </button>
  </div>
</template>