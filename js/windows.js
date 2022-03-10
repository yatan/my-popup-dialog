
$(document).ready(function () {

    //Posicionament Centrat
    //Troba el punt central de la pantalla
    var wX = $(window).width() / 2;
    var wY = $(window).height() / 2;

    //Troba el punt central del dialog
    var dX = $("#dialog").width() / 2;
    var dY = $("#dialog").height() / 2;

    //Centra el dialog sobre el punt central de la pantalla
    $("#dialog").css("left", wX - dX);
    $("#dialog").css("top", wY - dY);

    //Fa que el div sigui dragable nomes fent clic a la barra
    $('#bar').mouseenter(function () {
        $("#dialog").draggable({ disabled: false });
    }).mouseleave(function () {
        $("#dialog").draggable({ disabled: true });
    });

});
