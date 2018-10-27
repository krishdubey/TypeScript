var global_num = 12; // global variable
var Number1 = /** @class */ (function () {
    function Number1() {
        this.num_val = 13; // class variable
    }
    Number1.prototype.storeNum = function () {
        var local_num = 14; // local variable
        console.log("Local variable:" + local_num);
    };
    Number1.sval = 10; // static field
    return Number1;
}());
console.log("Global num: " + global_num);
console.log(Number1.sval); // static variable
var obj1 = new Number1();
console.log("GLobal num:" + obj1.num_val);
