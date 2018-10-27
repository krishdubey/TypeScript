var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    StaticClass.disp = function () {
        console.log("Print the value of num " + StaticClass.num);
    };
    return StaticClass;
}());
StaticClass.num = 25;
StaticClass.disp();
