import { Link } from "react-router-dom";


function Contato(){
    return (
        <div>
        <h1>
            Página Contato
        </h1>
        <span>
            Contato da empresa (dd) xxxx-xxxx 
        </span>
        <br/>
        <Link to = "/" > Home</Link>
        </div>
    )
}

export default Contato;