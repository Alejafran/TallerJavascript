
function calculate (){
   
   var a = parseInt($('#a').val());
   var b = parseInt($('#b').val());
   var c = parseInt($('#c').val());

   var x = (b * c) / a ;
      
   $('#solution').html("X = b * c / a" + "<br>"+ "X = "+ b + " * " + c +" / "+ a + "= " + x );

};

