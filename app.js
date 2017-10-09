
var answer= prompt("Escriba una frase por favor.");

 var array= "";
 var newArray="";

var cipher= function(phrase) {

    for(i=0 ; i<phrase.length ; i++){

if (phrase.charCodeAt(i)>=65&&phrase.charCodeAt(i)<=90){

       var assci=(phrase.charCodeAt(i));

       var result=((assci-65+33)%26+65);

       var newLetter=(String.fromCharCode(result));

          array+=newLetter;

    }
else {
    phrase.charCodeAt(i)>=97&&phrase.charCodeAt(i)<=122;

     var assci2 = (phrase.charCodeAt(i));

       var result2=((assci2-97+33)%26+97);

       var newLetter2=(String.fromCharCode(result2));

          array+=newLetter2;

}
    }

return array;
    }


cipher(answer);

console.log(array);


var decipher= function(array) {

   for(i=0 ; i<array.length ; i++){

if (array.charCodeAt(i)>=65&&array.charCodeAt(i)<=90){

       var assci=(array.charCodeAt(i));

       var result=((assci-33)%26);

       var newLetter=(String.fromCharCode(result));

          newArray+=newLetter;

    }
else {
    array.charCodeAt(i)>=97&&array.charCodeAt(i)<=122;

    var assci2= (array.charCodeAt(i));

       var result2=((assci2-33)%26);

       var newLetter2=(String.fromCharCode(result2));

          newArray+=newLetter2;

}
    }

return newArray;
    }

console.log(newArray);


decipher(array);
