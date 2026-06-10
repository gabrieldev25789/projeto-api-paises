# 🌍 Explorador de Países

Aplicação React que consome a [REST Countries API](https://restcountries.com/) e permite pesquisar, filtrar e visualizar informações sobre países do mundo.

---

## 📸 Preview

<!-- Print da tela principal com os cards -->
![Tela principal](src/assets/prints/print6.png)

---

## 🚀 Funcionalidades

- **Pesquisa por nome** — filtragem em tempo real enquanto o usuário digita
- **Filtro por região** — África, Américas, Ásia, Europa, Oceania e Antártica
- **Filtro por população** — faixas de tamanho configuráveis (menos de 1M até mais de 100M)
- **Ordenação automática** — resultados ordenados por população (crescente)
- **Limpeza de filtros** — botão para resetar todos os filtros de uma vez

---

## 🖼️ Screenshots

### Tela inicial — todos os países

<!-- Print mostrando o grid de cards sem filtros aplicados -->
![Todos os países](src/assets/prints/print1.png)

### Filtro por região

<!-- Print com alguma região selecionada, ex: Europa -->
![Filtro por região](src/assets/prints/print2.png)

### Filtro por população

<!-- Print com um filtro de população ativo -->
![Filtro por população](src/assets/prints/print3.png)

### Pesquisa por nome

<!-- Print mostrando resultado de uma pesquisa, ex: "bra" -->
![Pesquisa por nome](src/assets/prints/print4.png)

### Nenhum resultado encontrado

<!-- Print da mensagem quando nenhum país bate com os filtros -->
![Sem resultados](src/assets/prints/print5.png)

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [REST Countries API](https://restcountries.com/)
- CSS Modules

---

## 📁 Estrutura do projeto

```
src/
├── Components/
│        ├── CardPais.jsx
│        └── CardPais.css
│        ├── Filtros.jsx
│        └── Filtros.css
│        ├── Pesquisa.jsx
│        └── Pesquisa.css
├── Services/
│   └── api.js
└── App.jsx
```

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/gabrieldev25789/projeto-api-paises

# Acesse a pasta do projeto
cd projeto-api-paises

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Deploy: `https://projeto-api-paises.vercel.app/`

---

## 🔌 API utilizada

Todos os dados vêm da [REST Countries API](https://restcountries.com/) — gratuita e sem necessidade de autenticação.

