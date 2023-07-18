//==================================================================//

// Type Aliases
// we can define a custom type
// we can re-use this in multiple places
type Employee = {
  // id can't be overwritten
  readonly id: number;
  name: string;

  // method
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};

//==================================================================//

// Union Types
// We can give a variable or function parameter more than 1 type
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

//==================================================================//

// Intersection Types
// We can combine types with Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//==================================================================//

// Literal Types
// To limit a values we can assign to a variable

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// it's also can be a string not only number
type Metric = 'cm' | 'inch';

//==================================================================//

// Nullable Types

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hola!');
}

//==================================================================//

// Optional Chaining

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');

//==================================================================//

// Nullish Coalescing Operator

let speed: number | null = null;
let ride = {
  // Falsy (undefined , null, '', false, 0)
  // Nullish coalescing operator
  speed: speed ?? 30,
};

//==================================================================//

// Type Assetions

let phone = <HTMLInputElement>document.getElementById('phone');
// HTMLElement
// HTMLInputElement
phone.value;

//==================================================================//

// The unknown Type

function render(document: unknown) {
  // Narrowing
  if (typeof document === 'string') console.log(document.toUpperCase());

  if (document instanceof Function) console.log(document.name);
}

//==================================================================//

// The never Type

function processEvents(): never {
  // This function never returns because
  // it has an infinite loop.
  while (true) {}
}

// processEvents();

// below will be unreachable
// console.log('Hello World');

/*EXERCISES*/

// 1). Given the data below, de ne a type alias for representing users.

type Users = { name: string; age: number; occupation?: string }[];

let user: Users = [
  {
    name: 'John Smith',
    age: 30,
    occupation: 'Software engineer',
  },
  {
    name: 'Kate Muller',
    age: 28,
  },
];

// 2). Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type Pet = 'Bird' | 'Fish';

// 3). Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';
