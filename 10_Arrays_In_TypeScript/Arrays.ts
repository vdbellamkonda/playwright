
// What is an Array ?
// 
//      Array is a variable which hold multiple values that can be same data types or different data types.
//      where normal varibale can hold only single value at a time, if over ride it will replace the latest value.
// 
//      An array is a special type of variable that stores multiple values
//      The values can be same data types or different data types
//      Arrays are declared using '[]' or the generic 'Array<T>' type
//      Indexing starts from 0
//      Arrays are an ordered collect of elements. 
//  





//  Approach 1: - Using leteral        leteral=>using let keyword, using data type when delcaring array

//      Declaring an Array

            let names:string[]=[];      // Declaration

//      Initilization/assigning values

            names[0]="John";
            names[1]="Smith";
            names[2]="Peter";
            names[3]="Scott";


//      Declaration and initilization

            let names1:string[]=["John","Smith","Peter","Scott"];

//      Printing array values
            console.log(names)
            console.log(names1)

//  Approach 2: - Using the generic Array<T> type

//      Declaration and initilization

            let empNames:Array<string>=["John","Smith","Peter","Scott"];    // Array which stores string data type
            let empids:Array<number>=[1001,1002,1003,1004];                 // Array which stores numbers
            let data:Array<string|number>=["John",1001,"Smith",1002];       // Array which stores string and numbers using union data type

            let mixedData:Array<any>=[1001,"John",true,null];                  // Array which stores any type of data

        //  Printing all the values un array
            console.log(mixedData);

        //  Get perticular data from array using index
            console.log(mixedData[2]);

        //  To know the size of the Array
            console.log(mixedData.length)   // oupt is 4, This gives ouput how many values are in Array. Do not work with index

        // Iterating over an Array using a treditional/clasical for loop

            for(let i=0;i<mixedData.length;i++)     // Here length gives the values count, here length value is 4, but index last bound is 3. so we have to use i<array.length which gives value as 3 or we can use i<=array.length-1 which gives same value 3
            {
                console.log(mixedData[i]);
            }

        // Iterating using the 'for...in' loop (indexes)
        console.log("=== for...in loop ===")

        /*
            Syntax:

                for(let i in ArrayName)             => here no need to specify any condition, loop will exit after all the values are captured
                {
                    console.log(ArrayName[i]);
                }

        */

                for(let i in mixedData)     // i represents index not a value. i takes the value from mixedData array and prints from console.log in the block and repeate untill the end of the array
                {
                    console.log(mixedData[i]);
                }

        // Iterating using the 'for...of' loop (values)
            console.log("=== for...of loop ===")
            
                for(let value of mixedData) // for...of loop works on values of Array, let value is a variable and can use anything here. value variable takes the values of mixedData Array and console.log block will print the values
                {
                    console.log(value);
                }

// Example 4: Passing an Array to the function
//  Search an element in an array using function
    console.log("=== Passing Array into function ===")

            function search(ele:number,arr:number[]):boolean    // Passing an array in to function
            {
                for(let i=0;i<arr.length;i++)
                {
                    if(arr[i]===ele)
                    {
                        return true
                    }
                }
                return false
            }

            let arr:number[]=[10,20,30,40,50]

            console.log(search(30,arr));    // calling search function by passing both ele value and arr
            console.log(search(100,arr));


// Example 5: A function takes an Array and returns An Array
//   function which takes letters and conver them into capital letters and return the capital letters array

            function capitalizeWords(arr:String[]):string[]
            {
                let capital:string[]=[];
                for(let i=0;i<arr.length;i++)
                {
                    capital[i]=arr[i].toUpperCase();
                }
                return capital;
            }

            // declaring an Array to pass into the function

            let lower:string[]=["welcome","to","typescript",]

            // Calling the function by passing the array into the function

            console.log(capitalizeWords(lower));



            