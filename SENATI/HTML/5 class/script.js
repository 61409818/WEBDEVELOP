function calcular(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    
    if(numero1 == "" || numero2 == ""){
        alert("Completa los dos campos")
        return
    }


    let n1 = parseInt(numero1)
    let n2 = parseInt(numero2)

    let suma = n1 + n2;

    console.log(`La suma entre ${suma}`);
    document.getElementById("resultado").innerHTML = `El resultado es: ${suma}`
}

function calcular2(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if(numero1 == "" || numero2 == ""){
        alert("Completa los dos campos")
        return
    }

    let n1 = parseFloat(numero1);
    let n2 = parseFloat(numero2);
    let opciones = document.getElementById("opciones").value;
    if(opciones == "multiplicar"){
        let multiplicar = n1 * n2
        console.log(`La multiplicación entre ${n1} x ${n2} = ${multiplicar}`)
        return document.getElementById("resultado").innerHTML = `El resultado es: ${multiplicar}`
    }
    
    if(opciones == "sumar"){
        let suma = n1 + n2
        console.log(`La suma entre ${n1} + ${n2} = ${suma}`);
        return document.getElementById("resultado").innerHTML = `El resultado es: ${suma}`
    }
    
    if(opciones == "restar"){
        let resta = n1 - n2
        console.log(`La resta entre ${n1} - ${n2} = ${resta}`)
        return document.getElementById("resultado").innerHTML = `El resultado es: ${resta}`
    }
    
    if(opciones == "dividir"){
        let dividir = n1 / n2
        console.log(`La división entre ${n1} / ${n2} = ${dividir}`)
        return document.getElementById("resultado").innerHTML = `El resultado es: ${dividir}`
    }
}