<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'


const categorias = ref([])
const nome = ref('')
const editId = ref(null)


const load = async () => categorias.value = (await api.get('categorias/')).data


const save = async () => {
if (editId.value)
await api.put(`categorias/${editId.value}/`, { nome: nome.value })
else
await api.post('categorias/', { nome: nome.value })


nome.value = ''
editId.value = null
load()
}


const edit = c => {
nome.value = c.nome
editId.value = c.id
}


const remove = async id => {
await api.delete(`categorias/${id}/`)
load()
}


onMounted(load)
</script>


<template>
<h2>Categorias</h2>
<input v-model="nome" placeholder="Nome" />
<button @click="save">Salvar</button>

    <div class="list-header">
        <span>Nome</span>
    </div>

    <ul >
        <li v-for="c in categorias" :key="c.id" class="list-row">
        <span>
            {{ c.nome }}
        </span>
        <span class="actions">
            <button @click="edit(c)">Editar</button>
            <button @click="remove(c.id)">Excluir</button>
        </span>
        </li>
    </ul>
</template>