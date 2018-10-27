class Car
{
    engine:string;

    constructor(engine:string)
    {
        this.engine = engine;
    }

    display():void
    {
      console.log("Function display Engine is : " +this.engine);
    }
}

var obj2 = new Car("Volvo")

console.log("Reading attribute value Engine as :" +obj2.engine)

obj2.display();