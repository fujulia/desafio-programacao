let button = document.querySelector(".button");
let operadores = document.querySelector(".gray");
let input = document.querySelector("#display");
let history = document.querySelector("#history");
let operar = '';
let raiz;

function add_numero(numero) {
    if (operar = ! '') {
        input.value += numero;
    }
    if (operar == '') {
        input.value += numero;
    }
}

function add_operador(operador) {
    if (operador == "+") { operar = "+" };
    if (operador == "-") { operar = "-" };
    if (operador == "*") { operar = "*" };
    if (operador == "/") { operar = "/" };
    if (operador == "^") { operar = "**" };
    input.value += operar
    console.log(input.value);
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        console.log(input.value);
        total();
    }
});

function total() {
    let guardar = input.value;
    history.innerHTML = guardar;
    input.value = eval(guardar);
    input.value = raiz;
    console.log((eval(guardar)));

}


function limpar() {
    input.value = '';

}

function calcularRaiz(){
    input.toString;
    raiz = Math.sqrt(input.value);

}

