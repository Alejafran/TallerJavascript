
var number = new Array(10);
var i=0;
var sp=0;
var cp =0;

while(i !== 10){

   number[i] = parseInt(prompt("Type any number"));

   i++;
}
//numeros pares ----------------------------------------------------------------

//console.log("Pair Numbers");
//
//for (i=0; i<=number.length; i++){
//
//   if(number[i]%2 == 0){
//
//      console.log(number[i]);
//      sp = sp+number[i];
//      cp++;
//   }
//}
//  
//console.log("Sumatoria de pares: " + sp );
//console.log("promedio de pares: " + (sp/cp));

//numeros primos ---------------------------------------------------------------

for (i=0; i<=number.length; i++){
   
   var x=0;
   var a=0;
   var flag=1;
   var s=0;
   var c = 0;
   var items = new Array(x);
   
   while(flag<=number[i]){

      if (number[i]%flag==0){
         
         a++;
         
         if(a==2){
      
            items.push(number[i]);
            x++;
         }
      }

      flag++;
   }
   
   i++;
}

 console.log(items);

//items.forEach(function(element, index, array){
//   
//   console.log(element);
//   console.log(index);
//   console.log(array);
//});

//console.log("Sumatoria de primos: " + s );
//console.log("promedio de primos: " + (s/c));

