
function years() {
   
   var date1 = prompt("Type a bigger date  YY,MM,DD");
   var date2 = prompt("Type a minor date YY,MM,DD");

   var one = new Date(date1);
   var two = new Date(date2);

   var calculate = one - two;

   var day = Math.floor(calculate / (1000 * 60 * 60 * 24));
   var month = day / 30;
   var year = month / 12;

   console.log("Dates: " +date1 + " - " + date2);

   console.log(parseInt("there are " + day + " Days between the dates " + date1 + " and " + date2));
   console.log(parseInt("there are " + month + " Months between the dates " + date1 + " and " + date2));
   console.log(parseInt("there are " + year + " years between the dates " + date1 + " and " + date2));
}

years ();