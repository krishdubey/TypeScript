interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var obj7 = new AgriLoan(10,1) 
 console.log("Interest is : "+obj7.interest+" Rebate is : "+obj7.rebate )