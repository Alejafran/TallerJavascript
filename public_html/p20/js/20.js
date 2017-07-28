
var number = parseInt(prompt('Type your salary'));

if(number<="1475434" || number=="1'475.434") {
   
   totalSalary= number + 83140; 
   
   console.log("The aid is granted");
   console.log("Salary: "+ number);
   console.log("Transportation aid: 83.140 ");
   console.log("Total Salary: "+ totalSalary);
 }    
 
 if(number>= "2950868" || number>= "2'950.868"){
    
    totalSalary= (number * 1) / 100;
    console.log("Applies Retention at source");
    console.log("Salary: " + number);
    console.log("Retention: " + totalSalary);
    
    x=number-totalSalary;
    console.log(x);
 };
 