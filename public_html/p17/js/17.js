
   console.log("a ----------> b");
   console.log("c ----------> x");
   
function calculate (){
   
   var a = parseInt(prompt('Type value for a '));
   var b = parseInt(prompt('Type value for b '));
   var c = parseInt(prompt('Type value for c '));

   var x = (b * c) / a ;
   
   console.log ("X = b * c / a");
   console.log ("X = "+ b + " * " + c +" / "+ a + "= " + x);
};

calculate();