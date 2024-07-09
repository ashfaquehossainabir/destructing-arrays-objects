// ---> Example: 4

// Extract values from objects

const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34
}

const {firstName, lastName, age, job = "Unemployed"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);