
function button() {

    var name = $("#name").val();
    var id = $("#id").val();
    var number = $("#number").val();
    
    $("#modal").html("Hello! My name is  " + name + "<br>" + " My number of " + id +" is: " +number);

}