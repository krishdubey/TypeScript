var global_num = 12  // global variable

class Number1 {
    num_val = 13; // class variable
    
    static sval = 10; // static field

    storeNum():void { 
       var local_num = 14;   // local variable
      
   } 
} 
console.log("Global num: " +global_num);

console.log(Number1.sval);              // static variable

var obj1 = new Number1(); 

console.log("GLobal num:" + obj1.num_val);

