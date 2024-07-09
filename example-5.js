// ---> Example: 5

// Destructure in function parameters

function displayPerson({firstName, lastName, age, job = "Unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

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

displayPerson(person2);