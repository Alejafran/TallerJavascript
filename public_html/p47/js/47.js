
function calculate(){
    
    var one = "";
    var ast = "*";
    var i = 0;

    do{

        one = one + ast;

        i++;

        $('#figure').append(one+"<br>");

    }while (i <= 5);

    if (one === "******"){

        var i = 5;
    }

    if (one === "******"){

        var i = 6;
    }
    
    while (i <= 5);

}