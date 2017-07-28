
function calculate () {

   var numberOne = prompt("type a number");
   var numberTwo = prompt("type a number");

   var answer = Math.pow( parseInt(numberOne) , parseInt(numberTwo));
   console.log(numberOne+ " ^ " + numberTwo + " = " + answer);

   var answer = Math.pow( parseInt(numberTwo) , parseInt(numberOne));
   console.log(numberTwo+ " ^ " + numberOne + " = " + answer);

   var answer = numberOne * numberTwo;
   console.log(numberOne+ " * " + numberTwo + " = " + answer);

   var answer = numberOne / numberTwo;
   console.log(numberOne+ " / " + numberTwo + " = " + answer);

   var answer = numberTwo / numberOne;
   console.log(numberTwo+ " / " + numberOne + " = " + answer);

   var answer = numberOne % numberTwo;
   console.log(numberOne+ " mop " + numberTwo + " = " + answer);

}

calculate ();