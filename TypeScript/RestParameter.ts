function addNumbers(...nums:number[])
{
   var i;
   var sum:number = 0;

   for(i = 0; i <nums.length; i++)
   {
       sum = sum + nums[i];
   }
   console.log("Sum of the numbers",sum)
}
addNumbers(1,2,5)
addNumbers(10,10,20,30,50)