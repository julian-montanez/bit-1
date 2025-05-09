    /* productos */

    const tituloCat = document.querySelector("#menu-cat");

    const catProductos = document.querySelector("#cat-productos");
    
    function aparecer(){
        catProductos.style.display = "flex"
        catProductos.style.transitiom = "2s"
    }
    
    tituloCat.addEventListener("click", function(){
        aparecer();
    });