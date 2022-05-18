import {
  sum,
  multiplication,
  sumSymbolsLen,
  tripleDigitsSum,
  getGreatestNumber,
  getMonthByNumber,
  checkCircleInsideSquare,
  sumOfNumbers,
  multiplicationOnSeven,
  getAverage,
  alterObject,
  getArraySum,
  alterArray,
  diff,
  isWord,
  pow,
  inputChecker,
  buttonClick,
} from "./src/types";

const input = document.querySelector(".text-field");
const button = document.querySelector(".button");

input.addEventListener("input", () => inputChecker(input));
button.addEventListener("click", () => buttonClick(input));

console.log(sum(2, 3));
console.log(multiplication(2, 3));
console.log(sumSymbolsLen("John", "Lennon"));
const strValue = prompt("Enter three-digit number:");
console.log(tripleDigitsSum(strValue));
console.log(getGreatestNumber(2, 3));
const num = prompt("Enter month number:");
console.log(getMonthByNumber(num));
console.log(checkCircleInsideSquare(64, 64));
console.log(sumOfNumbers(50, 100));
multiplicationOnSeven();
const avNumber = prompt("Enter number value:");
console.log(getAverage(avNumber));
let user = {
  name: "John",
};
const ageValue = prompt("Enter age value:");
user = alterObject(user, ageValue);
console.log(user);
const admin = { ...user, role: "admin" };
console.log(admin);
const { name, age, role } = admin;
console.log(name, age, role);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getArraySum(arr));
console.log(alterArray(arr));
const maxValue = Math.max(...arr);
const minValue = Math.min(...arr);
console.log(maxValue, minValue);
console.log(diff(2, 8));
console.log(isWord("test value"));
console.log(pow(2, 3));
