
//  Array is a variable which holds multiple values of different type
//  we have 10 to 15 most important array methods used in automation


let numbers:number[]=[1,2,3,4,5];
let fruits:string[]=["apple","banana","oranage","mango"];


//  length   -   attribute (Not a method)

    console.log("Size of an array:",numbers.length)

//  1. push() -   Adds single/multiple elements to the end of an array

//      If we do not know the index of the last element in an array and want to add a value to the array at the end we use push
//      Syntax: array.push(element1,...,elementN)

        numbers.push(6,7)     //
        console.log("After push():",numbers)


//  2. pop()   -   Removes the last element from an array
//      Removes single last element of an array
//  Syntax: array.pop()


        let lastFruite=fruits.pop();
        console.log("After pop():",fruits);
        console.log("Removed fruite is:",lastFruite)


// 3. shift()  -   Removes the first element from an array
//      Syntax: array.shift()

        let firstNumber=numbers.shift();
        console.log("After shift():",numbers);
        console.log("Removed Number:",firstNumber)


// 4. unshift() -   Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1,...,elementN)

        fruits.unshift("kiwi","pear");
        console.log("After unshift():",fruits)  // [ 'kiwi', 'pear', 'apple', 'banana', 'oranage' ]


// 5. concat()  -   Combines two or more arrays of same type
// Syntax: array.concat(array1,...,arrayN)


        let combinedArray=numbers.concat([8,9][10]);        // Original array will not be impacted, But the concat() will return the combined Array. so storing it in an array
        console.log(numbers)                                // concat method does not effect the original array
        console.log("Concatenated array:",combinedArray)    // This will print the combined Array

// 6. slice()   -   Extracts a section of an array
    // Starting index starts from zero
    // Ending index will be exclusive. Ex: If 3 is ending index, it will consider 2
    // Syntax: array.slice(start, end)

    let names:string[]=["John","Smith","Peter","Scott","Andy"];

    let extractedArray=names.slice(1,3);        // At the time of indexing the last index is exclusive, that means it will take 3-1 i.e, 2 so it will print index: 1&2 indexes
    console.log("After slice:",extractedArray); // ["Smith","Peter"]
    console.log(fruits.slice(2,4))              // ['apple', 'banana']


// 7. splice()  -   Adds/removes elements from an array (From everywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)          =>      After splicing the original Array will be effected

        console.log(fruits);    // [ 'kiwi', 'pear', 'apple', 'banana', 'oranage' ]

    // Example 1:

        let removedElements=fruits.splice(1,2);             // Here 1 is the starting index, 2is representing how many elements to be removed
        console.log("After splice(1,2):",fruits);           // [ 'kiwi', 'banana', 'oranage' ]
        console.log("Removed elements:",removedElements);   // [ 'pear', 'apple' ]

    // Example 2:   -   Adding values

        fruits.splice(1,0,'pineapple','grape');
        console.log("After splice(1,0,'pineapple','grape'):",fruits);   // [ 'kiwi', 'pineapple', 'grape', 'banana', 'oranage' ]

    // Example 3:   -   Deleting and adding

        fruits.splice(1,2,"mango","cherry");
        console.log("After splice(1,2,'mango','cherry')",fruits);   // [ 'kiwi', 'mango', 'cherry', 'banana', 'oranage' ]

// 8. indexOf() -   Finds the index of an element, If element not found then return -1
//  Syntax: array.indexOf(searchElement)    or  array.indexOf(searchElement,starting Index)

    // Ex1:

        let bananaIndex=fruits.indexOf("banana");
        console.log("Index of banana:",bananaIndex);    // 3

    // Ex2:

        let papayaIndex=fruits.indexOf("papaya");       // As there is no papaya in the fruits array, output will be -1
        console.log("Index of papaya:",papayaIndex)

    // Ex3:

        let bananaIndex1=fruits.indexOf("banana",2);    // This will search the string banana in array fruits from index 2, that means it will ignore the 0 and 1 index and starts searching from index 2
        console.log("Index of banana using ('searchEelement','starting index')",bananaIndex1);


// 9. includes()    -   Checks if an element exists
//  True or False
//  Syntax: array.includes(searchElement, FromIndex)

        let isAppleExist=fruits.includes('apple');
        console.log("Does fruits include apple:",isAppleExist)

        let isBananaExist=fruits.includes('banana');
        console.log("Does fruits include banana:",isBananaExist);

// 10. toString -   Converts array to string
// Syntax: array.toString()

        console.log(numbers);   // [ 2, 3, 4, 5, 6, 7 ]

        let numbersString=numbers.toString();
        console.log("Converted Array To String:",numbersString) // 2,3,4,5,6,7

        let myarr:string[]=['w','e','l','c','o','m','e'];
        console.log("Original Array",myarr);    // 
        let toStrArr=myarr.toString();
        console.log(toStrArr);              // w,e,l,c,o,m,e


