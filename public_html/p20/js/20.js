
var number = parseInt(prompt('Type your salary'));
var days = parseInt(prompt('Type a number of days workerd'));

var x= number/30;
var total= x * days;

if(number<="1475434" || number=="1'475.434") {
   
   totalSalary= total + 83140; 
   
   console.log("The aid is granted");
   console.log("Salary: "+ number);
   console.log("Days worked: "+ days);
   console.log("Transportation aid: 83.140 ");
   console.log("Total Salary: "+ totalSalary);
 }    
 
 if(number>= "2950868" || number>= "2'950.868"){
    
    console.log("Applies Retention at source");
    totalSalary= (number * 1) / 100;
    console.log("Retention: " + totalSalary);
    console.log("Salary: " + number);
    console.log("Days worked: "+ days);
    
    x= total - totalSalary; 
    console.log("Total Salary: "+x);
 };
 