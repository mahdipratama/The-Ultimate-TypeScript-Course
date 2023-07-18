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

// , it's also can be a string not only number
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
