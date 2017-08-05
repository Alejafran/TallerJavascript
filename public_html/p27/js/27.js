function menu() {
   option = (prompt("Select your option for save your information personal\n\
      1.Information personal\n\
      2.family reference\n\
      3.laboral reference\n\
      4.Description of personal profile\n\
      5.print your resume\n\
      0.exit"));

   return parseInt(option);
}

function informationPersonal() {
   information = {
      name: "",
      age: "",
      height: "",
      gender: "",
      birth: ""
   };

   information.name = prompt("type your name");
   information.age = prompt("type your age");
   information.height = prompt("type your height");
   information.gender = prompt("type your gender");
   information.birth = prompt("type your birth");

   return information;
}

function familyReference() {
   information2 = {
      name: "",
      age: "",
      gender: "",
      birth: "",
      cell: ""
   };

   information2.name = prompt("type a name of your family reference ");
   information2.age = prompt("type age of your family reference");
   information2.gender = prompt("type a gender of your family reference");
   information2.birth = prompt("type a date of birth of your family reference");
   information2.cell = prompt("type a number of cellphone of your family reference");
   
   return information2;
}

function laboralReference() {
   information3 = {
      company: "",
      adress: "",
      cell: ""
   };

   information3.company = prompt("type a name of company");
   information3.adress = prompt("type the adress of the company");
   information3.cell = prompt("type a number of cellphone of the company");
   
   return information3;
}

function description() {
   information4 = {
      carreer: "",
      study: "",
      university: ""
   };

   information4.carreer = prompt("which is your carreer");
   information4.study = prompt("were you did study");
   information4.university = prompt("were did you did the college");
   
   return information4;

}

function print (){
   //imprimir informacion personal
   console.log("Information Personal");
   console.log("");
   
   console.log("Name: "+information.name );
   console.log("Age: "+information.age );
   console.log("Height: "+information.height); 
   console.log("Gender: "+information.gender); 
   console.log("Birth: "+information.birth );
   
   //imprimir referencias presonales
   console.log("Family References");
   console.log("");
   
   console.log("Contact Name: "+information2.name  );
   console.log("Contact Age: "+information2.age );
   console.log("Contac Gender: "+information2.gender); 
   console.log("Contact date Birht: "+information2.birth );
   console.log("Contact cellphone"+information2.cell );
   
   //Imprimir referencias laborales
   console.log("Laboral References");
   console.log("");
   
   console.log("Company name: "+information3.company );
   console.log("Company Adress: "+information3.adress );
   console.log("Company Cellphone: "+information3.cell );
   
   //imprimir descriciones personales
   console.log("Profesional Profile Description"); 
   console.log(""); 
   
   console.log("Carrer that you studied: "+information4.carreer); 
   console.log("Were you studied? : "+information4.study );
   console.log("were did you did the college? :"+information4.university); 
   
};

var option, information, information2, information3, information4,x;

do {
   option = menu();
   if (option == 1) {
      information = informationPersonal();
   }
   if (option == 2) {
      information2 = familyReference();
   }
   if (option == 3) {
      information3 =laboralReference();
   }
   if (option == 4) {
      information4 =description();
   }
   if (option == 5){
      x =print();
   }

} while (option !== 0);

