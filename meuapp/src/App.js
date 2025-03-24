import React, {useState, useEffect, use} from "react";
import "./style.css"

 function App(){
  const [numero, setNumero] = useState(0)
  return(


    <div className="div" > 
        <h1 className="titulo"> Contador de numero </h1>
        <p className="contador"> {numero} </p>
        <button className="button" onClick={()=> setNumero(numero - 1)}>Diminuir</button>
        <button className="button" onClick={()=> setNumero(0)}> Zerar</button>
        <button className="button" onClick={()=> setNumero(numero + 1)}>Aumentar</button>



    </div>


  )
 }


 export default App;



