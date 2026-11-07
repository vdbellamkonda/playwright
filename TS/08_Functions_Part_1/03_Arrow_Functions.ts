// Arrow functions are also called as Lamda function

/*
Lambda refers to Anonymous function in programming
Lambda functions are a concise mechanism to represent Anonymous functions
These functions ae also called as arrow functions


There are 3 parts to lambda functions

1. Parameters - A function may optionally have parameters
2. The fat arrow notation/lambda notation (=>) - It is also called as the "goes to the operator"
3. statements - represent the function instruction set


    Syntax:

        let variable = (parameters) =>
        {
            block of statements
        }

    Invoking:

    variable();

*/


// Example 1:   Arrow function with no parameter and no return type

        let greet=():void =>
            {
                console.log("Hello TypeScript")
            }

//      Invoking

        greet();


// Example 2:   Arrow function with parameters and return type

        let add=(a:number,b:number):number=>
        {
            return a+b;
        }

//      Invoking

        console.log(add(2,3));

// Example 3:   Arrow function with implicit return     Implicit return=>we no need to write curly braces and return statement

        let mul=(a:number,b:number)=>a*b    // Here if the statement is only one, no need {} braceses and return type, This only works if only single statement is in the body, if multiple are there we need add them in the {}
        let sum=(a:number,b:number)=>a+b

//      Invoking

        console.log(mul(2,2));
        console.log(sum(4,4));

// Example 4:   Arrow function with optional parameters

        let opt=(a:String,b?:String):void =>
        {
            console.log(a," ",b);
        }

//      Invoking

        opt("Hello");       // Here b is optional parameter


// Example 5:   Arrow function with default parameters

        let disc=(price:number,rate:number=0.5):void=>
        {
            let res=price*rate;
            console.log(res)
        }

//      Invoking

        disc(20);

// Example 6:   Arrow function with rest parameters

        let rest=(...add:number[]):void=>
        {
            let sum=0;
            for(let i=0;i<add.length;i++)
            {
                sum=sum+add[i];
            }
            console.log(sum);
        }

//      Invoking

        rest(2,2,2);
