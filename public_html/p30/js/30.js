
//main

do {

   option = menu1();

   switch (option) {
      case 0:
         console.log("Vuelva pronto");
         break;
      case 1:
         one();
         break;

      case 2:
         two();
         break;

      case 3:
         three();
         break;

      default:
         console.log("Escriba un numero de 1 a 3");
   };
} while (option !== 0);

function menu1() {

   var option = prompt(" Configuración del Software de Nómina \n\
      \n\
      1. Seleccione idioma\n\
      2. Configurar\n\
      3. Continuar\n\
      0. Salir del programa");

   return parseInt(option);
}

//menú dos configuracion de idioma--------------------------------------------------------------------------------------------

function one() {
   
   function menu2(){
      
      var option2 = prompt("Configuración del Software de Nómina\n\
      \n\
      Seleccione el idioma del Software\n\
      \n\
      1.español\n\
      2.Ingles\n\
      0. Salir del programa");
      
      return parseInt(option2);
   }
   var language;
   
   do {
      option = menu2();
      if (option === 1) {
         language = informationPersonal(); // poner funcion de programa en español
      }
      if (option === 2) {
         language = familyReference(); //poner funcion de lenguaje en ingles
      }
      if (option === 0) {
         console.log("Hasta pronto");
      }
   } while (option !== 0);
};


// menu 3 configurar información de la empreza ------------------------------------------------------------------------------

function two (){
   
   function menu3(){
      
      var option3= prompt("Configuracion Del software de Nómina\n\
      \n\
      1. Nombre de la empreza\n\
      2. Salario minimo\n\
      3. salarios necesarios para retencion\n\
      4. porsentaje de retencion en la fuente\n\
      5. Salarios necesarios para auxilio de trasporte\n\
      6. cuanto es el auxilio de trasporte\n\
      7. cantidad de horas laborales al mes\n\
      8. Volver\n\
      0.Salir de programa ");
      
      return parseInt(option3);
   }
   function company (){
      
      var com= prompt("Escriba el nombre de la empresa");
      
      return com;
   }
   function salary (){
      
      var sal= prompt("¿Cuanto es el salario minimo en su pais?");
      
      return sal;
   }
   function retention (){
      
      var ret= prompt("¿A partir de cuantos salarios minimos se cobra la retención en la fuente?");
      
      return ret;
   }
   function percentage (){
      
      var per= prompt("¿Cual es el porsentaje de la retención en la fuente?");
      
      return per;
   }
   function auxtrasport (){
      
      var aux= prompt("¿Hasta cuantos salarios minimos se paga auxilio de trasporte?");
      
      return aux;
   }
   function value (){
      
      var val= prompt("¿Cual es el valor del auxilio de trasporte?");
      
      return val;
   }
   function hours (){
      
      var hou= prompt("cantidad de horas laboradas al mes");
      
      return hou;
   }
   
   var information, information2, information3, information4, information5, information6, information7, information8;
   do {
      option = menu3();
      if (option === 1) {
         information = company();
      }
      if (option === 2) {
         information2 = salary();
      }
      if (option === 3) {
         information3 = retention();
      }
      if (option === 4) {
         information4 = percentage();
      }
      if (option === 5) {
         information5 = auxtrasport();
      }
      if (option === 6) {
         information6 = value();
      }
      if (option === 7) {
         information7 = hours();
      }
      if (option === 8) {
         information8 = menu1();
      }
      if (option === 0) {
         console.log("Hasta pronto");
      }
   } while (option !== 0);
}

//--Menú 4 gestion de empreados --------------------------------------------------------------------------------------------
function three (){
   
   function menu4 (){
      var option4 = prompt ("Software de Nómina\n\
      1. Gestion de empreados\n\
      2. Registrar horas laboradas\n\
      3. Generar nomina\n\
      4. Imprimir comprobante de pago\n\
      0. Salir del programa");

      return parseInt(option4);
   }

// primera opcion de Gestion de empleados

   function workers (){
      
      function menu5 (){
         var option5 = prompt("Software de Nomina\n\
         \n\
         Gestión De Empreados\n\
         \n\
         1. Agregar \n\
         2. Modificar\n\
         3. Eliminar \n\
         4. Volver\n\
         0. Salir del Programa");
         
         return parseInt(option5);
      }
// agregar Usuarios!

      function add (){

         items = new Array(i);

         for (let i = 0; i === items.length; i++) {

         items.push({
            id: prompt("Escriba el número de celuda del trabajador"),
            name: prompt("Escriba el nombre del trabajador"),
            lastname: prompt("Escriba el apellido del trabajador"),
            cargue: prompt("Escriba el cargo que desempeña el trabajador")
         });

         localStorage.setItem("items", JSON.stringify(items));
         }

         return items;
      }

//modificar usuarios

      function edit (){
         
         function menu6 (){
            var option6 = prompt("¿Que Desea Modificar?\n\
            \n\
            1. Cedula\n\
            2. Nombre empleado\n\
            3. Apellido empleado\n\
            4. Cargo del trabajador\n\
            5. Volver\n\
            0. Salir");
            
            return parseInt(option6);
         }
         
         var edit1, edit2, edit3, edit4, edit5;
      
         do {
         option = menu6();
         if (option === 1) {
            edit1 = informationPersonal();
         }
         if (option === 2) {
            edit2 = familyReference();
         }
         if (option === 3) {
            edit3 = familyReference();
         }
         if (option === 4) {
            edit4 = familyReference();
         }
         if (option === 5) {
            edit5 = familyReference(); //poner un break
         }
         if (option === 0) {
            console.log("Hasta pronto");
         }
         } while (option !== 0);
      };
      
   
      var value1, value2, value3, value4;
      
      do {
      option = menu5();
      if (option === 1) {
         value1 = add();
      }
      if (option === 2) {
         value2 = edit();
      }
      if (option === 3) {
         value3 = familyReference();
      }
      if (option === 4) {
         value4 = familyReference();
      }
      if (option === 0) {
         console.log("Hasta pronto");
      }
      } while (option !== 0);

   }

   var data1, data2, data3, data4;

   do {
      option = menu4();
      if (option === 1) {
         data1 = workers();
      }
      if (option === 2) {
         data2 = familyReference();
      }
      if (option === 3) {
         data3 = familyReference();
      }
      if (option === 4) {
         data4 = familyReference();
      }
      if (option === 0) {
         console.log("Hasta pronto");
      }
   } while (option !== 0);
};

