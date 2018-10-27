var func = function (x)
{
    if (typeof x == "number")
    {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string")
    {
        console.log(x + "is a string");
    }
};
func(25);
func("tom");