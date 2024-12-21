function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  if (typeof x === 'string' || Array.isArray(x)){
    return x.length; // Access length only if x is a string or array
  } else {
    return -1; // Return -1 to indicate an invalid input
  }
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1
console.log(foo(5)); // Output: -1
console.log(foo("hello")); //Output: 5