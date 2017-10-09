
function calculate (){

var salary = $('#salary').val();    
var retention = $('#retention').val();    

var total =( Number(salary) * (Number(retention)) /100) ;
var pay = salary -total; 



$('#solution').html("The retention total is "+ total + "<br>"+ "the total salaty is  "+ pay );
}
