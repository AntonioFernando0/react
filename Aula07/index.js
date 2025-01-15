

function cadastroPessoa(info) {
    let novosDados = {

        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '65897113'
    }
    return novosDados


}

console.log(cadastroPessoa({
    nome: 'Matheus',
    sobreNome: 'Fraga',
    anoInicio: 2046
}))