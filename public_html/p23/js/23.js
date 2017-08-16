
function years() {
   
   var date1 = prompt("Type a date  YY,MM,DD");
   var date2 = prompt("Type other date YY,MM,DD");

   var one = new Date(date1);
   var two = new Date(date2);

   var calculate = one - two;

   var day = Math.floor(calculate / (1000 * 60 * 60 * 24));
   var month = day / 30;
   var year = month / 12;

   console.log(date1 + " - " + date2);
   console.log();

   console.log("there are " + day + " Days between the year " + date1 + " and " + date2);
   console.log("there are " + month + " Months between the year " + date1 + " and " + date2);
   console.log("there are " + year + " years between the year " + date1 + " and " + date2);
}

years ();