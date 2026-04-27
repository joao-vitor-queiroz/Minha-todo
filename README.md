# Projeto: Minha Lista de Tarefas com React

Este projeto foi desenvolvido como parte da atividade prática de Programação Web, com o objetivo de criar uma aplicação funcional que mostra uma lista de tarefas a fazer utilizando **React** e **Vite**.

## 📖 Conceitos Aprendidos

### 1. JSX (JavaScript XML)
O JSX é uma extensão de sintaxe para JavaScript que se parece com HTML. 
- **Diferença para o HTML:** No HTML, escrevemos arquivos `.html` estáticos. No JSX, escrevemos o "HTML" dentro do arquivo `.jsx`. Isso nos permite usar lógica JavaScript (como variáveis e funções) diretamente dentro das tags, usando chaves `{ }`.

### 2. Componentes
Componentes são os blocos de construção da interface. Neste projeto, o arquivo `App.jsx` é um componente funcional que encapsula toda a lógica e a interface da lista de tarefas.

### 3. Hooks: O que é o `useState`?
O `useState` é um **Hook** do React que permite adicionar um "estado" ao componente. 
- No código, usamos `const [tarefas, setTarefas] = useState([])`. 
- `tarefas` armazena a lista atual.
- `setTarefas` é a função que usamos para atualizar essa lista.
- Quando o estado muda, o React "redesenha" a tela automaticamente para mostrar a informação nova.

---

## 🛠️ Funcionalidades Implementadas

- **Adição Dinâmica**: Uso do *Spread Operator* (`...tarefas`) para copiar a lista existente e adicionar uma nova tarefa sem deletar as anteriores.
- **Renderização de Lista**: Uso do método `.map()` para percorrer o array de tarefas e gerar um item `<li>` para cada uma.
- **Remoção de Itens (Desafio)**: Implementada a função `removerTarefa` utilizando o método `.filter()`, que cria um novo array excluindo o item selecionado pelo seu índice.
- **Estilização Personalizada**: Uso de CSS para melhorar a interface e experiência do usuário.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com
   ```

2. Entre na pasta do projeto:
   ```bash
   cd minha-todo
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o link exibido no terminal (geralmente `http://localhost:5173`).

---

**Desenvolvido por: João Vitor**
