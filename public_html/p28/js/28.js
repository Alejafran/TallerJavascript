
//variables locales:

var option, i, myArray, sequence1, bubble2;

//funciones:

function menu() {
   option = (prompt("Menú\n\
      1.Fill in array\n\
      2.Search element by sequential search method\n\
      3.Apply bubble sorting method\n\
      4.Apply bidirectional bubble sorting method\n\
      5.Apply insertion sort method\n\
      6.Apply mixing method\n\
      7.Apply the ordering method by selection\n\
      8.Print Array \n\
      0.exit"  ));

   return parseInt(option);
}

function array () {
   
   var x= parseInt(prompt("Type the leght of the array"));
   
   myArray = new Array(x)
   
   for (i=0;i<myArray.length;i++){ 
   	
   myArray[i] = Math.floor((Math.random() * 100)+1);
   
   }
   console.log("Created Array: " + myArray);
   
   return myArray;
}

function sequence () {
   
    var x= parseInt(prompt("Type a number"));
   
   for (i=0;i<myArray.length;i++){
      
      var a = parseInt(myArray[i]);
              
      if (a === x){
         console.log("Found item: "+ x); //hay que quitar este
      }
   }
   return myArray;
}

 
 
function bubble (y){
   y = myArray;
   for(i =1; i < myArray.length; i++){
      for(var j=0; j<(myArray.length - i); j++){
         if (myArray[j] > myArray[j+1] ){
            
            var aux = myArray[j+1];
            myArray[j+1] = myArray[j];
            myArray[j] = aux;
         }
      }
   }
   console.log("Apply bubble sorting method: "+ myArray); //hay que quitar este 
   return myArray;
}


// menu:

do {
   option = menu();
   
   if (option == 1) {
      myArray = array ();
   }
   if (option == 2) {
      sequence2 = sequence();
   }
   if (option == 3) {
      bubble2 = bubble();
   }
   if (option == 4) {
      information4 =description();
   }
   if (option == 5){
      x =print();
   }

} while (option !== 0);