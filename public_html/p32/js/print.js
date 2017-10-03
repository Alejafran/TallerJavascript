
//ara imprimir las operaciones en consola

class print {
   
   constructor(){
      
      this._capture = new capture();
      this._capture._numberOne();
      this._capture._numberTwo();
      this._calculate = new calculate();
      this._calculate._sum();
      this._calculate._less();
      this._calculate._mul();
      this._calculate._div();
   }
   
   printSum(){
      
      console.log("the sum of the numbers: ");
      console.log(this._capture._numberOne + " + "+ this._capture._numberTwo+ " = "+ this._calculate._sum);
   }
}