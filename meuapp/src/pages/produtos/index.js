import { useParams } from "react-router-dom"


function Produto(){

    const {id} = useParams();
    return(
        <div>
           

            <h2>
                Detalhes do Produtos!
            </h2>
            <span>Meu produto é {id}</span>
        </div>
    )
}

export default Produto;