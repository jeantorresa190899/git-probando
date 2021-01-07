'use strict'

console.log("PROBANDO GIT");

//Durante la inicialización de la página
$('.toast').toast();

//Cuando la queramos mostrar
$('.toast').toast('show');

const contact = document.querySelector("#last_contact");

    if(innerWidth > 777){
        contact.classList.remove("btn");
        contact.classList.remove("contact-end");
       
    }else{
        contact.classList.add("btn");
        contact.classList.add("contact-end");
    }



