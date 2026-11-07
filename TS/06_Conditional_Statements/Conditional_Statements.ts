// This is also called as decision making statements

// When ever we want to execute a set of statements based on sertain condition


// 1) if condition

/*
Syntax:     if(condition)   => we use Relational or Logical operators or combined both, so that the output will be true or false, here the condition will returns true or false and executes the respective block of statements
            {
                Statements  => If the condition is false, these statements will be ignored
            }


2) if else condition

    if(condition)
    {
        Statement   =>  if condition is true this statement will execute
    }
    else
    {
        Statement   =>  if condition is false else statement will be executed
    }

*/

//  Example 1:    verifying person is eligible for vote, condition age>18 will be eligible for vote

        let age=20;

        if(age>18)
            {
                console.log("Eligible for vote");
            }
        else
            {
                console.log("Not eligible foe vote")
            }

//  Example 2:      Print the number is even or not

            let num=20;

            if(num%2==0)
            {
                console.log(num," is even")
            }
            else
            {
                console.log(`${num}is odd`)     // Here ` is used to parameterise the variable inside string
            }


// 3) Nested if else        =>  Adding multiple if conditions

/*
            if(condition 1)
            {
                Statements;
            }
            else if(condition 2) 
            {
                Statements;
            }
            else if(condition 3)    //we can add n number of conditions as we require
            {
                Statements;
            }
            else
            {
                Statements; 
            }

*/

//  Depending up on marks, isplay appropriate grades
//  marks >=90  Grade A
//  marks >=75  Grade B
//  marks >=60  Grade C
//  Grade D

        let marks:number=85;

        if(marks>=90 && marks<=100)        // condition 1
        {
            console.log("Grade A")
        }
        else if(marks>=75 && marks<90)     // condition 2
        {
            console.log("Grade B")
        }
        else if(marks>=60)                 // condition 3
        {
            console.log("Grade C")
        }
        else
        {
            console.log("Grade D")
        }




// 4) Switch case

/*      

        switch(expression)      => here expression can return anything, like value and some times variable also
        {
        case value 1: statements;       => Here the expression value is compared with value 1 and the statements under value 1 will be executed
                        break;          => break command will exit, if matches. so that no further statements will be executed. If break is not used the next statement will also get executed
        case value 2: statements;
                        break;
        case value 3: statements;
                        break;
        default: statements;        => If non of the expression matches the case values, default block will be executed
        }


*/

// Example: Depending up on the value of the day, print the corresponding day of the week

        let day:number=3

        switch(day)
        {
            case 1: console.log("Day is Sunday")
            break;
            case 2: console.log("Day is Monday")
            break;
            case 3: console.log("Day is Tuesday")
            break;
            case 4: console.log("Day is Wednesday")
            break;
            case 5: console.log("Day is hursday")
            break;
            case 6: console.log("Day is Friday")
            break;
            case 7: console.log("Day is Saturday")
            break;
            default: console.log("Invalid week")

        }


// Example: switch statement can also include an expression

        let x:number=10,y:number=5

        switch(x-y)
        {
            case 0: console.log("")
            break;
            case 4: console.log("")
            break;
            case 5: console.log("")
            break;
            case 6: console.log("")
            break;
            default: console.log("")
        }

