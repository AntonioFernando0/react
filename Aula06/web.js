 localStorage.setItem("nome", "Matheus") // temos que colocar um chave, e depois colocar o parametro que é o que queremos.

localStorage.getItem("nome")// acessar o paramentro atraves da chave

localStorage.removeItem("nome")  // remover o item

//Forma mais pratica para fazer esse comando 

 localStorage.nome = 'Junior' 

//----------------------------------------------------------------//J
let nome = '';

if(typeof localStorage.nome == 'undefined'){

    localStorage.nome = prompt("Digite seu nome")
}

nome = localStorage.nome

document.getElementById ('nome').innerHTML = nome