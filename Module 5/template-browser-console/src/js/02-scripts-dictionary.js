
async function main() {


  let orders = {
    "abc123": 5,
  };
  
  let quantities = [];
  const alphanumericTest = /^[a-zA-z0-9]+$/; 
  




  if (orderNumberInput.length !== 6) { 
    output(`Invalid order number. It must be 6 alphanumeric characters. You Entered ${orderNumberInput.length} characters. Terminating program.`);
  }
  else if (!alphanumericTest.test(orderNumberInput)) { 
    output(`Invalid order number only contain numberic and alphabetical characters. Terminating program.`);
  }
  else if (orderNumber.has(orderNumberInput)) { 
    output(`Duplicate order number. Terminating program.`);
  }
  else {
    let quantity = await input("Product Quantity (1-100): "); 
    quantity = Number(quantity);

    if (isNaN(quantity) || !Number.isInteger(quantity)) {
      output(`Invalid number, must be a whole number between 1 and 100.`);
    } else if (quantity < 1 || quantity > 100) {
      output(`Invalid quantiy, must be between 1 and 100.`);
    } else {
    order[orderNumber] = quantity;
    }

  }
}
