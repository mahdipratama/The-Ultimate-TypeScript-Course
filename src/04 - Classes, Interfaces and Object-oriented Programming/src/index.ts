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

//==================================================================//

// Access Control Keywords

/*
Modifiers or controling access to properties and method to make more robust code 
3 access modifiers in Typescript : 
 - public
 - private
 - protected 
*/

class Account2 {
  readonly id: number;
  owner: string;
  // private would make it not accessible
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;
  }

  private calculateTax() {
    return this._balance * 1.2;
  }

  getBalance(): number {
    return this._balance;
  }
}

const account2 = new Account2(1, 'Nami', 120);
// We can't access the balance property outside of its class because we set the property with 'private' keyword
// account2.balance = -1;
