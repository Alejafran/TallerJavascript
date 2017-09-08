var items = new Array();

function option1() {

   menu = prompt("\
   Welcome to Metalworking aluminum....\n\
   \n\
   1. Save item \n\
   2. Search item for name \n\
   3. Search item for Code\n\
   0. Exit ");

   return parseInt(menu);
}

//---------------------------------------------------------------------------------------------------------------------
function save() {
   do {
      var rsp = parseInt(prompt("Type '1' to continue\n\ Type '2' to return"));
      if (rsp === 1) {
         var items = JSON.parse(localStorage.getItem("items"));
         if (items === null) {
            items = [];
         }
         var name = prompt("Type a name of item");
         var code = prompt("type a number of code");

         items.push({name, code});
         localStorage.setItem("items", JSON.stringify(items));
      }
      if (rsp === 2) {
         break
      }
   } while (rsp !== 2)
}
//------------------------------------------------------------------------------------------------------------

function searchName() {

   var one = JSON.parse(localStorage.getItem("items"));

   if (one === null) {

      alert('the database is empty');

   } else {

      function sn() {
         var text = prompt("type a name of item that you wants search");
         var flag = 0;

         for (i = 0; i <= one.length - 1; i++) {

            if (text === one[i].name) {

               console.log("Name Item: " + one[i].name + ", " + " Code Item:  " + one[i].code);
               flag++;
            }
         }
         if (flag === 0) {
            console.log("Item no found");
         }
         var answer = parseInt(prompt("Type '1' to continue\n\ Type 2 to return"));
         return answer;
      }
      var answer1;

      do {
         answer = sn();

         if (answer === 1) {
            answer1 = sn();
         }
         if (answer === 2) {
            break
         }
      } while (answer !== 2);
   }
}
//-------------------------------------------------------------------------------------------------------------

function searchCode() {

   var one = JSON.parse(localStorage.getItem("items"));

   if (one === null) {

      alert('the database is empty');

   } else {

      function sc () {
         var text = prompt("type a Code of item that you wants search");
         var flag = 0;

         for (i = 0; i <= one.length - 1; i++) {
            
            if (text === one[i].code) {

               console.log("Name Item: " + one[i].name + ", " + " Code Item:  " + one[i].code);
               flag++;
            }
         }
         if (flag === 0) {
            console.log("Item no found");
         }
         var answer = parseInt(prompt("Type '1' to continue\n\ Type 2 to return"));
         return answer;
      }
      var answer1;

      do {
         answer = sc();

         if (answer === 1) {
            answer1 = sc();
         }
         if (answer === 2) {
            break
         }
      } while (answer !== 2);
   }
}
//menu--------------------------------------------------------------------------------------------------------

var menu, i, option, name;

do {

   option = option1();

   switch (option) {
      case 0:
         console.log("Goodbye");
         break;
      case 1:
         save();
         break;

      case 2:
         searchName();
         break;

      case 3:
         searchCode();
         break;

      default:
         console.log("Type a number from 0 to 3");
   }
} while (option !== 0);