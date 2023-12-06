let input = document.querySelector("#display");
let history = document.querySelector("#history");
let btnIgual = document.getElementById("btnIgual");

function add_numero(numero) {
    input.value+=numero;
    btnIgual.focus();
}

function add_operador(operador) {
    if(operador == "sqrt"){
       input.value = Math.sqrt(input.value);
    }
    else{
        input.value += operador;
    }
    btnIgual.focus();
}

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    if (!isNaN(event.key) || event.key == "/" || event.key == "*" || event.key == "+" || event.key == "-" || event.key == ".") {
        input.value = input.value + event.key;
    }
    if(event.key == "Enter"){
        btnIgual.blur()
        total();
    }
    if(event.key == "Backspace"|| event.key == "Delete" || event.key == "Escape"){
        limpar();
    }
});

function total() {
    history.innerHTML = input.value;
    input.value = eval(input.value);
}

function limpar() {
    input.value = '';
    history.textContent = "";
    btnIgual.focus();
}


