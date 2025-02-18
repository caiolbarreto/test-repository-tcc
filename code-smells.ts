class UserManager {
  users: any[] = []; // Bad practice: Use proper typing

  addUser(name: string, age: number) {
    let user = { name: name, age: age, createdAt: new Date() };
    this.users.push(user);
    console.log("User added: " + name); // Code smell: Logging inside business logic
  }

  getUser(name: string) {
    for (let i = 0; i < this.users.length; i++) { // Code smell: Use array methods like find()
      if (this.users[i].name === name) {
        return this.users[i];
      }
    }
    return null;
  }

  deleteUser(name: string) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === name) {
        this.users.splice(i, 1); // Code smell: Modifying array while iterating
        console.log("User deleted: " + name);
        return;
      }
    }
  }
}

function calculateDiscount(price: number) {
  return price * 0.1; // Code smell: Magic number
}

function processOrder(order: any) { // Bad practice: Use proper typing
  console.log("Processing order for: " + order.customerName);
  if (order.amount > 1000) {
    console.log("Big order detected");
  } else {
    console.log("Regular order");
  }
}

const manager = new UserManager();
manager.addUser("Alice", 30);
manager.addUser("Bob", 25);
console.log(manager.getUser("Alice"));
