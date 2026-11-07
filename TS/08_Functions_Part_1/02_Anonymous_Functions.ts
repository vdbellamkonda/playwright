

//  Anonymous function (Unnamed Function/Nameless Function)

/*
    An Anonymous function is a function that does not have a name
    Instead, it is assigned to a variable, which acts as it's name

    Syntax:

    let variable = function(parameters)
    {
        // function body
    };

    Invoking the above function:

    variable();

*/

// Example 1:   Anonymous Function

            let msg=function():String
             {
                   return "Hello TypeScript";
             }

//          Invoking

            console.log(msg());


// Example 2:   Ananymous function with parameters

            let multiply=function(a:number,b:number):number
            {
                return a*b;
            }

//          Invoking

            console.log(multiply(10,20));


// Same as named functions, all the other functions are possible in Anonymous function as below:
/*
        Named function with no parameters and no return type
        Named function with parameters and return type
        Named function with rest parameters  -  same types
        Named function with Rest parameters - multiple types
        Named functions with optional parameters
        Named finction with default parameters
*/



