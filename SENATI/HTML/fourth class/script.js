function obtener_localStorage(){
    let name = document.getElementById("nombres").value;
    let last_name = document.getElementById("apellidos").value;
    let major = document.getElementById("carreras").value;

    if(name && last_name && major){
        localStorage.setItem("nombres", name);
        localStorage.setItem("apellidos", last_name);
        localStorage.setItem("carreras", major);

        alert("Datos guardados con exito")
    }else{
        alert("Ingrese todos los datos antes de guardar")
    }
}

function mostrar_localStorage(){
    let name = localStorage.getItem("nombres");
    let last_name = localStorage.getItem("apellidos");
    let major = localStorage.getItem("carreras");

    if(name && last_name && major){
        alert(name + " " + last_name + " con la carrera de " + major);
    }else{
        alert("Complete todos los datos y envie nuevamente.")
    }
}
