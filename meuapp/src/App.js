import React, {useState} from "react";
import "./style.css"

  function App(){

    const [numero, setNumero] = useState(0)
    return(

       <div  className="titulo">
        <h1 className="titulo" >Contador de números </h1>
        <p className="contador">{numero}</p>

        <button onClick={() => setNumero(numero - 1)} className="button" > Diminuir</button>

        <button onClick={() => setNumero( 0)}className="button" >Zerar</button>

        <button onClick={() => setNumero(numero + 1)} className="button">Aumentar </button>

       </div> 

    )
  }




export default App;




