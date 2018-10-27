var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var obj7 = new AgriLoan(10, 1);
console.log("Interest is : " + obj7.interest + " Rebate is : " + obj7.rebate);
