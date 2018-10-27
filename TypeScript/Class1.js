var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.display = function () {
        console.log("Function display Engine is : " + this.engine);
    };
    return Car;
}());
var obj2 = new Car("Volvo");
console.log("Reading attribute value Engine as :" + obj2.engine);
obj2.display();
