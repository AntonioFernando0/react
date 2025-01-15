// funcões anonimas

function adicionar (...numeros){

    let total = numeros.reduce(function(total, proximo){

        return total + proximo;
    })

    console.log(total)

}

adicionar(1, 2, 3, 4, 5, 6)

//POSSO UTILIZAR DESSA FORMA APLICANDO O CONCEITO DE FUNÇÕES ANONIMAS.


function adicionar (...numeros){

    let total = numeros.reduce((total, proximo) => {

        return total + proximo;
    })

    console.log(total)

}

adicionar(1, 2, 3, 4, 5, 6)