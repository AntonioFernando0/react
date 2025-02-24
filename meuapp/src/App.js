// Importação do React e do componente base 'Component' da biblioteca React
import React, { Component } from "react";

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        hora: "00:00:00"
      }

    }

    componentDidMount(){

      setInterval(() => {
        this.setState({
          hora: new Date().toLocaleTimeString()
        })

      }, 1000 )


    }

  render(){
    return(

      <div>
        <h1>
          Meu projeto {this.state.hora}


        </h1>
      </div>


    )

  }



}

// Exporta o componente 'App' para ser usado em outros arquivos
export default App;
