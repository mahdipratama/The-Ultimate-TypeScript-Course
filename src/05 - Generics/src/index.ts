/* Understanding the Problem */

/* Generic Classes */

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair('1', 'a');

console.log(pair);

/* Generic Functions */

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils.wrapInArray('1');

console.log(numbers);

/* Generic Interfaces */

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  if (url) return { data: null, error: null };
  else return { data: null, error: 'url is invalid' };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<Product>('url');

console.log(result.data?.title);

/* Generic Constraints */

/* The keyof operator */

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  return value;
}

console.log(echo(new Customer('A')));

/* Extending Generic Classes */

interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // If T is Product
  // keyof T => 'name' | 'price'

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: 'a', price: 1, title: 'bread' });
store.find('name', 'a');

// Pass on the generic type parameter

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter

// class SearchableStore<T extends { name: string }> extends Store<T> {
//     override find(name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name);
//     }
// }

// Fix the generic type parameter

// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

/* Type Mapping */

interface Goods {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  // Index signature
  // keyof

  readonly [Property in keyof T]: T[Property];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let goods: ReadOnly<Goods> = {
  name: 'a',
  price: 1,
};

/* Exercises */

// 1
function genericEcho<T>(arg: T): T {
  return arg;
}

// 2
function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

// 3

class Entity<T> {
  constructor(public id: T) {}
}

// 4

//It returns a union of the properties of User: ‘userId’ | ‘username
