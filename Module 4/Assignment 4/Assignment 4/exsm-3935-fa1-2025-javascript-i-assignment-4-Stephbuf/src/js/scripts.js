async function main() {

  // Users
  let users = {
    "stephanie": "password123",
    "jonathan": "password456",
    "whiskey": "catlover123",
    "luna": "catlover456"
  };

  output("1. Register");
  output("2. Login");
  output("3. Quit");

  let choice = await input("Enter 1, 2, or 3: ");

  // Register
  if (choice === "1") {
    output("--- Register ---");

    let username = await input("Create a username: ");

    if (users.hasOwnProperty(username)) {
      output("That username already exists. Program ending.");
      return;
    }

    let password = await input("Create a password (at least 8 characters): ");

    if (password.length < 8) {
      output("Password too short. Program ending.");
      return;
    }

    users[username] = password;
    output("Registration Successful!");
    return;
  }

  // Login
  else if (choice === "2") {
    output("--- Login ---");

    let username = await input("Enter your username: ");

    if (!users.hasOwnProperty(username)) {
      output("Username not found. Program ending.");
      return;
    }

    let password = await input("Enter your password: ");

    if (password.length < 8) {
      output("Password too short. Program ending.");
      return;
    }

    if (password === users[username]) {
      output("Login Successful!");
    } else {
      output("Incorrect password. Program ending.");
    }

    return;
  }

  // Quit
  else if (choice === "3") {
    output("Goodbye!");
    return;
  }

}
