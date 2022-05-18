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
} from "./src/types";

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
