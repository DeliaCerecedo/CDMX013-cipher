
import cipher from "./cipher.js";

/*escuchar eventos DOM, invocar cipher.encode(offset, string) y cipher.decode(offset, string)
y actualiza los resultados en la UI*/ 


const botonBienvenidaCifrar=document.getElementById('botonBienvenidaCifrar');
botonBienvenidaCifrar.addEventListener('click', function(){
    document.getElementById('bienvenida').style.display = "none";
    document.getElementById('pantallaCifrar').style.display = "block";

});


const cifrarElTexto=document.getElementById('botonCifrar');
cifrarElTexto.addEventListener('click', function(){
    const originalText = document.getElementById("textParaCifrar").value;
    const offset=document.getElementById("offset").value;
    cipher.encode(offset, originalText);

    document.getElementById('diarioCifrado').value = cipher.encode(offset, originalText);
   
   });


const menuPrincipal = document.getElementById('menuPrincipal');
menuPrincipal.addEventListener('click', function(){
    document.getElementById('bienvenida').style.display = "block";
    document.getElementById('pantallaCifrar').style.display = "none";
});



/*


const descifrar=function(){
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("pantallaDesifrar").style.display = "block";
};

const botonPantallaDescifrar=document.getElementById('botonPantallaDescifrar');
botonPantallaDescifrar.addEventListener('click', descifrar);

*/