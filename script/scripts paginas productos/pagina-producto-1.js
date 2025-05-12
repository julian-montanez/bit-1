/* ventana modal */

const pagarVisa = document.querySelector("#pagar-visa");
const modalInfo = document.querySelector("#pantalla-formulario");
const enviarInfo = document.querySelector("#enviar-info");
const cancelInfo = document.querySelector("#cancelar-info")
const pantAviso = document.querySelector("#pantalla-aviso")
const cerrarModal = document.querySelector("#cerrar-modal")

pagarVisa.addEventListener("click", ()=>{
    modalInfo.showModal();
});

enviarInfo.addEventListener("click", ()=>{
    modalInfo.close();
    setTimeout(function(){
        pantAviso.showModal();
    }, 500);
});

cancelInfo.addEventListener("click", ()=>{
    modalInfo.close();
});

cerrarModal.addEventListener("click", ()=>{
    pantAviso.close();
});

/*::::::::::::::::::::::::::: segunda seccion :::::::::::::::::::::::::::*/

const slider1 = document.querySelector("#slider-1");
const miniSlider = document.querySelector("#mini-slider-1");

const imagenM1 = document.querySelector("#eleccion-1");
const imagenM2 = document.querySelector("#eleccion-2");
const imagenM3 = document.querySelector("#eleccion-3");
const imagenM4 = document.querySelector("#eleccion-4");
const imagenM5 = document.querySelector("#eleccion-5");
const imagenM6 = document.querySelector("#eleccion-6");
const imagenM7 = document.querySelector("#eleccion-7");
const imagenM8 = document.querySelector("#eleccion-8");

function eleccion1(){
    slider1.style.marginLeft = "0px";
    slider1.style.transition = "0.5s";
    miniSlider.style.marginLeft = "0px";
    miniSlider.style.transition = "0.5s";
}

function eleccion2(){
    slider1.style.marginLeft = "-410px";
    slider1.style.transition = "0.5s";
    miniSlider.style.marginLeft = "-30px";
    miniSlider.style.transition = "0.5s";
}

function eleccion3(){
    slider1.style.marginLeft = "-985px";
    slider1.style.transition = "0.5s";
    miniSlider.style.marginLeft = "-75px";
    miniSlider.style.transition = "0.5s";
}

function eleccion4(){
    slider1.style.marginLeft = "-1560px";
    slider1.style.transition = "0.5s";
    miniSlider.style.marginLeft = "-150px";
    miniSlider.style.transition = "0.5s";
}

function eleccion5(){
    slider1.style.marginLeft = "-2155px";
    slider1.style.transition = "0.5s";
    miniSlider.style.marginLeft = "-225px";
    miniSlider.style.transition = "0.5s";
}

function eleccion6(){
    slider1.style.marginLeft = "-2730px";
    slider1.style.transition = "0.5s";
    miniSlider.style.marginLeft = "-300px";
    miniSlider.style.transition = "0.5s";
}

function eleccion7(){
    slider1.style.marginLeft = "-3305px";
    slider1.style.transition = "0.5s";
    miniSlider.style.marginLeft = "-375px";
    miniSlider.style.transition = "0.5s";
}

function eleccion8(){
    slider1.style.marginLeft = "-3880px";
    slider1.style.transition = "0.5s";
}

    /* botones */

imagenM1.addEventListener('click', function(){
    eleccion1();
});

imagenM2.addEventListener('click', function(){
    eleccion2();
});

imagenM3.addEventListener('click', function(){
    eleccion3();
});

imagenM4.addEventListener('click', function(){
    eleccion4();
});

imagenM5.addEventListener('click', function(){
    eleccion5();
});

imagenM6.addEventListener('click', function(){
    eleccion6();
});

imagenM7.addEventListener('click', function(){
    eleccion7();
});

imagenM8.addEventListener('click', function(){
    eleccion8();
});

/* carrito de compra */

const botonCarrito = document.querySelector("#agregar-carrito");
const conIndicador = document.querySelector("#contador-indicador");
const eliminarCompra = document.querySelector("#carrito");

function agregarCarrito(){
    conIndicador.style.display = "flex";
}

function eliminar(){
    conIndicador.style.display = "none";
}

botonCarrito.addEventListener("click", ()=>{
    agregarCarrito();
});

eliminarCompra.addEventListener("click", ()=>{
    eliminar();
});




/*::::::::::::::::::::::::::: quinta seccion :::::::::::::::::::::::::::*/

const slider4 = document.querySelector("#slider4");
let seccionSlider4 = document.querySelectorAll(".slider4-contenido");
let ultimaSeccion4 = seccionSlider4[seccionSlider4.length -1];

const botonUp = document.querySelector("#boton-arriba");
const botonDown = document.querySelector("#boton-abajo");

slider4.insertAdjacentElement("afterbegin", ultimaSeccion4);

function arriba(){
    let primerSlider4 = document.querySelectorAll(".slider4-contenido")[0];
    slider4.style.margintop = "-700px";
    slider4.style.transition = "0.5s";
    setTimeout(function(){
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("beforeend",primerSlider4);
        slider4.style.margintop = "-350px";
    }, 0);
}

function abajo(){
    let seccionSlider4 = document.querySelectorAll(".slider4-contenido");
    let ultimaSeccion4 = seccionSlider4[seccionSlider4.length -1];
    slider4.style.margintop = "0px";
    slider4.style.transition = "0.5s";
    setTimeout(function(){
        slider4.style.transition = "none";
        slider4.insertAdjacentElement("afterbegin",ultimaSeccion4);
        slider4.style.margintop = "-350px";
    }, 0);
}

botonUp.addEventListener("click", function(){
    arriba();
});

botonDown.addEventListener("click", function(){
    abajo();
});