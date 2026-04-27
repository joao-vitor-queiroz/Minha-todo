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

    function removerTarefa(indexParaRemover) {
    const novasTarefas = tarefas.filter((_, index) => index !== indexParaRemover);
    setTarefas(novasTarefas);
  }

  return (
  <div className="container">
    <h1>Minha Lista de Tarefas</h1>
    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Digite uma tarefa..." />
    <button className="botao" onClick={adicionarTarefa}>Adicionar</button>
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index} className="tarefa">{tarefa}
        <button className='botaoremover' onClick={() => removerTarefa(index)}>X</button>
        </li>
      ))}
    </ul>
  </div>
);

}

export default App;