
var number = new Array(10);
var i=0;
var sp=0;
var cp =0;

while(i !== 10){

   number[i] = parseInt(prompt("Type any number"));

   i++;
}
//numeros pares ----------------------------------------------------------------

console.log("Pair Numbers");

for (i=0; i<=number.length; i++){

   if(number[i]%2 == 0){

      console.log(number[i]);
      sp = sp+number[i];
      cp++;
   }
}
  
console.log("Sumatoria de pares: " + sp );
console.log("promedio de pares: " + (sp/cp));

//numeros primos ---------------------------------------------------------------

for (i=0; i<=number.length; i++){

   var a=0;
   var flag=0;
   var s=0;
   var c = 0;

   while(flag<=number[i]){

      if (number[i]%i==0){

          a++;

        }

       flag++;
   }

   if(a==2){

      s = s+number[i];
      c++;

      console.log(number[i]);
      console.log("Sumatoria de pares: " + s );
      console.log("promedio de pares: " + (s/c));
   }

   i++;
}

