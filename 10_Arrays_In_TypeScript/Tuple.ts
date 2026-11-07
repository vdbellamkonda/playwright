
/*
    Tuples in TypeScript:
    A Tuple is a fixed-length array where each element has a specific type
    It helps in storing multiple fields of different data types together

*/


// Example 1:   tuple with 2 values of string, number

    let person:[string,number]=["John",101];     // Here only 2 values are allowed that is decided by how many data types provided

    console.log(person[0]);
    console.log(person[1]);
    console.log(person);

// Example 2:   Tuple with multiple values

    let user:[number,string,boolean,number,string]=[10,"John",true,101,"welcome"];

    console.log(user);


// Example 3:   Iterting over a tuple using a traditional for loop

    console.log("=== Tuple with traditional for loop ===")

    for(let i=0;i<user.length;i++)
    {
        console.log(user[i]);
    }

// Example 4:   Iterating tuple using 'for...in' loop (index based iteration)

    console.log("=== Tuple using 'for...in' loop ===");

    for(let i in user)
    [
        console.log(user[i])
    ]

// Example 5:   Iterating tuple using 'for...in' loop (index based iteration)

    console.log("=== Tuple using 'for...of' loop ===");

    for(let val of user)
    {
        console.log(val);
    }

//  Example 6:  Tuple Array (Array of Tuples)

    let students:[number,string][]=[[1001,"John"],[1002,"Peter"],[1003,"Scott"]];   // This is the array of touple, that means array will contain tuple

    console.log(students.length);   // 3

    console.log(students[0]);   // [101, "John"]

    let tp=students[0];

    console.log(tp[0]);  // which provide the 0 index from tuple i.e, 101