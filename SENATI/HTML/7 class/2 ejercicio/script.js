$(document).ready(function(){
    console.log("jquery cargado...")

    $("button").click(function(){
        $("h1").hide();
        $("p").hide();
    });

    $(".showOcults").click(function(){
        $("h1").show();
        $("p").html("<h2>Hello world!</h2>")
        $("p").show();
    });

    $("#getInput").click(function(){
        let nombre = $("#nombre").val();
        $("p").html(nombre);
        $("p").show();
    });
});