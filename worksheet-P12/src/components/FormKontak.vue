<script setup>
import { ref } from 'vue'

const nama = ref('')
const pesan = ref('')

const kirimPesan = () => {
  alert(`Pesan dari ${nama.value} berhasil dikirim!`)
  nama.value = ''
  pesan.value = ''
}
</script>

<template>
  <form @submit.prevent="kirimPesan" class="form-kontak">
    <input 
      v-model="nama" 
      type="text" 
      placeholder="Nama Anda" 
      required 
    />
    <textarea 
      v-model="pesan" 
      placeholder="Tulis pesan Anda..." 
      required
    ></textarea>
    <button type="submit">Kirim</button>
  </form>
</template>