// ---> Example: 3

// Assign array elements to variables

const colors = ["red", "green", "blue", "black","white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);