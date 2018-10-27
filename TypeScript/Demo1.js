var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
// the new keyword creats an object of the class(obj).
//the object invoke the method greet().
obj.greet();
var name1 = "John";
var score1 = 50;
var score2 = 100;
var sum = score1 + score2;
var str = '1';
var str2 = str;
console.log(str2); //str is now of type number 
console.log("name: " + name1);
console.log("First Score: " + score1);
console.log("Second Score: " + score2);
console.log("Sum of score are: " + sum);
