
---

# 📗 README — FRONTEND  
📁 Repositório: `livraria-frontend`

```markdown
# 📚 Projeto Livraria – Frontend

## 1. Visão Geral
O **Frontend do Projeto Livraria** é uma aplicação web desenvolvida com **Vue.js**, responsável pela interface gráfica e interação do utilizador com o sistema.

O frontend consome a **API REST do backend**, permitindo a gestão completa da livraria de forma intuitiva e responsiva.

---

## 2. Objetivos do Frontend
- Fornecer uma interface moderna e intuitiva
- Permitir gestão de livros e autores
- Consumir a API REST do backend
- Facilitar o processo de ensino e aprendizagem

---

## 3. Tecnologias Utilizadas

- Vue.js 3
- Vite
- HTML5
- CSS3 (CSS puro)
- JavaScript (ES6+)
- Axios
- Git e GitHub

---

## 4. Arquitetura do Frontend

O frontend está organizado em componentes reutilizáveis:

- **Views** – Páginas principais
- **Components** – Componentes reutilizáveis
- **Services** – Comunicação com a API
- **Assets** – Estilos e recursos visuais

---

## 5. Funcionalidades Implementadas

### 📖 Livros
- Listar livros
- Adicionar livro
- Editar livro
- Remover livro

### ✍️ Autores
- Listar autores
- Adicionar autor
- Atualizar autor
- Remover autor

---

## 6. Integração com o Backend

A comunicação com o backend é feita através de **requisições HTTP (REST)** utilizando **Axios**.

Exemplo de configuração:
```js
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"

7. Configuração do Projeto
Pré-requisitos

Node.js instalado

Passos para execução:

npm install
npm run dev

A aplicação estará disponível em:

http://localhost:5173

8. Requisitos Implementados

✔ Interface gráfica funcional
✔ Integração com API REST
✔ CRUD completo
✔ Componentização
✔ Separação de responsabilidades

9. Boas Práticas Aplicadas

Componentes reutilizáveis

Código organizado

Separação de lógica e visual

Comunicação assíncrona com API

10. Possíveis Melhorias Futuras

Autenticação de utilizadores

Melhorias na UI/UX

Paginação e pesquisa

Validação de formulários

11. Licença

Projeto desenvolvido para fins académicos.
Licença MIT.

