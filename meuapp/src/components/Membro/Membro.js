import { Component } from "react";



class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {

            nome: props.nome

        }
        
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this)

    }
    entrar(){

            this.setState({nome: 'Matheus'})
    }

    sair(){
            this.setState({nome: 'João'})
    }

    render(){
        return(
            <div>
                <h1>

                    Bem vindo {this.state.nome}

                </h1>
                <button onClick={this.entrar}>
                    Entrar com o Matheus " lá ele "
                </button>
                    <hr></hr>
                <button onClick={this.sair}> Sair </button>
            </div>
        )
    }
}


export default Membro; 