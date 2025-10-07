/*
NOTE: Factory Function Pattern
A Factroy Function is simply a function that creates and returns new objects. It's alternative to using classes or constructors functions.
*/

function createUser(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  };
}

const user1 = createUser("Rafay", 22);
const user2 = createUser("Ali", 18);

user1.sayHello();
user2.age;

function createProduct(name, price) {
  let stock = 10;
  return {
    name,
    price,
    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`booked - ${stock} pieces left.`);
      } else {
        console.error(`we only have ${stock} pieces left`);
      }
    },

    refil(qty) {
      stock += qty;
      console.log(`refilled the stock - ${stock} pieces now`);
    },
  };
}

const iphone = createProduct("iphone 17", 20000000);
iphone.buy(7);
iphone.refil(20);
iphone.price;

// Exmaple with Private Variables (Encapsulation)
function createAccount() {
  (username, password);
}
{
  let balance = 0;

  function logTransaction(type, amount) {
    console.log(`[$(username}] ${type}: $${amount}`);
  }

  return {
    getUsername() {
      return username;
    },

    deposit(amount) {
      balance += amount;
      logTransaction("Deposit", amount);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
        return;
      }

      balance -= amount;
      logTransaction("Withdraw", amount);
    },

    getBalance() {
      return balance;
    },
  };
}

const acc1 = createAccount("rafay_dev", "secret123");
acc1.deposit(500);
acc1.withdraw(100);
console.log(acc1.getBalance()); // 400
console.log(acc1.balance); // undefined (private)
