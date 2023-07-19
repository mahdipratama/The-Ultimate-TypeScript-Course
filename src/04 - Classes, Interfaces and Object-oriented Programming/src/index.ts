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

  // private calculateTax() {
  //   return this._balance * 1.2;
  // }

  getBalance(): number {
    return this._balance;
  }
}

const account2 = new Account2(1, 'Nami', 120);
// We can't access the balance property outside of its class because we set the property with 'private' keyword
// account2.balance = -1;

//==================================================================//

// Parameter Properties

class Account3 {
  // readonly id: number;
  // owner: string;
  // private _balance: number;
  nickname?: string;

  // Parameter properties create concise code
  constructor(
    public id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;
  }

  // private calculateTax() {
  //   return this._balance * 1.2;
  // }

  getBalance(): number {
    return this._balance;
  }
}

//==================================================================//

// Getters and Setters

class Account4 {
  nickname?: string;

  constructor(
    public id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Invalid amount');
    this._balance += amount;
  }

  // private calculateTax() {
  //   return this._balance * 1.2;
  // }

  // getters is a method inside class that we used for getting a value of property
  get balance(): number {
    return this._balance;
  }

  // for setting its value
  // set balance(value: number) {
  //   if (value < 0) throw new Error('Invalid value');

  //   this._balance = value;
  // }
}

const account4 = new Account4(1, 'Nami', 120);
console.log(account4.balance);
// account4.balance = 1;

//==================================================================//

// Index Signatures

// Index Signatures for creating object properties dinamically

class SeatAssignment {
  // A1, A2, ...
  // Nami, Pika, ...

  // Index signature property
  [seatNumber: string]: string;
}

const seats = new SeatAssignment();
seats.A1 = 'Nami';
seats.A2 = 'Pika';

//==================================================================//

// Static Members

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

//==================================================================//

// Inheritance

// as Best practice we should implement each class in seperate file
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('Walking');
  }
}

// 'extends' keyword to tell this Student class inherit everything from the Person class
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    // super() to call the constructor of the parent class (Person)
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test');
  }
}
