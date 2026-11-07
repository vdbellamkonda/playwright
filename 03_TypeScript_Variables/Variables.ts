/* 

What is a variable?

    Variable is a container which holds some data
    try to create the variables in the lowercase charecters, if we create uppercase char it will convert them into lower case char
    
    Ex:
             x=10
             studentName="john"

    x is variable
    10 is the stored value
    
we have 3 different keyword to decalre variables in TypeScript/JavaScript
  
            var, let, cost

var    = we do not use this in modern JS/TS, Avoid var because it has function scope and can lead to unexpected behaviour
let    = Use let when you need a variable that can change
const  = Use const when the variable value should not change


Declaring a variable:

    Synatax: keyword variableName:datatype=value    =>  Here datatype is optional
    Ex:      var age:number=30  => This is including data type
             var age=30         => This is not including data type as it is optional


Difference between var let const:  we will differentiate the keywords in 5 aspects
                                         
    1. Scope
    2. Declration/Value Assignment
    3. Re-declration
    4. Re-Initialization/Re-assignment
    5. Hosting


Scope - Accessible area (Functional Scope & Block Scope)
    
    Functional scope - variable is accessible throughout the function

    Block Scope - variable is accessible only within the inner block where it is declared
    
            var (functional scope)
            let & const (block scope)
                                                                                    */
//          Ex:

            function varScope()
            {
                let msg="Hello world";
                if(true)
                {
                    // var msg="Hello world";
                }
            console.log(msg);   //we can access var throughout the function anywhere
            }
        varScope()



//    Block Scope (let & const):

            function blockScope()
            {
                if(true)
                {
                    let msg1="Hello let"
                    const msg2="Hello const"

                    console.log(msg1)
                    console.log(msg2)
                }
 //               console.log(msg1)  => msg1 cannot be accessed
 //               console.log(msg2)  => msg2 cannot be accessed
 //               Because both let and const are accessible only with in the block, not in the entire function
            
            }
            blockScope()


            // EX:
            function test()
            {
                var a=10;
                if(true)
                {
                    var b=20;
                    let c=30;
                    const d=40;

                    console.log("Block scope "+a)
                    console.log("Block scope "+b)
                    console.log("Block scope "+c) 
                    console.log("Block scope "+d)
                }

                console.log("Fuctional scope "+a)
                console.log("Fuctional scope "+b)
                // console.log(c)  -   Not accessible 
                // console.log(d)   -   Not accessible

            }
            test()  //Calling the function


//  2. Declration/Value Assignment

//      Ex1: var can be declared without initialization

            var x //Declaration
            console.log(x)  //Here the output will be undefined as no data is provided for the x variable
            x=30    //initiliazation
            console.log(x) //30

//      Ex2: let can be declared without initialization

            let y //Declaration
            console.log(y) //undefined
            y=10    //initialization
            console.log(y) //10

//      Ex3: const cannot be declared without initialization

//          const z     =>  will get compile time error, const cannot be declared without declaration
            const z=10  // const must be initialized at the time of declaration

//      when create a variable with var & let keyword, just declaration is enough. No need to specify the value
//      when you use the const keyword value must be initialised along wiht the declaration


//  3. Re-declration

//      var - allows redeclration
//      let & const - Doesn't allows the redleration

//          Ex1:

            var country="USA";
            var country="India";
            console.log(country)    //India


//          Ex2:

//          let city="Hyd"
//          let city="Pune"     =>      Compile time error

//          Ex3:

//          const group="A"
//          const group="B"     =>      Compile time error


//  4. Re-Initialization/Re-assignment

//      var & let   =>  Re-assignment Allowed
//      const       =>  Re-assignment not Allowed (Only constants allowed - cannot change the value)

//      Ex 1:
        var age=25
        age=30
        console.log(age)    //30

//      Ex 2:
        let number=10
        number=20
        console.log(number)     //20

//      Ex 3:
//      const m=90
//      m=100       =>      Not allowed as const keeps the value same 


//  5. Hosting 
//      before declaring the variable, trying to access the variable

//      var         => Hoisted with undefined
//      let & const =>  Not initialised

//      console.log(a)      => This throughs undefined in the console
        var a=10
        console.log(a)

//      console.log(b)      =>  This throughs Not initialized
        let b=30
        console.log(b)


//      console.log(c)      =>  This throughs Not initialized
        const c=30
        console.log(c)

