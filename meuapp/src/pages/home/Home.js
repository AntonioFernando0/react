// Importa o componente Link da biblioteca react-router-dom
// O Link é usado para navegação entre rotas sem recarregar a página
import { Link } from "react-router-dom";

// Define o componente funcional Home
function Home() {
    return (
        <div>  
            {/* Título da página */}
            <h1>
                Bem vindo à página Home
            </h1>

            {/* Espaçamento visual com quebras de linha */}
            <br/> <br/>

            {/* Link que leva o usuário para a rota "/sobre" */}
            <Link to="/sobre">Sobre</Link>

            <br/>

            {/* Link que leva o usuário para a rota "/contato" */}
            <Link to="/contato">Contato</Link>

            <hr/>

            {/* Link com parâmetro dinâmico na rota (produto com ID 1234) */}
            <Link to={"/produto/1234"}>Acessando produto 1234</Link>
        </div> 
    );
}

// Exporta o componente Home para ser usado em outros arquivos
export default Home;
