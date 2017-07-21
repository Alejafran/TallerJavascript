
function prime(){
      
      var value=prompt("Write a number to know if it is prime ");
      var NumberP=true;
 
      for(i=1;i<value;i++){

         if(value/i === Math.round(value/i) && i!==1 && i!==value){

            NumberP=false;

            break;
         };
      };

      if(NumberP){

         answer="The number "+value+" is prime";
         console.log(answer);
      }
      else{
         answer="The number "+value+" is not prime";
         console.log(answer);
         }

         return answer;
}

prime();