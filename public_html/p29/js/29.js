
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
   };
} while (option !== 0);

function option1() {

   menu = prompt("\
   Welcome to Metalworking aluminum....\n\
   \n\
   1. Save item \n\
   2. Search item for name \n\
   3. Search item for Code\n\
   0. Exit ");

   return parseInt(menu);
};

function save() {

   items = new Array(i);

   for (i = 0; i === items.length; i++) {

      var number = parseInt(prompt("Type '4' to back \n\Type '5' to continue add items"));
      if (number === 4) {

         break
      }
      if (number === 5) {

         items.push({
            name: prompt("Type a name of item"),
            code: prompt("type a number of code")
         });

      }

      localStorage.setItem("items", JSON.stringify(items));
   }

   return items;
}

function searchName() {

   var text = prompt("type a name of item that you wants search");

   var one = JSON.parse(localStorage.getItem("items"));

   for (i = 0; i <= items.length; i++) {

      if (text === one[i].name) {

         console.log("Name Item: " + one[i].name + ", " + " Code Item:  " + one[i].code);
      }
   }

   return one;

}

function searchCode() {

   var text = prompt("type a Code of item that you wants search");

   var one = JSON.parse(localStorage.getItem("items"));

   for (i = 0; i <= items.length; i++) {

      if (text === one[i].code) {

         console.log("Name Item: " + one[i].name + ", " + " Code Item:  " + one[i].code);
      }
   }

   return one;

}
