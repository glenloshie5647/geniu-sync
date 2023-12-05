/*
   File Name: ComplexJavascriptCode.js
   Description: This code example showcases a complex and sophisticated implementation using JavaScript.
   It demonstrates several advanced techniques and concepts, including arrow functions, object-oriented programming, closures, async/await, and more.
   Feel free to modify and expand upon it as needed.
*/

// Creating a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Using arrow function and closure to create a counter
const createCounter = () => {
  let count = 0;

  return () => {
    console.log(`Current count: ${count}`);
    count++;
  };
};

const counter = createCounter();

// Creating an asynchronous function using async/await
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const fetchData = async () => {
  await delay(2000);
  console.log('Data fetched successfully!');
};

// Usage of advanced array methods such as map, filter, and reduce
const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.map((number) => number * 2);

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const sum = numbers.reduce((total, number) => total + number, 0);

// Demonstrating the use of async/await with Promises
const getData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Performing DOM manipulation
const button = document.querySelector('#myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Using template literals for dynamic string generation
const name = 'John Doe';
const age = 30;

console.log(`My name is ${name} and I'm ${age} years old.`);

// Implementing a higher-order function
const higherOrder = (operation) => {
  return (x, y) => {
    return operation(x, y);
  };
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const adder = higherOrder(add);
const subtractor = higherOrder(subtract);

console.log(adder(5, 2)); // Output: 7
console.log(subtractor(5, 2)); // Output: 3

// Creating and manipulating arrays using spread and destructuring
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const [first, second, ...rest] = arr2;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Rest parameters and arrow functions
const sumNumbers = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15

// Nested destructuring
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
};

const {
  name: personName,
  address: { city },
} = person;

console.log(personName); // Output: John Doe
console.log(city); // Output: New York

// Recursive function to calculate factorial
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log(factorial(5)); // Output: 120

// Usage of the ternary operator
const temperature = 25;
const message = temperature > 30 ? 'It is hot outside' : 'It is not hot outside';

console.log(message);

// Using object shorthand notation
const username = 'John Doe';
const age = 25;

const user = {
  username,
  age,
  greeting() {
    console.log(`Hello, my name is ${this.username} and I'm ${this.age} years old.`);
  },
};

user.greeting();

// Implementing a custom iterator
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
}

const range = new Range(1, 5);

for (const number of range) {
  console.log(number);
}

// Using the spread operator to clone objects
const person = {
  name: 'John Doe',
  age: 30,
};

const clonedPerson = { ...person };

console.log(clonedPerson);

// Fetching data from an API using Fetch API and Promise.all
const fetchData = async () => {
  const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];

  const requests = urls.map((url) => fetch(url));

  const responses = await Promise.all(requests);

  const data = await Promise.all(responses.map((response) => response.json()));

  console.log(data);
};

fetchData();

// Exporting and importing modules
// main.js
import { sum } from './math.js';

console.log(sum(2, 3));

// math.js
export const sum = (a, b) => a + b;

// Handling events using EventTarget
const eventTarget = new EventTarget();

eventTarget.addEventListener('myEvent', (event) => {
  console.log(event.detail);
});

const customEvent = new CustomEvent('myEvent', {
  detail: 'Hello world!',
});

eventTarget.dispatchEvent(customEvent);
