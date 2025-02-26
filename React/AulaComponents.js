// import {Component} from "react"; */ Isso é somente para gravas as aulas


class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            // Aqui é o lugar aonde posso colocar meus parametros
            nome: 'Matheus'
        }

        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
    }
    entrar(){
        this.setState({nome: 'Jão'})
    }
    sair(){
        this.setState({nome: 'Matheus'})
    }

    render(){
        return(

            <div>
                <h1>
                    Bem vindo a aula, {this.state.nome}
                </h1>
            <button onClick={this.entrar}>
                MUDAR
            </button>
            <button onClick={this.sair}>
                SAIR 
            </button>

            </div>
        )
    }

}





export default Membro;