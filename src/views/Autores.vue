<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'


const autores = ref([])
const form = ref({ nome: '', email: '' })
const editId = ref(null)


const load = async () => {
autores.value = (await api.get('autores/')).data
}


const save = async () => {
if (editId.value)
await api.put(`autores/${editId.value}/`, form.value)
else
await api.post('autores/', form.value)


form.value = { nome: '', email: '' }
editId.value = null
load()
}


const edit = a => {
form.value = { nome: a.nome, email: a.email }
editId.value = a.id
}


const remove = async id => {
await api.delete(`autores/${id}/`)
load()
}


onMounted(load)
</script>


<template>
<h2>Autores</h2>
<input v-model="form.nome" placeholder="Nome" />
<input v-model="form.email" placeholder="Email" />
<button @click="save">Salvar</button>

<div class="list-header">
      <span>Nome</span>
      <span>Email</span>
    </div>

<ul>
<li v-for="a in autores" :key="a.id" class="list-row">
<span>{{ a.nome }}</span>
<span>{{ a.email }}</span>
<span class="actions">
    <button @click="edit(c)">Editar</button>
    <button @click="remove(c.id)">Excluir</button>
</span>
</li>
</ul>
</template>