// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring


// ---> Example: 1

// Swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log('a = ' + a + ',','b = ' + b);