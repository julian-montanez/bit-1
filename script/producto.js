    /* productos */

const tituloCatA = document.querySelector("#menu-cat-A");
const tituloCatB = document.querySelector("#menu-cat-B");

const catProductos = document.querySelector("#cat-productos");

function aparecer(){
    tituloCatB.style.display = "flex";
    tituloCatA.style.zIndex = "-1";
    catProductos.style.height= "180px";
    catProductos.style.transition = "1s"
    catProductos.style.flexDirection = "column";
}

function desaparecer(){
    catProductos.style.height= "0px";
    catProductos.style.transition = "0.5s"
    setTimeout(function(){
        tituloCatB.style.display = "none";
        tituloCatA.style.zIndex = "1";
    }, 500);
}

tituloCatA.addEventListener("click", function(){
    aparecer();
});

tituloCatB.addEventListener("click", function(){
    desaparecer();
});

    /* menu de categorias */

const imagenTodo = document.querySelector("#imagen-desaparece1");
const imagenCarga = document.querySelector("#imagen-desaparece2");
const imagenBE = document.querySelector("#imagen-desaparece3");
const imagenAudi = document.querySelector("#imagen-desaparece4");

const eleccionCatTodo = document.querySelector("#cat-todos");
const eleccionCatCarga = document.querySelector("#cat-carga");
const eleccionCatBE = document.querySelector("#cat-BE");
const eleccionCatAudi = document.querySelector("#cat-audi");

const miniTodo = document.querySelectorAll(".producto-miniatura");
const miniCarga = document.querySelectorAll(".producto-cargadores");
const miniBE = document.querySelectorAll(".producto-banks");
const miniAudi = document.querySelectorAll(".producto-audifonos");


function aparecerCargador(){
    miniCarga.forEach(function(miniCarga){
        miniCarga.style.display = "flex"
    });
    miniBE.forEach(function(miniBE){
        miniBE.style.display = "none"
    });
    miniAudi.forEach(function(miniAudi){
        miniAudi.style.display = "none"
    });
    setTimeout(function(){
        imagenCarga.style.zIndex = "1";
        imagenBE.style.zIndex = "0";
        imagenAudi.style.zIndex = "0";
        imagenTodo.style.zIndex = "0";
    },0)
}

function aparecerBE(){
    imagenBE.style.zIndex = "1";
    miniBE.forEach(function(miniBE){
        miniBE.style.display = "flex"
    });
    miniCarga.forEach(function(miniCarga){
        miniCarga.style.display = "none"
    });
    miniAudi.forEach(function(miniAudi){
        miniAudi.style.display = "none"
    });
    setTimeout(function(){
        imagenCarga.style.zIndex = "0";
        imagenBE.style.zIndex = "1";
        imagenAudi.style.zIndex = "0";
        imagenTodo.style.zIndex = "0";
    },0)
}

function aparecerAudi(){
    imagenAudi.style.zIndex = "1";
    miniAudi.forEach(function(miniAudi){
        miniAudi.style.display = "flex"
    });
    miniBE.forEach(function(miniBE){
        miniBE.style.display = "none"
    });
    miniCarga.forEach(function(miniCarga){
        miniCarga.style.display = "none"
    });
    setTimeout(function(){
        imagenCarga.style.zIndex = "0";
        imagenBE.style.zIndex = "0";
        imagenAudi.style.zIndex = "1";
        imagenTodo.style.zIndex = "0";
    },0)
}

function aparecerTodo(){
    imagenTodo.style.zIndex = "1";
    miniTodo.forEach(function(miniTodo){
        miniTodo.style.display = "flex"
    });
    setTimeout(function(){
        imagenCarga.style.zIndex = "0";
        imagenBE.style.zIndex = "0";
        imagenAudi.style.zIndex = "0";
        imagenTodo.style.zIndex = "1";
    },0)
}

eleccionCatCarga.addEventListener("click", function(){
    aparecerCargador();
});

eleccionCatBE.addEventListener("click", function(){
    aparecerBE();
});

eleccionCatAudi.addEventListener("click", function(){
    aparecerAudi();
});

eleccionCatTodo.addEventListener("click", function(){
    aparecerTodo();
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




console.log(localStorage.getItem("catC"));

catC = JSON.parse(localStorage.getItem("catC"));

catC.addEventListener("click", function(){
    aparecerCargador();
});