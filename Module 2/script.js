
async function main() {
//Relational Operators:
// < (less than)
// > (greater than)
// <= (less than or equal to)
// >= (greater than or equal to)
// == (equal to)
// != (not equal to)
// === eg. 5 === "5" false, so five is equal to five, but one is a number and the other is a string

// Order of operations: PEMDAS - Parentheses, Exponents, Multiplication, Division, Addition, Subtraction
// PEMDAS is used in programming to determine the order of operations. It's a way to determine the order in which the operators are applied.

// Logical Operators:
// && (and)
// || (or)
// ! (not)

//Logical Operators

// Logical AND (&&) returns true if both operands are true
// Logical OR (||) returns true if either operand is true
// Logical NOT (!) returns true if the operand is false

// if (b > 5) {
//     // code to execute if condition is true
//     output("B is at least 6.");
// } else {
//     // code to execute if condition is false
//     output("B is less than 6.");


// if (b >= 5) {
//     // code to execute if condition is true
//     output("B is at least 5.");
// } else {
//     // code to execute if condition is false
//     output("B is less than 5.");
// }

let grade = 91;

// if (grade >= 90) {
//     output("You got an A.");

// } else if (grade >= 80) {
//     output("You got a B.");

// } else if (grade >= 70) {
//     output("You got a C.");

// } else if (grade >= 60) {
//     output("You got a D.");

// } else {
//     output("You got an F.");
// }

// Ternary Operator
// condition ? true : false
// grade > 90 ? output("You got an A."):
// grade > 80 ? output("You got a B."):
// grade > 70 ? output("You got a C."):
// grade > 60 ? output("You got a D."):
// output("You got an F.");

let name = await input("Enter your name: ");
if (!name) {
    output("Error, you did not enter a name.");
}
else {
    output("Hello, " + name + "!");
}

// Condition? true : false

!name? output("Error, you did not enter a name.") : output("Hello, " + name + "!");

// Switch Statement
grade = Math.floor(grade / 10);
switch(grade) {
    case 9:
        output("You got an A.");
        break;
    case 8:
        output("You got a B.");
        break; // break exists the current block
    case 7:
        output("You got a C.");
        break;
    case 6:
        output("You got a D.");
        break;
    default:
        output("You got an F."); 
}

day = "Monday";
switch(day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        output("It's a weekday.");
        break;
    case "Saturday":
    case "Sunday":
        output("It's the weekend.");
        break;
    default:
        output("Invalid Day.");

}
}

//strip is to get rid of spaces