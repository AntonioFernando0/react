// Função entrar

function entrar() {

    let area = document.getElementById('area');
    let texto = prompt('Digite seu nome');

    if(texto == '' || texto == null ){
        alert('Digite seu nome novamente')
    }else{

        area.innerHTML = "Bem vindo " + texto; 
    }

   
}

// Segundo Metódo

function mostrarNome() 
{


    // Captura os valores dos campos de entrada

    let nomeInput = document.getElementById('nome'); // Campo de nome

    let sobreInput = document.getElementById('sobre'); // Campo de sobrenome

    let nome = nomeInput.value; // Valor do campo nome
    let sobre = sobreInput.value; // Valor do campo sobrenome


    // Atualiza a mensagem na div 'resultado'
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "Bem vindo " + nome + " " + sobre;
}

// Terceiro metódo 

function entrar2() {
    let area = document.getElementById('area2');
    

    let nome = prompt('Digite seu nome:');
    let idade = prompt('Digite sua idade:');

   

    area.innerHTML = `Bem vindo, ${nome}! Você tem ${idade} anos.`;
}