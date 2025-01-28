// while = Enquanto
let x = 0
while(x < 10){

    document.write(" <br>  O valor do X é = " + x)
x++;
}

document.write("<br> <br>  O valor do X é = " + x);
// For = para

for(a = 0; a < 10; a++ ) {

    document.write("  <br>  O valor do A é = " + a)
}



//Switch 

document.write("<br> Escolha seu pedido")
document.write("<br> 0 - sorvete / 1 - Suco")
document.write("<br> 2 - Coca cola 3 - água gelada")


function pedir(){

    let x = prompt("O que deseja pedir");

    switch(x) {
        case "0":
            alert("Você pediu um sorvete !");
            break;
        case "1":
            alert("Você pediu um Suco");
            break;
        case "2":
            alert("Você pediu uma coca-cola");
            break;
        case "3":
            alert("Você pediu uma água gelada!");
            break;
        default:
            alert("Valor não encontrado!");
    }
    
}