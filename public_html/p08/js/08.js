
function operation () {
   
   var numberOne = prompt("type a whole number");
   var numberTwo = prompt("type a whole number");

   var answer = parseInt(numberOne) + parseInt(numberTwo);
   console.log(numberOne + " + " + numberTwo+ " = " + answer);

   var answer = numberOne - numberTwo;
   console.log(numberOne + " - " + numberTwo+ " = " + answer);

   var answer = numberOne * numberTwo;
   console.log(numberOne + " * " + numberTwo+ " = " + answer);

   var answer = numberOne / numberTwo;
   console.log(numberOne + " / " + numberTwo+ " = " + answer);

}

operation ();