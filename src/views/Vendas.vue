<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const livroTitulo = (id) => {
  const livro = livros.value.find(l => l.id === id)
  return livro ? livro.titulo : '—'
}



const vendas = ref([])
const livros = ref([])
const form = ref({ livro:'', quantidade:'' })


const load = async () => {
vendas.value = (await api.get('vendas/')).data
livros.value = (await api.get('livros/')).data
}


const save = async () => {
await api.post('vendas/', form.value)
form.value = { livro:'', quantidade:'' }
load()
}


const remove = async id => {
await api.delete(`vendas/${id}/`)
load()
}


onMounted(load)
</script>


<template>
<h2>Vendas</h2>
<select v-model="form.livro">
<option disabled value="">Livro</option>
<option v-for="l in livros" :value="l.id">{{ l.titulo }}</option>
</select>
<input v-model="form.quantidade" placeholder="Quantidade" />
<button @click="save">Registrar</button>

<div class="list-header">
    <span>Livro</span>
    <span>Quantidade</span>
</div>

<ul>
  <li
    v-for="v in vendas"
    :key="v.id"
    class="list-row"
  >
    <span>{{ livroTitulo(v.livro) }}</span>
    <span>{{ v.quantidade }}</span>
    <button @click="remove(v.id)">Excluir</button>
  </li>
</ul>

</template>