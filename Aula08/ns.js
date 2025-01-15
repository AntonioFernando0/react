

// Spread operator

function minhaLista (...nomes) {

    console.log(nomes)

}

minhaListas("Matheus", "Lucas", "João") */

 //  Rest Operator
 function cadastrar(usuarios, ...novosUsuarios){


    let res = [
        ...usuarios, 
        ...novosUsuarios]
    console.log(`${res}`)


}

let usuarios = ["Matheus", "João"]

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas") 



// Operações em Arrays 

const lista = [1, 2, 3, 4, 5, 6];


const novaLista = lista.map(function(item, index){

    return item + index;
})

console.log(novaLista)


const soma = lista.reduce(function(total, proximo){

    return total + proximo
})

console.log(soma)

const find = lista.find(function(item){
    return item != 6
})

console.log(find)

