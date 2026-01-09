import { createRouter, createWebHistory } from 'vue-router'
import Livros from '../views/Livros.vue'
import Autores from '../views/Autores.vue'
import Categorias from '../views/Categorias.vue'


const routes = [
{ path: '/', component: Livros },
{ path: '/autores', component: Autores },
{ path: '/categorias', component: Categorias },
]


export default createRouter({
history: createWebHistory(),
routes,
})