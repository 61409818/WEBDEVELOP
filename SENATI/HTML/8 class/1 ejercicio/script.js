$(document).ready(function(){
    $("#button").click(function(){
        let cantidad = $("#filas").val();
        let mensaje = "";
        for(let i=1; i <= cantidad; i++){
            mensaje += "*".repeat(i) + "<br>"
        }
        $("#resultado").html(mensaje);
    });
});