let button = document.querySelector(".button");
let operadores = document.querySelector(".gray");
let operar = '';
let valor1;
let valor2;

function add_numero (numero) {
    if(valor1 == ""){
        valor1 = numero;
    }
    else{
        valor2 = numero;
    }
    console.log(valor1)
}

function add_operador(operador){
    if(operador == "+"){ operar = "+"};
    if(operador == "-"){operar = "-"};
    if(operador == "*"){operar = "*"};
    if(operador == "/"){operar = "/"};
    console.log(operar);
}

if(operar!= ""){
    add_numero(numero);
}
