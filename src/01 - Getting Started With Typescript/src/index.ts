console.log('Hello world');

let age: number = 20;

/*
  The export {} statement indicates that the file is an ES module. In TypeScript, any file containing a top-level import or export is considered to be a module.

  Without top-level import or export declarations, the file gets treated as a script whose contents are available in the global scope (and to other modules). This is what causes the name clash between our name variable and the name variable declared in TypeScript global typings.
*/
export {};
