<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'


const livros = ref([])
const autores = ref([])
const categorias = ref([])


const form = ref({ titulo:'', preco:'', stock:'', autor:'', categoria:'' })
const editId = ref(null)


const load = async () => {
livros.value = (await api.get('livros/')).data
autores.value = (await api.get('autores/')).data
categorias.value = (await api.get('categorias/')).data
}


const save = async () => {
if (editId.value)
await api.put(`livros/${editId.value}/`, form.value)
else
await api.post('livros/', form.value)


form.value = { titulo:'', preco:'', stock:'', autor:'', categoria:'' }
editId.value = null
load()
}


const edit = l => {
form.value = { ...l, autor: l.autor.id, categoria: l.categoria?.id }
editId.value = l.id
}


const remove = async id => {
await api.delete(`livros/${id}/`)
load()
}


onMounted(load)
</script>


<template>
    <h2>Livros</h2>
    <form>
  <div class="form-row">

<input v-model="form.titulo" placeholder="Título" />
<input v-model="form.preco" placeholder="Preço" />
<input v-model="form.stock" placeholder="Stock" />
<select v-model="form.autor">
<option disabled value="">Autor</option>
<option v-for="a in autores" :value="a.id">{{ a.nome }}</option>
</select>
<select v-model="form.categoria">
<option disabled value="">Categoria</option>
<option v-for="c in categorias" :value="c.id">{{ c.nome }}</option>
</select>
<button @click="save">Salvar</button>

 </div>
</form>

<div class="list">
  

    <div class="list-header">
      <span>Título</span>
      <span>Autor</span>
      <span>Categoria</span>
      <span>Stock</span>
      <span>Preço</span>
      <span>Ações</span>
    </div>

    <ul>
  <li v-for="l in livros" :key="l.id" class="list-row">
    <span>{{ l.titulo }}</span>
    <span>{{ l.autor_nome }}</span>
    <span>{{ l.categoria_nome }}</span>
    <span>{{ l.stock }}</span>
    <span>{{ l.preco }} kzs</span>
    <span class="actions">
      <button @click="edit(l)">Editar</button>
      <button @click="remove(l.id)">Excluir</button>
    </span>
  </li>
</ul>



</div>

</template>