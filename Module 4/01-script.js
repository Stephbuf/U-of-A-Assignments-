async function main() {
    //Data Structures
    // Arrays

    let student_stephanie = ['Stephanie', 32, "A+"];
    //                         0           1    2
    let student_monica = ['Monica', 28, "A"];
    output("Student Name: " + student_stephanie[0]);
    output ("Student Grade: " + student_stephanie[3]);
    output(student_monica.length);

    let colors = ["red", "green", "blue"];

    let choice = await input("Choose an index (between 0 and " + (colors.length - 1) + ")");
    if (choice > colors.length - 1) {
        output("Invalid index");
    } else {
        output(colors[choice]);
}
output(colors.indexOf("black")); 
let color = await input("Enter a color to search for:");
if (colors.indexOf(color) === -1) {
    output(color + " not found");
} else {
    output(colors.indexOf(color) );
}

colors.splice(1,1); //removes green, keeps red and blue
output(colors); 

colors.splice(1,2); //Removes green and blue, red remains
output(colors); 

colors.splice(1,2, "white", "black" ); //Removes green and blue, adds white and black
output(colors);

//colors: red, white, black
colors[1] = "purple"; //Changes white to purple
output(colors);

//arrays are reference types
const a = [1,2,3];
const b = a;
b.push(4);
output(a); //Outputs [1,2,3,4]

const original = [1,2,3];
const copy = original.slice(); //Creates a copy of the array
copy.push(123);
output(original); //Outputs [1,2,3]
output(copy); //Outputs [1,2,3,123]

const combined = original.concat(original);
output(combined); //Outputs [1,2,3,1,2,3]
output(combined.sort); //Outputs [1,1,2,2,3,3]

const reversed = combined.reverse();
output(reversed); //Outputs [3,3,2,2,1,1]

//multidimensional arrays
let grades = [
    ["Stephanie", 32, "A+"], //2D array 0,1,2
    ["Monica", 28, "A"]
    ["Jon", 24, "B"]
];


// //Array.push() Array.unshift()
// colors.unshift("yellow");
// colors.push("grey");
// output(colors);
// //Outout would be: ["yellow", "red", "green", "blue", "grey"]

// //Array.pop() Array.shift()
// colors.shift();
// colors.shift();
// output(colors);
}