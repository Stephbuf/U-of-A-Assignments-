//For Loop
//Initialization; Condition; Increment

async function main() {
    for (let number = 0; number <=5; number++) { //starting at 0, ending at 5, incrementing by 1
        output(number);
        //Run 1: is 0  <=5 No. Output 0. Increment to 1
        //Run 2: is 1  <=5 No. Output 1. Increment to 2
        //Run 3: is 2  <=5 No. Output 2. Increment to 3
        //Run 4: is 3  <=5 No. Output 3. Increment to 4
        //Run 5: is 4  <=5 No. Output 4. Increment to 5
        //Run 6: is 5  <=5 No. Output 5. Increment to 6
        //Run 7: is 6  <=5 Yes. Exit loop.
    }

    const student = {
      Alice:"A+",
      Bob:"B-",
      Charlie:"C"
}
for (let studentName in student) {
 student[studentName] = "A+"; //change all grades to A+
  output(`${studentName} has a grade of ${student[studentName]}`);
}

colors = ["red", "green", "blue"];
let counter = 0;

for (let color of colors) {
  counter++;
output( 'Color ' + counter + ': ' + color);

}

let counter2 = 0;
while (counter2 < 5) {
  output("Not yet 5");
  counter2+=3;  
}
//Run 1: counter2 = 0. Is 0 < 5? Yes. Output "Not yet 5". 
//Run 2: counter2 = 3. Is 3 < 5? Yes. Output "Not yet 5".
//Run 3: counter2 = 6. Is 6 < 5? No. Exit loop.

let password;

while (password !== "1234") {
  password = await input("Password: (while):");
}

do {
  password = await input("Password (while):");
} while (password !== "1234");



}
