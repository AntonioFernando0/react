import React from "react";

// Componente Pai
function App() {
  return (
    <div>
      <Saudar nome="João" idade={25} />
      <Saudar nome="Maria" idade={30} />
      <Saudar nome="Júnior" idade={30}/>
    </div>
  );
}

// Componente Filho
function Saudar(props) {
  return (
    <div>
      <h1>Olá, {props.nome}!</h1>
      <p>Você tem {props.idade} anos.</p>
    </div>
  );
}


export default App;


// props