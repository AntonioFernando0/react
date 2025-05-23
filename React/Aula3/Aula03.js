// Importação do React e do componente base 'Component' da biblioteca React
import React, { Component } from "react"; 
import Membro from './components/Membro/Membro';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
     feed : [

      { id:1, username: 'Matheus', curtidas: 10, comentarios:2},
      
      { id:2, username: 'Pedro', curtidas: 30, comentarios:163},
      { id:3, username: 'João', curtidas: 15, comentarios:50},
      { id:4, username: 'Rodrigo', curtidas: 2, comentarios:0}

     ]

    }
 
  }


  render(){
    return(

      <div>
          
        {this.state.feed.map((item)=>{
          return(
            <div > 
            <h3>
              <Membro id= {item.id}  username = {item.username} curtidas = {item.curtidas} comentarios = {item.comentarios} /> 

            </h3>

            
            </div>
          )
        })}
        
              
        

           

      </div>


    )
  }



}

// Exporta o componente 'App' para que ele possa ser utilizado em outros arquivos do projeto
export default App;

