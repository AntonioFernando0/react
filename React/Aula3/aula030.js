import {Component} from "react";


class Membro extends Component{

    render(){

        return(
            <div key = {this.props.id}>
                <h3>
                    <hr/>
                    
                    {this.props.username + ' ' } 
                    </h3>
                    <a>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas ' : this.props.curtidas + ' curtida' }  / { ' '}
                        
                    { this.props.comentarios > 1 ?this.props.comentarios + ' comentarios ' : this.props.comentarios + ' comentario '} </a>
                

            </div>
        )
    }
}



export default Membro;