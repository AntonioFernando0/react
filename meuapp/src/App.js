// Importação do React e do componente base 'Component' da biblioteca React
import React, { Component } from "react"; 
import Membro from './components/Membro/Membro';

class App extends Component{

  render(){
    return(

      <div>

        <h1>
            <Membro nome = "Matheus" />
        </h1>

      </div>


    )
  }



}

// Exporta o componente 'App' para que ele possa ser utilizado em outros arquivos do projeto
export default App;

