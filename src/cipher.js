
const cipher = {
      encode: function(offset, originalText){
      
        const textMayusculas = originalText.toUpperCase();
        console.log(textMayusculas);
        alert(textMayusculas);
        

        for (let i = 0; i < originalText.length; i++) {
          
          const numberByCharacter = textMayusculas.charCodeAt(i);
        /*  console.log(numberByCharacter);
          alert(numberByCharacter);*/

          const text = (numberByCharacter - 65 + Number(offset)) % 26 + 65;
          /*const textEncode = text.charCodeAt(i);*/
          console.log(textEncode);
          alert(textEncode);

          

          /*let numberByCharacter = textMayusculas.chartCodeAt(i);*/

          
          /*const element = array[index];*/
        
         /* console.log(numberByCharacter);  */     
          /*alert(i);*/
         
        }

       /* console.log(nOffset);
        console.log(originalText);
        
        console.log(textLongitud);
        console.log(numberByCharacter);
        alert("estoy en encode en cipher");*/

      }
 }
/*
cipher.encode();
cipher.decode();
*/
export default cipher;
