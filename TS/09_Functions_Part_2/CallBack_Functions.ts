
// What is call back function ?

//      A callback function is a funtion, that is passed as an argument to another function gets executed later 
//      callback function is used to solve the asyncrons nature in TS/JS
//      we don't use this much in qa, dev point of it's most important to solve the asyn nature of the programming


/*

    Syntax:

        function abc(a:number,b:number,callback:any)        // Parameters
        {
        console.log(a+b);
        callback();
        }

        Callback function:
        xyz()
        {
        
        }

        // Invoking function which has call back function:
        abc(10,20,xyz)  // Here xyz is the callback function passed as an argument inside a function


*/

// Example 1:


//  Function that takes callback function as parameter

        function greet(name:String,callback:(message:String)=>void)
        {
            console.log(name);
            callback("Hello");
        }


//  Callback function

        function showMessage(message:String)
        {
            console.log(message);
        }

//  calling function by passing the callback function

        greet("John",showMessage);


// Example 2:

//      callback function

        function sum(a:number,b:number)
        {
            console.log(a+b)
        }

//      function

        function displatResult(result:number,sum:(a:number,b:number)=>void)
        {
            console.log(result)
        }