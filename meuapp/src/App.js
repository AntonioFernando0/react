// Importação do React e do componente base 'Component' da biblioteca React// 
import React, {useState, useEffect, useMemo} from "react"; 

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

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas])


  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('tarefas');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])


  return(

    <div>
        <ul>
          {tarefas.map(tarefas => (
            <li>{tarefas}</li>
          ))}
        </ul>

        <br/>
        <strong>Você tem {totalTarefas} tarefas!</strong>
        <br/>
      <input type="text" value={input} onChange={ e => setInput(e.target.value)} />

    
      <button type="button" onClick={handleAdd} >Adicionar</button>
    </div>
  )
}

export default App; 