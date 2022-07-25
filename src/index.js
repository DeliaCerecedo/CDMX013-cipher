
import cipher from "./cipher.js";

/*invocar aquí a cipher.code(offset, string) y cipher.decode() y actualiza los resultados en la UI*/ 


const cipher = {
    code: function string(){
        alert("estoy en la el objeto cipher.code leer texto en cipher.js");
        const originalText=document.getElementById("textParaCifrar").value;
        alert(originalText);

}
    /*decode: [offset, string]
  }
*/


function readText(){
    alert("estoy en la funcion leer texto en cipher.js");
    /*const string=document.getElementById("textParaCifrar").value;
    alert(string);*/

   
}


const cifrarElTexto=document.getElementById('botonCifrar');

cifrarElTexto.addEventListener('click', readText);

const string=document.getElementById("textParaCifrar").value;



const pantallaCifrar=function(){
    
    document.getElementById('bienvenida').style.display = "none";
    document.getElementById('pantallaCifrar').style.display = "block";

};
const botonBienvenidaCifrar=document.getElementById('botonBienvenidaCifrar');
botonBienvenidaCifrar.addEventListener('click', pantallaCifrar);



const irMenuPrincipal=function(){
    document.getElementById('bienvenida').style.display = "block";
    document.getElementById('pantallaCifrar').style.display = "none";
 };
 const menuPrincipal=document.getElementById('menuPrincipal');
 menuPrincipal.addEventListener('click', irMenuPrincipal);





/*



const descifrar=function(){
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("pantallaDesifrar").style.display = "block";
};

const botonPantallaDescifrar=document.getElementById('botonPantallaDescifrar');
botonDescifrar.addEventListener('click', descifrar);


*/


