// Importação do React e do componente base 'Component' da biblioteca React
import React, { Component } from "react"; 
import Membro from './components/Membro/Membro';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
      form:{

        nome: 'Matheus',
        email: 'matheus@sujeito.com',
        senha: '123',
        sexo: 'Masculino'
      }
    }

    this.dadosForm = this.dadosForm.bind(this)
   
  }

  dadosForm(e){
    let form = this.state.form;

    form[e.target.name] = e.target.value
    this.setState({form: form});
  }

  

  render(){

    return(

      <div>

         <h2>Login</h2>
          Nome: 
          <input type="text" name="nome" value = {this.state.form.nome} onChange={this.dadosForm}> 
          
          </input>
          Email  : 
          <input  type = "text" name = "email" value = {this.state.form.email} 
            onChange={this.dadosForm}
          > 
          </input>
         <br/>
          Senha : <input type = "password" name = "senha" value= {this.state.form.senha} onChange={this.dadosForm} ></input>
          <br/>

          Sexo: 
          <select name ="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
            <option value="masculino"> Masculino</option>
            <option value="Feminino"> Feminino</option>
          </select>

      </div>
    )
  }
}

export default App