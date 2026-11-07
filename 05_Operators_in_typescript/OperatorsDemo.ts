//  let a:number=10;
//  let b:number=20;

// Defining the above 2 single statements in a single statements

let a:number=10,b:number=20;    //  we can also declare different data types in this way, which is having same keyword

// 1) Arithematic Operators (+,-,*,**,/,%,) ** is exponential


        console.log("******Arthimatic Operators*****")
        console.log(a+b);
        console.log(a-b);
        console.log(a*b);
        console.log(5**5);  
        console.log(a/b);
        console.log(a%b);



// 2) Assignment Operator  =

        a=10;  // Here we can reassign the values of the variable as the keyword used is let. we are not redeclaring the keyword here, reinitianzing the value. redeclaring the keyword is not allowed in let
        b=5;

        a=a+b; // Initailly a value is 10, Here a+b becomes 15 and it will be assigned to a, that means now the a value is 15
//      This also can be writern usig short hand operator as a=+b which servers same  
        console.log(a); // 15

//      Writing the above arithamatic operators using short hand operator

        console.log("******Assignment Operators*****")
        console.log(a+=b);      // a=a+b
        console.log(a-=b);      // a=a-b
        console.log(a*=b);      // a=a*b
        console.log(a/=b);      // a=a/b
        console.log(a%=b);      // a=a%b

// 3) Relational/Comparision Operators - Always returns only true or false, on comparing both provided value
//  Operators: > < >= <= == != ===(strict equality, only available in TS & JS)


        a=10;
        b=20;

        console.log("*****Relational Operators*****")
        console.log(a<b)    //true
        console.log(a>b)    //false
        console.log(a<=b)   //true
        console.log(a>=b)   //false
        console.log(a==b)   //false
        console.log(a!=b)   //true

    // Difference between ==(Equality) and ===(Strict equality)

        console.log("Difference between == and ====")
        let num1:any=10;
        let num2:any="10";

        console.log(num1==num2)     // true, because it's comparing the values, it compares values
        console.log(num1===num2)    // false, In strict eqality, it will compare the value along with the types as well

//  4) Logical operators - works only eith booleans variables and output boolean
//      && || !


//           b1      b2      &&      ||      !b1
//          true    true    true    true    false
//          true    false   false   true    false
//          false   true    false   true    true
//          false   false   false   false   true

//       we use these logical operators msotly in conditional statements loops statements to validate the conditions

         let b1:boolean=true;
         let b2:boolean=false;        

         console.log("********** Logical Operators **********")

         console.log(b1 && b2);  //false
         console.log(b1 || b2);  //true
         console.log(!b1);       //false
         console.log(!b2);       //true

//       we can use the Logical opreators with the combination of Relational Operators

         console.log("******** Mixing of Logical and Relational Operators ********")

          console.log(20>10 && 30>20);    // true
          console.log(10>20 || 30>20);    // true

//  5) Increment and Decrement Operators

            let x:number=10;

//          x=x+1;  // Incrementing the x value by 1, This also can be writtern as x++;

            x++;    //11, which increses the x value by adding 1, This is called post increment
            ++x;    // Post increment, the output is 12 here which added 1

            let res:number=x++;
            console.log(res);   // Here the output will be 10, because the x value is assigned to variable res, before incrementing because we used post incrementing opreator, but x value will be incremented

            let res1:number=++x;
            console.log(res1);  // Post increment, here we used post increment so the x value is increased by 1 and assigned to the variable res1 so the output will be 11

//          We see the difference in post and pre increasment only when we assign the increment value to a variable

//          Same thing will be applicable for Post/Pre Decrement


//  6) Ternanry/Conditional Operator

//      Syntax:  expression ? res1 : res2;  => Here expression means condition. this will compare both the values and gives the gretest number as output

//      Ex1:

        let a1:number=10, a2:number=20;
        let com:number=(a1>a2)? a1:a2;    // Here a1>a2 is the expression/condition we have to provide. expression outputs boolean. if the condition is true, then a value will be assigned ti the result. If expression is false b value will be returned to the result
        console.log(a1>a2?a1:a2);         // 20

//      Use case: If person age is greater than 18 he should be eligible for vote, if less than 18 not eligible for vote


        let age:number=30;
        let validation:String= (age>=18)? "Eligible for vote":"Not Eligible for vote";
        console.log(validation);




