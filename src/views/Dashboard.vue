<template>
<div>
<h1>Dashboard</h1>
<p>Sistema de Gestão da Livraria</p>
</div>
</template>


// src/views/Livros.vue
<template>
<div>
<h1>Livros</h1>
<table border="1">
<tr>
<th>ID</th>
<th>Título</th>
<th>Ações</th>
</tr>
<tr v-for="livro in livros" :key="livro.id">
<td>{{ livro.id }}</td>
<td>{{ livro.titulo }}</td>
<td>
<router-link :to="`/livros/${livro.id}/editar`">Editar</router-link>
<button @click="remover(livro.id)">Apagar</button>
</td>
</tr>
</table>
</div>
</template>


<script>
import api from '../services/api'
export default {
data() {
return { livros: [] }
},
mounted() {
this.carregar()
},
methods: {
async carregar() {
const res = await api.get('livros/')
this.livros = res.data
},
async remover(id) {
await api.delete(`livros/${id}/`)
this.carregar()
}
}
}
</script>