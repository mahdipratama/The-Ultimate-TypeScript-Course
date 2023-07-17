// Built-in Types

//  we can use underscore to seperate the digits to improve readability
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// we don't need to explicitly indicate the type of data
let type = 'beginner'; // string

//==================================================================//

// Any Type

let level; // any
// this is against the idea of typescript,
// and you'd better not use it

level = 1;
level = 'a';

function render(document: any) {
  console.log(document);
}

//==================================================================//

// Arrays

// avoid any[] type array
let numbers = [];
numbers[0] = 1;
numbers[1] = '1';

// do this
let digits: number[] = [];

//==================================================================//

// Tuples (internally it's plain javascript array)

let user: [number, string] = [1, 'Nami'];

//==================================================================//

// Enums

// using const enum, index.js will generate more optimized code
const enum Size {
  Small = 1,
  Medium,
  large,
}
let mySize = Size.Medium;

console.log(mySize);

//==================================================================//

// Functions

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;

  return 1.3 * income;
}

calculateTax(10_000);

//==================================================================//

// Object

let employee: {
  // id can't be overwritten
  readonly id: number;
  name: string;

  // method
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};
