// Importação do React e do componente base 'Component' da biblioteca React
import React, { Component } from "react"; 
import Membro from './components/Membro/Membro';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
      email: 'junior@teste.com' ,
      senha: '1236458' ,
      sexo: ''
    }

    this.alterar = this.alterar.bind(this);
    this.trocarSexo = this.trocarSexo.bind(this)
   
  }

  alterar(exr){
    let valorDigitado = exr.target.value;
    this.setState({email: valorDigitado})
  }
  trocarSexo(e){
    let SxoTrocar = e.target.value;
    this.setState({sexo: SxoTrocar})
  }
  

  render(){

    return(

      <div>

         <h2>Login</h2>
          Email  : 
          <input  type = "email" name = "email" value = {this.state.email} 
            onChange={this.alterar}
          > 
          </input>
         <br/>
          Senha : <input type = "password" name = "senha" value= {this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} ></input>

          Sexo: 
          <select name ="sexo" value={this.state.sexo} onChange={this.trocarSexo}>
            <option value="masculino"> Masculino</option>
            <option value="Feminino"> Feminino</option>
          </select>

      </div>
    )
  }
}

export default App