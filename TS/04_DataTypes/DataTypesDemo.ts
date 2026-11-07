
//      There are 2 types of Data Types available in Type Script

/*
    1. Premitive data type(Built in)
        == Premitive data types are the data type which allow single value at a time

        number
        String
        Boolean
        Null
        Undefined
        Any
        Uninon Type
        viod


    2. Non-Premitive Dat Type(Objects)
        == Non-Premitive data types allows to store more than one value/Objects in the variable

        Array
        Class
        function
        interface
        Touple

*/

// PREMITIVE DATA TYPE

//  1) Number
//      It represents both integer and floating-point numbers

            let abc:number=20;
            let price=22.5;
            let big=213432233;

            console.log("ABC: ",abc);   // we use , to concatinate the values. In Java we use + fro concatination
            console.log("price: ",price);
            console.log("big nimber: ",big);

            console.log("Type of abc: ",typeof(abc));
            console.log("Type of price: ",typeof(price));
            console.log("Type of abc: ",typeof(big));


//  2) STRING TYPES 

//          what is String
//              String represents textual data or group of characters or sequence of charactors

//      String can be allowed in:
//          single quote ('')
//          double quote ("")
//          backlit (``)

        let firstName="John";
        let lastName='Kenedy';

        let greeting=`Hello ${firstName} ${lastName}`   // when ever we want to pass data into the String we use backtick as mentioned here. Mostly this is used in data driven testing in automation
        console.log (greeting);

//  3) BOOLEAN TYPE
//      Represents true/false values

    let isStudent:boolean=true;
    let hasJob:boolean=false;

    console.log("Is student?",isStudent)
    console.log("hasJob? ",hasJob)



//  4)  NULL & UNDEFINED
//      Special types for absence of value
//      When ever there is no value to store in a variable, we delcare null or undefined
//      we never use the NULL & UNDEFINED data types, we will see this type when returned by script in some cases, where we declared the variable but not initilized with value and printing it in console we this type as return in console

        let emptyValue:null=null;   // when we declare the data type as :null, we have to asiign null as a value
        let notAssigned:undefined=undefined;

//      let number1:number;
//      console.log(number1);   // In this case the script returns an error saying undefined although it shows compile error at the declarion itself


//  5) ANY DATA TYPE
//       This will violate the rule of type safety. It looses the type script benifits
//       Type Saftey: what every we declare the data type in a variable, it should not accept other data type going further, This is called type safety.
//       If we declare any data type for a variable, it can store any type of data in the variable. which violates the type safety


            let value:any="welcome";    // Type safety doesn't come into picture when a variable is declared with any data type. This variable stores any type of data
            value=20;
            console.log(typeof value)

            value=true;
            console.log(typeof value)

            value=null
            console.log(typeof value)

            value=20.0202
            console.log(typeof value)


//  6) UNION TYPE   -   it's not a data type keyword
//    Combining multiple types
//    If we have a requirement saying the variable data type should accept number or String or boolean, we use union data type

        let id:number|String|boolean;

        id=10;
        console.log(id);

        id="string";
        console.log(id);

        id=true;
        console.log(id);



//  7) VIOD -   Used for functions, not used for variables
//          what is functions: function is a set of program which performs a task, After creting a function we can call/invoke it then only the function will be executed

//      Ex: creating function

            function sum():void     // As this function doesn't return any value, we have to declare viod using colon , In java viod will be declared before function name
            {
                console.log(10+20);
            }
    //      calling a function
            sum();

            // If the function doesn't return anything we should declare void
            // If the function returns some thing we have to declare the return data type

            //  Ex:
            function sum1():number
            {
                return(10+20);
            }

            // Ex2: function which does take parameter and no return type

            function show():void
            {
                console.log("welcome")
            }
            // calling the function
            show();

            // Ex 3: function taking paramenter and don't returns a value

            function add(x:number, y:number)
            {
                console.log(x+y)
            }

            // calling the function
            add(20,30);

            // Ex 4: function taking paramenter and returns a value

            function sum2(x:number, y:number):number    // when a function returns a value, we should declare the return data type. here the return data type is number
            {
                return(x+y);
            }

            //Calling the function

            let Result:number=sum2(100,200);    // Storing the return value in a variable
            console.log(Result);    // Printing the result

            
