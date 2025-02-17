// Importação do React e do componente base 'Component' da biblioteca React
import React, { Component } from "react";

// Definição do componente de classe 'App', que estende 'Component'
class App extends Component {
  // O 'constructor' é usado para inicializar o estado do componente e fazer o "binding" das funções
  constructor(props) {
    super(props); // Chama o construtor da classe pai 'Component'
    this.state = {  // Inicializa o estado do componente
      nome: "Júnior",  // Define um nome inicial (não está sendo usado no código, mas está aqui como exemplo)
      contador: 0  // O estado inicial do contador é 0
    };

    // Faz o "binding" das funções 'aumentar' e 'diminuir' com o contexto 'this' do componente
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  // Função para aumentar o valor do contador
  aumentar() {
    // Atualiza o estado do contador, aumentando em 1
    this.setState((prevState) => ({
      contador: prevState.contador + 1
    }));
  }

  // Função para diminuir o valor do contador
  diminuir() {
    // Atualiza o estado do contador, diminuindo em 1
    this.setState((prevState) => ({
      contador: prevState.contador - 1
    }));
  }

  // Função de renderização do componente
  render() {
    return (
      <div>
        {/* Título do contador */}
        <h1>Contador</h1>
        
        <h3>
          {/* Botão que chama a função 'diminuir' ao ser clicado */}
          <button onClick={this.diminuir}> - </button>

          {/* Exibe o valor atual do contador */}
          {this.state.contador}

          {/* Botão que chama a função 'aumentar' ao ser clicado */}
          <button onClick={this.aumentar}> + </button>
        </h3>
      </div>
    );
  }
}

// Exporta o componente 'App' para ser usado em outros arquivos
export default App;
