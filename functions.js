function gettingUsers() {
  console.log("Getting Users");
}

// Introduction to functions
// function & return keyword
// types of function

// Normal &  Parameterized
function myFunc1() {
  console.log("Hello world");
}

function myFunc2(param1, param2) {
  console.log("Param1: ", param1);
  console.log("Param2: ", param2);
}
// Arrow Function
const myFunc3 = () => {
  console.log("Hello world using Arrow function");
};

// Anonymous Function
(function () {
  console.log("Hello world using Anonymous Function");
})();

(() => {})();

function myFunc4() {
  console.log("hello");
}

(function () {
  console.log("hello");
})();

const myFunc5 = () => {
  console.log("hi");
};

(() => {
  console.log("hi");
})();

myFunc2(5);

// Pure Functions

// return
function sum(a, b) {
  let sum = a + b;
  // complex logic
  return sum;
}

const result = sum(10, 20); // 30
const result1 = sum(10, 20); // 30
const resul3 = sum(10, 20); // 30

function winnerFunc(team1, team2) {
  // complex logic
  return "Some Team";
}

const whoisWinner = winnerFunc("India", "England"); //
const whoisWinner1 = winnerFunc("India", "England"); //

console.log("Result: ", result);

// Pure function -> if a function returns same output for the same parameters

// Impure Function ->if a function does not return same output for the same parameters
