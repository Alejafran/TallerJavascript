
function option() {

   var menu = prompt("\
   1.suma \n\
   2. resta \n\
   3. multiplicacion \n\
   4. división \n\
   0. salir ");

   return parseInt(menu);
};

do {
   var result = option();

   switch (result) {
      case 0:
         console.log("Goodbye");
         break;
      case 1:
         addition();
         break;

      case 2:
         substraction();
         break;

      case 3:
         multiplication();
         break;

      case 4:
         division();
         break;

      default:
         console.log("Type a number from 1 to 4");
   }
   
} while (result !== 0)


function addition() {

   var one = parseInt(prompt("Type a number"));
   var two = parseInt(prompt("Type other number"));

   answer = one + two;

   console.log(one + " + " + two + " = " + answer);

   return answer;
};

function substraction() {

   var one = parseInt(prompt("Type a number"));
   var two = parseInt(prompt("Type other number"));

   answer = one - two;

   console.log(one + " - " + two + " = " + answer);

   return answer;
};


function multiplication() {

   var one = parseInt(prompt("Type a number"));
   var two = parseInt(prompt("Type other number"));

   answer = one * two;

   console.log(one + " * " + two + " = " + answer);

   return answer;
};

function division() {

   var one = parseInt(prompt("Type a number"));
   var two = parseInt(prompt("Type other number"));

   answer = one / two;

   console.log(one + " / " + two + " = " + answer);

   return answer;
};