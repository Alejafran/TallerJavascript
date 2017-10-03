
function calculate(){
   
   var x = $('#numberOne').val();
   var y = $('#numberTwo').val();
   
   var result =parseInt(x)+parseInt(y);
   $('#powOne').text(x +" + "+ y +" = "+ result);
   
   var result = parseInt(x)- parseInt(y);
   $('#powTwo').text(x +" - "+ y +" = "+ result);
   
   var result = parseInt(x) * parseInt(y);
   $('#multiplication').text(x +" * "+ y +" = "+ result);
   
   var result = parseInt(x) / parseInt(y) ;
   $('#divOne').text(x +" / "+ y +" = "+ result);
}

