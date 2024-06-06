//<------------------ Operators Precedence -------------------------->
// =================================================================//


let result = ((5 + 3) * 2 - 4) / (2 ** 2) + Math.sqrt(16);
console.log(result);


/*Inside the parentheses (5 + 3), we have addition, so we first add 5 and 3 to get 8.

Next, we have multiplication within the parentheses 8 * 2, resulting in 16.

Then, we subtract 4 from 16, giving us 12.

After that, we divide 12 by 2 ** 2, which is 4.

Then, we calculate the square root of 16 using Math.sqrt(16), which is 4.

Finally, we add the results of steps 4 and 5, resulting in 8.*/

let result1 = 2 ** 3 ** 2; 
console.log(result1);
// Here, 3 ** 2 is evaluated first, then 2 ** result of 3 ** 2
// Exponentiation has the second-highest precedence. It is evaluated from right to left.

let result2 = 5 * 3 / 2; 
console.log(result2);

// Here, 5 * 3 is evaluated first, then the result is divided by 2.

// Multiplication *, Division /, and Remainder %: Multiplication, division, and remainder operators have the same precedence level. They are evaluated from left to right.
let result3 = 5 + 3 - 2;
console.log(result3); 

// Here, 5 + 3 is evaluated first, then subtract 2 from the result.

// Addition + and Subtraction -: Addition and subtraction operators have the same precedence level, which is lower than multiplication, division, and remainder. They are evaluated from left to right.


// <-------------------- Backward For Loop: --------------------------------->
// ===========================================================================//

let subjects = ["Math", "Science", "History", "English"];

for (let i = subjects.length - 1; i >= 0; i--) {
    console.log(subjects[i]);
}






// Function to perform operations and log results



function performOperations() {
    // Addition
    let additionResult = 10 + 5;
    console.log("Addition Result:", additionResult);

    // Subtraction
    let subtractionResult = 10 - 5;
    console.log("Subtraction Result:", subtractionResult);

    // Multiplication
    let multiplicationResult = 10 * 5;
    console.log("Multiplication Result:", multiplicationResult);

    // Division
    let divisionResult = 10 / 5;
    console.log("Division Result:", divisionResult);

    // Modulo
    let moduloResult = 10 % 3;
    console.log("Modulo Result:", moduloResult);

    // String Concatenation
    let stringConcatenationResult = "Hello" + " " + "World";
    console.log("String Concatenation Result:", stringConcatenationResult);

    // Boolean Operations
    let trueValue = true;
    let falseValue = false;

    // Logical AND
    let logicalAndResult = trueValue && falseValue;
    console.log("Logical AND Result:", logicalAndResult);

    // Logical OR
    let logicalOrResult = trueValue || falseValue;
    console.log("Logical OR Result:", logicalOrResult);

    // Logical NOT
    let logicalNotResult = !trueValue;
    console.log("Logical NOT Result:", logicalNotResult);
}

// Perform operations and log results
performOperations();
