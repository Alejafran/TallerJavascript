  
  function company(){
   var workers = prompt("What is the total of the workers. Type a number");
   var bono = 258320000;
   
   capital = bono - workers ;
   console.log("The capital of the company for the bono is " + capital);
   }

   function worker(){
      
      var hours = prompt("What is the total of hours worked? ");
      var day = hours * 45000;
      total= day - 20000;
      console.log("the gain of the day is of "+ day);
   };

   company();
   worker();
   
   
   // me falta el de las converciones, no sé hacerlo