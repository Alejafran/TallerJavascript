
function calculate() {

   var num = $('#number').val();

   if (num % 2 === 0) {

      var answer1= 'the number ' +num+ ' is pair';
      $('#solution').text(answer1);

   }

   else{

      var answer2= 'the number ' +num+ ' is not pair';
      $('#solution').text(answer2);

   }
}