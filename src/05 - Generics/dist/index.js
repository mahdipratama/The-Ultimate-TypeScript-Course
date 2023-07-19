"use strict";
var _a;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair('1', 'a');
console.log(pair);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray('1');
console.log(numbers);
function fetch(url) {
    if (url)
        return { data: null, error: null };
    else
        return { data: null, error: 'url is invalid' };
}
let result = fetch('url');
console.log((_a = result.data) === null || _a === void 0 ? void 0 : _a.title);
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
console.log(echo(new Customer('A')));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: 'a', price: 1, title: 'bread' });
store.find('name', 'a');
class CompressibleStore extends Store {
    compress() { }
}
let goods = {
    name: 'a',
    price: 1,
};
function genericEcho(arg) {
    return arg;
}
function printName(obj) {
    console.log(obj.name);
}
class Entity {
    constructor(id) {
        this.id = id;
    }
}
