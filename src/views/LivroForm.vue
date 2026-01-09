<template>
<div>
<h1>{{ id ? 'Editar' : 'Novo' }} Livro</h1>
<form @submit.prevent="salvar">
<input v-model="form.titulo" placeholder="Título" />
<button type="submit">Salvar</button>
</form>
</div>
</template>


<script>
import api from '../services/api'
export default {
props: ['id'],
data() {
return { form: { titulo: '' } }
},
mounted() {
if (this.id) this.carregar()
},
methods: {
async carregar() {
const res = await api.get(`livros/${this.id}/`)
this.form = res.data
},
async salvar() {
if (this.id) {
await api.put(`livros/${this.id}/`, this.form)
} else {
await api.post('livros/', this.form)
}
this.$router.push('/livros')
}
}
}
</script>