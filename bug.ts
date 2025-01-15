function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

//This is an example of a common error where the function's return type is not explicitly specified.
//TypeScript will infer the return type based on the function's implementation, but it's best practice to always explicitly specify the return type.

//Example of an uncommon error involving generics:

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity; //This is perfectly valid
//let myIdentity: <T>(arg:T) => T = identity; //This will produce a type error