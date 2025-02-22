// Importação do React e do componente base 'Component' da biblioteca React
import React, { Component } from "react";

function App(){
  return(

    <div>
    
    <Completo Nome = "Antonio" Idade = {25} cargo = "Desenvolvedor" />
    
    </div>
  )
}

function Completo(props) {

  return(
    <div>
    <h1>Cadastro Completo</h1>
    <p>Nome: {props.Nome}</p>
    <p>Idade: {props.Idade}</p>
    <p>Cargo: {props.cargo}</p>
  </div>
  )
}
// Exporta o componente 'App' para ser usado em outros arquivos
export default App;
