
function calculate() {

   var num = $('#number').val();
   var x=0;

   for ( i=1;i<=num;i++) {

      if(num % i === 0) {

         x++;
      }
   }

   if (x<=2){

      var answer1= 'The number ' +num+ ' is prime';
      $('#solution').text(answer1);
   }

   else{

      var answer2= 'The number ' +num+ ' is not prime';
      $('#solution').text(answer2);

   }
}