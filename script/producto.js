    /* productos */

const tituloCatA = document.querySelector("#menu-cat-A");
const tituloCatB = document.querySelector("#menu-cat-B");

const catProductos = document.querySelector("#cat-productos");

function aparecer(){
    tituloCatB.style.display = "flex";
    tituloCatA.style.zIndex = "-1";
    catProductos.style.height= "300px";
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

console.log(localStorage.getItem("catC"));

catC = JSON.parse(localStorage.getItem("catC"));

catC.addEventListener("click", function(){
    aparecerCargador();
});