

async function main() {

  // User input

  // Invalid cost of goods exception code
  let total;
  try{
    
  total = parseFloat(await input("Enter total cost of goods:"));
  if (isNaN(total)) {
    throw new Error("Invalid input, cost of goods must be a number");
  }
  } catch (error) {
    output(error.message);
    return;  
  }

  // Invalid cash payment exception code
  let cash;
  try{
  cash = parseFloat(await input("Enter amount received by customer:"));
  if (isNaN(cash)) {
    throw new Error("Invalid input, cash payment must be a number");
  }
  } catch (error) {
    output(error.message);
    return;
  }


  // Invalid discount exception code
  let discountCode;
  try {
    discountCode = parseInt(await input("Enter a discount code between 0 - 5 :"));
    if (isNaN(discountCode)) {
      throw new Error("Invalid input, discount must be a number");
    }

    if (discountCode < 0 || discountCode > 5) {
      throw new Error("Discount code must be between 0 and 5");
    }
  } catch (error) {
    output(error.message);
    return
  }


  // Calculate discount

  let discountRate;

  switch (discountCode) {
    case 0:
      discountRate = 0;
      break;
    case 1:
      discountRate = 0.10;
      break;
    case 2:
      discountRate = 0.15;
      break;
    case 3:
      discountRate = 0.25;
      break;
    case 4:
      discountRate = 0.35;
      break;
    case 5:
      discountRate = 0.40;
      break;

  }

  // Discount Calculation 

  let discountAmount = total * discountRate;
  let totalAfterDiscount = total - discountAmount;

  // Insufficient payment exception code

  let change = cash - totalAfterDiscount;

  try {
    if (change < 0) {
      throw new Error("Insufficient Payment from customer");
    }
    output("Change back to customer: $" + change.toFixed(2));
  }
  catch (error) {
    output(error.message);
    return;

  }
}

main();