
async function main() {


  let firstName = await input("what is your first name?");
firstName = String(firstName);

let lastName = await input("what is your last name?");
lastName = String(lastName);

let fullName = firstName + " " + lastName;

    output("Hello, " + fullName.replace(/o/g, "a") + "!");



let largerNum = await input("Please enter a number larger than 10: ");
  largerNum = Number(largerNum);

  let smallerNum = await input("Please enter a number smaller than 10: ");
  smallerNum = Number(smallerNum);

  let remainder = largerNum % smallerNum;

  output("The remainder of " + largerNum + " divided by " + smallerNum + " is " + remainder + ".");
}
  