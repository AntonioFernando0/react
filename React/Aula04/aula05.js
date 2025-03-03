import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '123',
      login: ''
    };
    this.alterar = this.alterar.bind(this);
    this.login = this.login.bind(this);
  }

  alterar(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login() {
    this.setState({ login: "Página OK!" });
  }

  render() {
    return (
      <div>
        <h2>Cadastro</h2>

        Email:  
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.alterar}
        />
        <br />

        Senha:  
        <input
          type="password"
          name="senha"
          value={this.state.senha}
          onChange={this.alterar}
        />
        <br />

        <button onClick={this.login}>Fazer login</button>

        <p>{this.state.login}</p> 
      </div>
    );
  }
}

export default App;
