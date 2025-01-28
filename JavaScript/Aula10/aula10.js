// metodos includes: Determina se um array/objeto contém um determinado elemento ou não, retornando true ou false , respectivamente

// endsWith:   Uma função que verifica se uma string termina com um determinado valor. Ele retorna um valor booleano, true ou false, dependendo do resultado da comparação. 

//startWith: É uma função que verifica se uma string começa com um determinado fragmento.

// Some: xecuta a função callback uma vez para cada elemento presente no array até achar um onde o callback retorne um valor true.

//Every 


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

//some

let nome = ['Matheus', 'Pedro', 'Junior'];

console.log(nome.some(n => n === 'Junior'));

// Every 

let pros = [

    { nome: 'Joao', idade: 18},
    { nome: 'Fabi', idade: 28},
    { nome: 'Kaio', idade: 19},
    { nome: 'JP', idade: 19}

];

console.log(pros.every(item => item.idade >= 18));



