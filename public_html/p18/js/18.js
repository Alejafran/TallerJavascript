
var salary = parseInt(prompt('Type the value of your salary'));
var retention = parseInt(prompt('Type the value of the retention'));

total= (salary * retention) / 100;

console.log("The retention total is "+ total);

totalSalary= salary- total;

console.log("the total salaty is "+ totalSalary);
