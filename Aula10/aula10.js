// metodos includes: Determina se um array/objeto contém um determinado elemento ou não, retornando true ou false , respectivamente

// endsWith:   Uma função que verifica se uma string termina com um determinado valor. Ele retorna um valor booleano, true ou false, dependendo do resultado da comparação. 

//startWith: É uma função que verifica se uma string começa com um determinado fragmento


let nomes = [ 'antonio', 'lucas', 'joao' ];

console.log(nomes.includes('antonio'));

if(nomes.includes('Antonio')){

    console.log('Antonio está na lista')
}else{
    console.log('Antonio não está na lista')
}


// endsWith

let Nome = 'Matheus'

console.log(Nome.endsWith('s'))

//startWith

let idade = 'Antonio'

console.log(idade.startsWith('A'))