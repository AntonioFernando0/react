import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Júnior",
      contador: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    this.setState((prevState) => ({
      contador: prevState.contador + 1
    }));
  }

  diminuir() {
    this.setState((prevState) => ({
      contador: prevState.contador - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h3>
          <button onClick={this.diminuir}> - </button>
          {this.state.contador}
          <button onClick={this.aumentar}> + </button>
        </h3>
      </div>
    );
  }
}

export default App;



