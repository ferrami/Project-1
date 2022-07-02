/*Selectores de etiqueta
let cosa = document.getElementById("");*/

/*Funcion OnClick
function ver() {

    alert("Hola mundo");
};*/

//Jquery selector: se puede usar con clase, Id o etiquetas.
//$ { 'p' }.

/*$(selector).click(function(e) {
    e.preventDefault();
    alert("Hola mundo");
});*/

$(document).ready(function() {

    $('').click(function(e) {
        e.preventDefault();
        alert("Hola Mundo")

    });

    $('#ver').click(function(e) {
        e.preventDefault();
        $('p').css({

            'background-color': 'yellow'
        })

    });


});