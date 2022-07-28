
import cipher from "./cipher.js";

//para cifrar texto 


const botonBienvenidaCifrar=document.getElementById('botonBienvenidaCifrar');
botonBienvenidaCifrar.addEventListener('click', function(){
    document.getElementById('bienvenida').style.display = "none";
    document.getElementById('pantallaCifrar').style.display = "block";

});


const cifrarElTexto=document.getElementById('botonCifrar');
cifrarElTexto.addEventListener('click', function(){
    const originalText = document.getElementById("textParaCifrar").value;
    const offsetCifrar=document.getElementById("offsetCifrar").value;
    cipher.encode(offsetCifrar, originalText);

    document.getElementById('diarioCifrado').value = cipher.encode(offsetCifrar, originalText);
   
   });


const menuPrincipalCifrado = document.getElementById('menuPrincipalCifrado');
menuPrincipalCifrado.addEventListener('click', function(){
    document.getElementById('bienvenida').style.display = "block";
    document.getElementById('pantallaCifrar').style.display = "none";
});


//para descifrar texto

const botonBienvenidaDescifrar=document.getElementById('botonBienvenidaDescifrar');
botonBienvenidaDescifrar.addEventListener('click', function(){
    document.getElementById('bienvenida').style.display = "none";
    document.getElementById('pantallaDescifrar').style.display = "block";

});


const descifrarElTexto=document.getElementById('botonDescifrar');
descifrarElTexto.addEventListener('click', function(){
    const textoCifrado = document.getElementById("textParaDescifrar").value;
    const offsetDescifrar=document.getElementById("offsetDescifrar").value;
    cipher.decode(offsetDescifrar, textoCifrado);

    document.getElementById('diarioDescifrado').value = cipher.decode(offsetDescifrar, textoCifrado);
   
   });


const menuPrincipalDescifrado = document.getElementById('menuPrincipalDescifrado');
menuPrincipalDescifrado.addEventListener('click', function(){
    document.getElementById('bienvenida').style.display = "block";
    document.getElementById('pantallaDescifrar').style.display = "none";
});



