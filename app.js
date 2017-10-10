
var menu = prompt("Eliga una opcion.\n1.Encriptar mensaje.\n2.Descifrar mensaje");

if (menu=="1"){

  var answer= prompt("Escriba una frase para convertirlo en un mensaje encriptado");

 var string= "";

var cipher= function(phrase) {

    for(i=0 ; i<phrase.length ; i++){


if (phrase.charCodeAt(i)>=65&&phrase.charCodeAt(i)<=90){

       var assci=(((phrase.charCodeAt(i))-65+33)%26+65);

       var newLetter=(String.fromCharCode(assci));

          string+=newLetter;

    }
else if ( phrase.charCodeAt(i)>=97&&phrase.charCodeAt(i)<=122) {

       var assci2=(((phrase.charCodeAt(i))-97+33)%26+97);

       var newLetter2=(String.fromCharCode(assci2));

          string+=newLetter2;

}else {

   if(phrase.charCodeAt(i)==32){
       alert("No deje espacios en la frase la proxima vez. =) ");


     }

     else if(phrase.charCodeAt(i)>=48&&phrase.charCodeAt(i)<=57){
       alert("No escriba numeros en la frase la proxima vez, por que no podra encriptarlo. :) ");


     }

}

    }

alert(string);
    }


cipher(answer);

}
else if (menu=="2") {

  var answer2= prompt("Introdusca el mensaje encriptado para convertilo en una frase.");
var string2="";

var decipher= function(phrase2) {

   for(i=0 ; i<phrase2.length ; i++){

if (phrase2.charCodeAt(i)>=65&&phrase2.charCodeAt(i)<=90){


       var assci=(((phrase2.charCodeAt(i))+65-33)%26+65);

       var newLetter=(String.fromCharCode(assci));

          string2+=newLetter;

    }
 else if (phrase2.charCodeAt(i)>=97&&phrase2.charCodeAt(i)<=122) {

       var assci2=((phrase2.charCodeAt(i))%26+97);

       var newLetter2=(String.fromCharCode(assci2));

          string2+=newLetter2;

}else{

 if(phrase2.charCodeAt(i)==32){
       alert("No deje espacios en la frase en la proxima vez. =) ");

     }

     else if(phrase2.charCodeAt(i)>=48&&phrase2.charCodeAt(i)<=57){
       alert("No escriba numeros en la frase porque no podra descifrarlo. :) ");

     }
}


    }

alert (string2);
    }


decipher(answer2);


} else {
  menu!=="1"||menu!=="2";

  alert("Por favor eliga el numero de las opciones existentes. =( ");

}
