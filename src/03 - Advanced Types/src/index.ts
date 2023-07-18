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
