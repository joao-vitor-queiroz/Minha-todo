import { useState } from 'react';
import './App.css';


function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if(input) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  return (
  <div className="container">
    <h1>Minha Lista de Tarefas</h1>
    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Digite uma tarefa..." />
    <button className="botao" onClick={adicionarTarefa}>Adicionar</button>
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index} className="tarefa">{tarefa}</li>
      ))}
    </ul>
  </div>
);

}

export default App;