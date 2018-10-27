class Greeting { 
   greet():void { 
      console.log("Hello World!!!") 
   } 
} 
var obj = new Greeting(); 
// the new keyword creats an object of the class(obj).
//the object invoke the method greet().
obj.greet();
var name1:string = "John";
var score1:number = 50;
var score2:number = 100;
var sum = score1 + score2;
var str='1';
var str2:number= <number> <any> str;
console.log(str2); //str is now of type number 
console.log("name: "+ name1);
console.log("First Score: " +score1);
console.log("Second Score: " + score2);
console.log("Sum of score are: "+ sum);