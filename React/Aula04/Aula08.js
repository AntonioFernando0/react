// Importação do React e do componente base 'Component' da biblioteca React
import React, {useState} from "react"; 

function App(){

  const [tarefas, setTarefas ] = useState([

    'Pagar a conta de luz',
    'Estudar React Hooks'
  ])
  const [input, setInput] = useState(' ')

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput(' ')

  }

  const [nome, setNome] = useState('Júnior')
  return(

    <div>
        <ul>
          {tarefas.map(tarefas => (
            <li>{tarefas}</li>
          ))}
        </ul>
      <input type="text" value={input} onChange={ e => setInput(e.target.value)} />

    
      <button type="button" onClick={handleAdd} >Adicionar</button>
    </div>
  )
}

export default App; 