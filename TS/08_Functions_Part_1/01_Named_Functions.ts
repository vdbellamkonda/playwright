


//  Whats is a function ?

//      function is a block of statement which will invoke at the time of calling by name of the function
//      A function is a reusable block of code that performs a specific task
//      same set of statements if we want to use instead of writing multiple times, we use the function by calling when ever required
//      Sometimes function require parameters to perform 
//      Sometimes functions return values

// Types of functions:

//      1) Named functions
//      2) Anonoums/nameless function
//      3) Arrow/Lamda function



// 1) NAMED FUNCTION

//          A function which does have a name

    /*
    Implementing the function:

        Syntax:

        function functionname(parameter): returnType        => Here returnType is optional. If the function is not returning anything we have to specify viod, void is also optional
                                                            => Based on type inference concept, function will decide what type of data it is returning if no datatype is specified
        {                                                   
            block of statements
        }

    Invoking/calling the function:

            functionname()

    */


//  Example 1:  Named function with no parameters and no return type

//      Implementation:

        function display(): void    
        {
            console.log("Welcome to TypeScript");        // Here it doesn't return any value, but just it will print the message
        }

//      Invoking

        display();

//  Example 2:  Named function with parameters and return type

//      Implementation:

        function addNumber(x:number,y:number): number
        {
            return x+y;     // Here the return keyword will return the value, we can store it in any variable. Here return won't directly print the value into the console, we have print by stroring it in variable if required
        }

//      Invoking:

        console.log(addNumber(5,10));

//      or store it in a variable and print it

        let res:number=addNumber(2,2);
        console.log(res);


//  Example 3: Named function with rest parameters  -  same types

//      rest parameters => Passing n no of parameters when invoking the function with syntax    ...nums:number[]   using array, this will accept any numbers

        function addNumber1(...nums:number[])
        {
            let i;
            let sum:number=0;
            for(let i=0;i<nums.length;i++)
            {
                sum=sum+nums[i];
            }
            console.log("Sum of number are: ",sum);
        }


//      Invoking:

        addNumber1(3,4,5,6,8)


//  Example 4: Named function with Rest parameters - multiple types

        
        function findElements(...element:(number|String)[])
        {
               
                let sum:number=0;                       // we should use array.length which gives the size of the array instead of all these lines.
                for(let i=0; i<element.length;i++)
                {
                        sum++;
                }
                console.log(`Number of elements are ${sum}`);
        }


//      Invoking

        findElements(1,'d',21.5,'abc')



//  Example 5:   -    Named functions with optional parameters

//      If function should have 2 parameters, we can make any of the parameter optional
//      Create a function with parameters id, name, mailID and make the mailID as optional. Makng mailID by passing ? i.e, mailID?
//      Putting ? will make the parameter as optional


        function displayDetails(id:number, name:String, mailID?:String)         // Making mailID as optional by adding ? This will print undefined for mailID in the output
        {
                console.log(`ID: ${id}`);
                console.log(`Name: ${name}`);
                // console.log(`Email: ${mailID}`)
                if(mailID!==undefined)                  // This condition doesn't allow to return the mailID as undefined
                {
                        console.log(mailID);
                }
        }

//      Invoking function
        displayDetails(1001,'Vinod');


//  Example 6:  -       Named finction with default parameters

        function calculateDiscount(price:number,rate:number=0.5): void          // By initialising the value to the variable it becomes default, if the same variable is initailised while invoking the function, the value assigned while invoking will be prioratised
        {
                let res:number=price*rate
                console.log(res)
        }

//      Invoking the function

        calculateDiscount(100,0.3)      // Here the 0.3 rate is considered and the output is 30, rate is optional here. if no value is provided it will conside default value i.e, 0.5





        