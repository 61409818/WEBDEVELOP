function calcular_par(){
    let limit = document.getElementById("limite").value;
    let limite = parseInt(limit);
    let pares = [];
    for (let i = 0; i <= limite; i++) {
        if (i % 2 == 0) {
          pares.push(i);
        }
    }
    document.getElementById("resultado").innerHTML = pares;
}

function calcular_impar(){
    let limit = document.getElementById("limite").value;
    let limite = parseInt(limit);
    let impares = [];
    for(let i = 0; i <= limite; i++){
        if(i % 2 != 0){
            impares.push(i);
        }
    }
    document.getElementById("resultado").innerHTML = impares;
}

function calcular_fibonacci(){
    let limit = document.getElementById("limite").value;
    let limite = parseInt(limit);
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for(let i = 2; i <= limite ; i++){
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    document.getElementById("resultado").innerHTML = fibonacci;
}