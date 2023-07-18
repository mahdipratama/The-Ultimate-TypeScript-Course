//==================================================================//

// Create Classes

class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this.balance += amount;
  }
}

//==================================================================//

// Creating Objects

const account1 = new Account(1, 'Nami', 0);
account1.deposit(100);
console.log(account1.balance); // 100
console.log(account1); // Account { id: 1, owner: 'Nami', balance: 100 }
console.log(typeof account1); // Object
console.log(account1 instanceof Account); // true

//==================================================================//

// Read-only and Optional Properties

class Account1 {
  // read-only would make it robust
  readonly id: number;
  owner: string;
  balance: number;
  // '?' would make it Optional
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this.balance += amount;
  }
}
