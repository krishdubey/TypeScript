var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PrintClass = /** @class */ (function () {
    function PrintClass() {
    }
    PrintClass.prototype.disp2 = function () {
        console.log("THis is parent class");
    };
    return PrintClass;
}());
var StringClass = /** @class */ (function (_super) {
    __extends(StringClass, _super);
    function StringClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringClass.prototype.disp2 = function () {
        _super.prototype.disp2.call(this);
        console.log("THis is child class");
    };
    return StringClass;
}(PrintClass));
var obj4 = new StringClass();
obj4.disp2();
