
function calculate(){
   
   var result = Math.pow(50 , 10);
   $('#powOne').text(result);
   
   var result = Math.pow(10, 50);
   $('#powTwo').text(result);
   
   var result = 50 * 10 ;
   $('#multiplication').text(result);
   
   var result = 50 / 10 ;
   $('#divOne').text(result);
   
   var result = 10 / 50 ;
   $('#divTwo').text(result);
   
   var result = 50 % 10 ;
   $('#mod').text(result);
   
   var result = 50 - 10 ;
   $('#less').text(result);
   
   var result = 50 + 10 ;
   $('#plus').text(result);

}

