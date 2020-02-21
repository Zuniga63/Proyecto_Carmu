let btn_menu = document.getElementById("btnmenu");
let menu = document.getElementById("menu");

btn_menu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});