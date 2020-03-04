//Primero se seleccionan el eslider y los botones y se almacena en na variable usando Jquery
var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

/*
    Con jquery lo que se hace es mover los objetos con insertBefore() insertAfter()
    Con el siguiente codigo loq ue se hace es mover ultima imagen al primer lugar
*/
$('#slider section:last').insertBefore('#slider section:first');

//Como con el codigo anterior la ultima imagen se muestra en pantalla y no es lo que
//se quiere, entonces por medio de css a traves de Jquery lo que hago es poner un margen 
//izquierdo con valor de -100% y de esta manera se muestra la imagen correcta
slider.css('margin-left','-'+100+'%');

//La siguiente funcion lo que hace es mover el slider otro 100%
//La animacion se hace por medio de jquery, porque se utiliza varios parametros
//utilizando animate utilizando el margen izquierdo -200%, 0.7 s y al terminar la animacion
//se va a ejecutar una funcion anonima
function moverD(){
    slider.animate({marginLeft:'-'+200+'%'},700, function(){
        //Con el siguiente codigo traslado el primer elemento al final
        //Pero como en este punto ya tiene un margen del -200% lo que se hace
        //luego es restaurar el margen al -100%
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left','-'+100+'%');
    });
}

//Lo mismo que la anterior pero de forma inversa
function moverIz(){
    slider.animate({marginLeft:0+'%'}, 700, function(){
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left','-'+100+'%');
    })
}

//Se le agrega la funcion al boton siguiente
siguiente.on('click', function(){
    moverD();
});



anterior.on('click', function(){
    moverIz();
});

function autoplay(){
    interval = setInterval(function(){
        moverD();
    }, 10000);
}

autoplay();