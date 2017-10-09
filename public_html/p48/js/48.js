
function calculate (){
    
    var x= "&nbsp;";
    var a = x+x+x+x+x+"*";
    var b = "*";
    var i = 1;
 
     while (i <=5){

        if (a === "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; *"){

         $('#figure').append(a+"<br>");
    }

//    console.log(a = (a.slice(1)+ b));
     $('#figure').append(a = (a.slice(1)+ b+"<br>"));

    i++;
    }
}