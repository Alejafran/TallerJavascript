
// esta seccion calcula las cuatro operaciones basicas

class calculate{
   
   constructor(){
      
      this._capture = new capture();
      this._capture._numberOne();
      this._capture._numberTwo();
   }
   sum(){
      
      let sum = this._capture._numberOne + this._capture._numberTwo;
      
      return sum;
   }
   
   less(){
      
      let less = this._capture._numberOne - this._capture._numberTwo;
      
      return less;
   }
   
   multiplication(){
      
      let mul = this._capture._numberOne * this._capture._numberTwo;
      
      return mul;
   }
   
   division(){
      let div = this._capture._numberOne / this._capture._numberTwo;
      
      return div;
   }

}

