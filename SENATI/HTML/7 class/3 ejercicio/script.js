$(document).ready(function(){
    $("#mostrar").click(function(){
        let nombre = $("#name").val();
        let apellido = $("#apellidos").val();
        let carreras = $("#carrera").val();
        let dni = $("#dni").val();
        $("#txtArea").text(`
        Nombres y apellidos: ${nombre} ${apellido}
        Carrera: ${carreras}
        Dni: ${dni}
        `);
        $("#txtArea").show();
    });
});