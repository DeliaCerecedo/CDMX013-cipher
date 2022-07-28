
const cipher = {
      encode: function(offset, originalText){
        
        let textResult = '';
        /*const textMayusculas = originalText.toUpperCase();*/
             
       
        for (let i = 0; i < originalText.length; i++) {
          const numberByCharacter = textMayusculas.charCodeAt(i); 
          const textWithNumberEncode = (numberByCharacter - 65 + Number(offset)) % 26 + 65;
          const textWithLetterEncode = String.fromCharCode(textWithNumberEncode);
          textResult += textWithLetterEncode;
          


        }

        return textResult;
        
       

      }
 }

/* cipher.encode(1, 'ABC'); // BCD*/ //quí llamo a la funcion y aparte le paso argumentos
 /*console.log(cipher.encode(1, 'Abc'));*/
 

/*cipher.decode();*/
export default cipher;
