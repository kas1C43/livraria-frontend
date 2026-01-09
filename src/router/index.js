import { createRouter, createWebHistory } from 'vue-router'
import Autores from '../views/Autores.vue'
import Categorias from '../views/Categorias.vue'
import Livros from '../views/Livros.vue'
import Vendas from '../views/Vendas.vue'


const routes = [
{ path: '/', redirect: '/livros' },
{ path: '/autores', component: Autores },
{ path: '/categorias', component: Categorias },
{ path: '/livros', component: Livros },
{ path: '/vendas', component: Vendas },
]


export default createRouter({
history: createWebHistory(),
routes,
})