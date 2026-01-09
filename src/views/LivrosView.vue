<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const livros = ref([])
const novoLivro = ref({
  titulo: '',
  preco: '',
  stock: ''
})

const carregarLivros = async () => {
  const res = await axios.get('http://127.0.0.1:8000/api/livros/')
  livros.value = res.data
}

const adicionarLivro = async () => {
  await axios.post('http://127.0.0.1:8000/api/livros/', novoLivro.value)
  novoLivro.value = { titulo: '', preco: '', stock: '' }
  carregarLivros()
}

onMounted(carregarLivros)
</script>

<template>
  <h2 class="mb-3">📘 Livros</h2>

  <!-- FORMULÁRIO -->
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">Adicionar Livro</h5>

      <div class="row g-3">
        <div class="col-md-4">
          <input v-model="novoLivro.titulo" class="form-control" placeholder="Título" />
        </div>
        <div class="col-md-4">
          <input v-model="novoLivro.preco" type="number" class="form-control" placeholder="Preço" />
        </div>
        <div class="col-md-4">
          <input v-model="novoLivro.stock" type="number" class="form-control" placeholder="Stock" />
        </div>
      </div>

      <button class="btn btn-primary mt-3" @click="adicionarLivro">
        Adicionar
      </button>
    </div>
  </div>

  <!-- TABELA -->
  <table class="table table-striped table-hover">
    <thead class="table-dark">
      <tr>
        <th>Título</th>
        <th>Preço</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="livro in livros" :key="livro.id">
        <td>{{ livro.titulo }}</td>
        <td>{{ livro.preco }} Kz</td>
        <td>{{ livro.stock }}</td>
      </tr>
    </tbody>
  </table>
</template>
