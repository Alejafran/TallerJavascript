

var number = new Array(10);
var sp = 0; //acumulador de pares
var cp = 0; //cantidad de pares
var NumberP=true;

   for (i=0;i<=9;i++){
      
      number[i]= parseInt(prompt('Type a number'));
   }
      
   console.log("Numeros pares ");
   
   for (i=0; i<=number.length; i++){
      if(number[i]%2 == 0){
         console.log(number[i]);
         sp = sp+number[i];
         cp++;
      };
   };
   
   console.log("Sumatoria de pares: " + sp );
   console.log("promedio de pares: " + (sp/cp));
   
   console.log("Numeros Primos:");
   
      for(i=0;i<=number.length; i++){

         if(number[i]/i == Math.round(number[i]/i) && i!=1 && i!=number[i]){
            
            console.log(number[i]);
            sp = sp+number[i];
            cp++;
         };
      };
   console.log("Sumatoria de primos: " + sp );
   console.log("promedio de primos: " + (sp/cp));
      
      