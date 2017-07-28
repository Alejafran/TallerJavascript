
var name = prompt("Type your name");
var id = prompt("what is your id type?");
var number = prompt("Type your id number");
var height = prompt("What is your height?");
function gender () {
   
   var gender = prompt("What is ypur gender? type F= Female M= male");

   
   if(gender == "F"|| gender == "f"){
      
      console.log("My gender is Female");
   }
   if(gender == "M"|| gender == "m"){
      
      console.log("My gender is Male");
   }
}

function live () {
   
   var live = prompt("Is it true that I live in Cartago? type T= True  F= False");

   
   if(live == "T"|| live == "t"){
      
      console.log("Yes, i live in Cartago");
   }
   if(live == "F"|| live == "f"){
      
      console.log("No, i not live in Cartago");
   }
}

console.log("Hello my name is " + name );
console.log("My number of " + id + " is " + number);
gender();
console.log("My height is" + height);
live();

