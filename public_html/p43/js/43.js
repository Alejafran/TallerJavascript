
function calculate(){
   
   var x = $('#numberOne').val();
   var y = $('#numberTwo').val();
   
   var result = Math.pow(x , y);
   $('#powOne').text(x +" ^ "+ y +" = "+ result);
   
   var result = Math.pow(y , x);
   $('#powTwo').text(y +" ^ "+ x +" = "+ result);
   
   var result = x * y ;
   $('#multiplication').text(x +" * "+ y +" = "+ result);
   
   var result = x / y ;
   $('#divOne').text(x +" / "+ y +" = "+ result);
   
   var result = y / x ;
   $('#divTwo').text(y +" / "+ x +" = "+ result);
   
   var result = x % y ;
   $('#mod').text(x +" % "+ y +" = "+ result);
}

