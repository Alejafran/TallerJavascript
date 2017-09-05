 
var hour = parseInt(prompt("Type a number of the hours"));

var week = Math.floor(hour /(24*7));

var day = Math.floor(hour/24);

console.log("Days and Weekends of " + hour + " hours");
console.log("Weeks: "+week);
console.log("Days: "+day);

