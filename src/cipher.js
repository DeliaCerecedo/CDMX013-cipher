
const cipher = {
     encode: function(offsetCifrar, originalText){
        if (offsetCifrar <= 0 && typeof originalText != "string") {
          throw new TypeError();
        }

        let textEncode = '';
                   cd
       
        for (let i = 0; i < originalText.length; i++) {
         
          const numberByCharacter = originalText.charCodeAt(i);
          
          if (numberByCharacter >= 65 && numberByCharacter <=90) {
            const textWithNumberEncode = (numberByCharacter - 65 + Number(offsetCifrar)) % 26 + 65;
            const textWithLetterEncode = String.fromCharCode(textWithNumberEncode);
            textEncode += textWithLetterEncode;
          } else if (numberByCharacter >= 97 && numberByCharacter <=122) {
            const textWithNumberEncode = (numberByCharacter - 97 + Number(offsetCifrar)) % 26 + 97;
            const textWithLetterEncode = String.fromCharCode(textWithNumberEncode);
            textEncode += textWithLetterEncode;

          } else {
            textEncode += String.fromCharCode(numberByCharacter);
            }  
            
        }
            
           

      return textEncode;
             

      },
 

      decode: function(offsetDescifrar, textoCifrado){
        if (offsetDescifrar <= 0 && typeof textoCifrado != "string") {
          throw new TypeError();
        }

        let textDecode = '';
                   
       
        for (let i = 0; i < textoCifrado.length; i++) {
          
          const numberByDecode = textoCifrado.charCodeAt(i);
          
          if (numberByDecode >= 65 && numberByDecode <=90) {
            const textWithNumberDecode = (numberByDecode + 65 - Number(offsetDescifrar)) % 26 + 65;
            const textWithLetterDecode = String.fromCharCode(textWithNumberDecode);
            textDecode += textWithLetterDecode;
          } else if (numberByDecode >= 97 && numberByDecode <=122) {
            const textWithNumberDecode = (numberByDecode + 97 + Number(offsetDescifrar)) % 26 + 97;
            const textWithLetterDecode = String.fromCharCode(textWithNumberDecode);
            textDecode += textWithLetterDecode;

          } else {
            textDecode += String.fromCharCode(numberByDecode);
            }  
            
        }
            
           
      return textDecode;
             

      }
  }


cipher.encode(1, 'AbC');  //quí llamo a la funcion y aparte le paso argumentos
//console.log(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'));
//cipher.decode(1, 'Bb'); // BCD 
console.log(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'));


export default cipher;
