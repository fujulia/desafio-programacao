let input = document.querySelector("#display");
let history = document.querySelector("#history");
let btnIgual = document.getElementById("btnIgual");
let operar = '';

function add_numero(numero) {
    if (operar = ! '') {
        input.value += numero;
    }
    if (operar == '') {
        input.value += numero;
    }
    btnIgual.focus();
}

function add_operador(operador) {
    if(operador == "sqrt"){
       let raiz = Math.sqrt(input.value);
       console.log(raiz);
       input.value = raiz;
    }
    else{
        operar = operador;
        input.value += operar
    }
    btnIgual.focus();
}

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    if (!isNaN(event.key) || event.key == "/" || event.key == "*" || event.key == "+" || event.key == "-") {
        input.value = input.value + event.key;
    }
    if(event.key == "="|| event.key == "Enter"){
        total();
    }
    if(event.key == "Backspace"|| event.key == "Delete" || event.key == "Escape"){
        limpar();
    }
});

function total() {
    let guardar = input.value;
    history.innerHTML = guardar;
    input.value = eval(guardar)
}

function limpar() {
    input.value = '';
}


