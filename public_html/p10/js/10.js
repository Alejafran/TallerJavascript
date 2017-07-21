
var number = prompt("Type a number");
var answer = evenOrOdd(number);

console.log("the number "+number+" is "+answer);

function evenOrOdd(number) {

  if(number % 2 === 0) {

    return "even";
  }
  else {
    return "";
  }
}

