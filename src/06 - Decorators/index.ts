/* What are Decorators */

/* Class Decorators */

/* Parameterized Decorators */

/* Decorator Composition */

type ComponentOptions = {
  selector: string;
};

// Decorator factory

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called');
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('Inserting the component in the DOM');
    };
  };
}

function Pipe(constructor: Function) {
  console.log('Pipe decorator called');
  constructor.prototype.pipe = true;
}

@Component({ selector: '#my-profile' })
@Pipe // This is called first
class ProfileComponent {}

/* Method Decorators */

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  descriptor.value = function (...args: any) {
    console.log('Before');
    original.call(this, ...args);
    console.log('After');
  };
}

class Person {
  @Log
  say(message: string) {
    console.log('Person says ' + message);
  }
}

const person = new Person();
person.say('Hello');

/* Accessor Decorators */

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;

  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };
}

class People {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let people = new People('mosh', 'hamedani');
console.log(people.fullName);

/* Property Decorators */

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },

      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName} should be at least ${length} long`);
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User('1234');
console.log(user.password);

/* Parameter Decorators */

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);

/* Exercises */

// 1

function Sauce(sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce;
  };
}

@Sauce('pesto')
class Pizza {}
