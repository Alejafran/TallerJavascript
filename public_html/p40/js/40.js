
function button() {

    var name = $("#name").val();
    var id = $("#id").val();
    var number = $("#number").val();
    var height = $("#height").val();
    var gender = $("#gender").val();
    var live = $("#live").val();


    $("#modal").html("My name is: " + name + "<br>" + "my " + id +" is: " +number + "<br>"+" My Biological Gender is : " + gender + "<br>"+ "My Height is: "+height+"<br>"+"Do you live in Cartago? : "+ live);
    
}