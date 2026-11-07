
//  Step 1: Write a Signatures of function      What is signature? => A function without having body/Implementation is called function signature
//  Step 2: Implement a function
//  Step 3: Calling a function

//  The name of the functions are same, parameters types should be different, return can be same or different
//  There should be only one implementation that shpuld match the signatures


// Example 1:  Function overloading wiht different parameter types (different data types)

    //  Step 1: Writing a Signature of function

        function getInfo(id:number):String;     // This function is not implimented yet, This is signature of the function
        function getInfo(name:String):String;   // This is another signature, The type of the parameter is different

    //  Step 2: Implementation of the above functions (Single Implementation that matches both the signatures)

        function getInfo(param:number|String):String
        {
            if(typeof param === "number")
            {
                return (`User id is,${param}`);
            }
            else
            {
                return (`User name is ${param}`);
            }
        }

    //  Step 3: Calling function

        console.log(getInfo(101));
        console.log(getInfo("John"));



// Example 2:   Different number of parameters

    //  Step 1: Writing a Signature of function

        function add(a:number,b:number):number
        function add(a:number,b:number,c:number):number

    //  Step 2: Implementation

        function add(a:number,b:number,c?:number):number
        {
            if(c!==undefined)
            {
                return a+b+c;
            }
            else
                return a+b;
        }

    //  Step 3: Calling function

        console.log(add(5,2));
        console.log(add(5,2,5));


    // Example 3:
    console.log("=== Example 3 ===")

        // writing signature

        function greet(name:String):string
        function greet(age:number):string
        function greet(Ismarried:boolean):string

        // Implementation

        function greet(value:String|number|boolean):string
        {
            if(typeof value==="string")
            {
                return `Hello ${value}`
            }
            else if(typeof value==="number")
            {
                return `Age is ${value}`
            }
            else
            {
                let res=value?`Married`:`Single`;
                return res;
            }
        }

        //  Calling the function

        console.log(greet("John"));
        console.log(greet(30));
        console.log(greet(true));
        console.log(greet(false));
