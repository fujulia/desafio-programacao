let button = document.querySelector(".button");
let operadores = document.querySelector(".gray");
let input = document.querySelector("#display");
let history = document.querySelector("#history");
let operar = '';


function add_numero (numero) {
    if(operar =! ''){
        input.value += numero;
    }
    if(operar == ''){
        input.value+=numero;
    }
}

function add_operador(operador){
    if(operador == "+"){ operar = "+"};
    if(operador == "-"){operar = "-"};
    if(operador == "*"){operar = "*"};
    if(operador == "/"){operar = "/"};
    input.value+=operador
    console.log(input.value);
  
}

function total(){
    let guardar = input.value;
    history.innerHTML = guardar;
    guardar.toString();
    input.value = eval(guardar);
    console.log((eval(guardar)));
  
}


