
async function main() {
  let orderNumber = new Set(["abc123"]);
  let quantities = [];
  // const alphanumericTest = /^[a-zA-z0-9]+$/; Option 1
    const alphanumericTest = /[a-zA-z0-9][a-zA-z0-9][a-zA-z0-9][a-zA-z0-9][a-zA-z0-9][a-zA-z0-9]/; // Option 2

  // "/" -> indicateds the start and end of a regex 
  // "^" -> indicates the start of the pattern
  // "$" -> indicates the end of the pattern
  // "[]" -> indicates a character class
  // "+" -> indicates one or many characters
  // "[a-zA-Z0-9"] -> indicates characters a to z, A to Z, and 0 to 9


  let orderNumberInput = await input("Enter an order number (6 Alphanumeric characters):");

  if (orderNumberInput.length !== 6) { // Validate length !=== 6 means not equal to 6
    output(`Invalid order number. It must be 6 alphanumeric characters. You Entered ${orderNumberInput.length} characters. Terminating program.`);
  }
  else if (!alphanumericTest.test(orderNumberInput)) { // Validate alphanumeric characters
    output(`Invalid order number only contain numberic and alphabetical characters. Terminating program.`);
  }
  else if (orderNumber.has(orderNumberInput)) { // Check for duplicate order number
    output(`Duplicate order number. Terminating program.`);
  }
  else {
    let quantity = await input("Product Quantity (1-100): "); // Validate quantity
    quantity = Number(quantity);

    if (isNaN(quantity) || !Number.isInteger(quantity)) {
      output(`Invalid number, must be a whole number between 1 and 100.`);
    } else if (quantity < 1 || quantity > 100) {
      output(`Invalid quantiy, must be between 1 and 100.`);
    } else {
      orderNumbers.add(orderNumber);
      quantities.push(quantity); // adds to the end of the array
    }

  }
}
