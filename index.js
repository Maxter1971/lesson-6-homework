import {
  sum,
  multiplication,
  sumSymbolsLen,
  tripleDigitsSum,
} from "./src/homework1";
import {
  getGreatestNumber,
  getMonthByNumber,
  checkCircleInsideSquare,
} from "./src/homework2";
import {
  sumOfNumbers,
  multiplicationOnSeven,
  getAverage,
} from "./src/homework3";
import { alterObject, copyObject } from "./src/homework4";
import {
  getArraySum,
  alterArray,
  maxOfArray,
  minOfArray,
} from "./src/homework5";
import { diff, isWord, pow } from "./src/homework6";
import { inputChecker, buttonClick } from "./src/homework7";
import { getDayOfWeek, getFullMins, getYoungerUser } from "./src/homework8";
import {
  isRectangular,
  getCircleParametres,
  getQuadratic,
} from "./src/homework9";
import {
  isDateByRegexp,
  isEmailByRegexp,
  isTelephoneByRegexp,
} from "./src/homework10";

const input = document.querySelector(".text-field");
const button = document.querySelector(".button");

input.addEventListener("input", () => inputChecker());
button.addEventListener("click", () => buttonClick());

console.log(sum(2, 3));
console.log(multiplication(2, 3));
console.log(sumSymbolsLen("John", "Lennon"));
const strValue = +prompt("Enter three-digit number:");
console.log(tripleDigitsSum(strValue));
console.log(getGreatestNumber(2, 3));
const num = +prompt("Enter month number:");
console.log(getMonthByNumber(num));
console.log(checkCircleInsideSquare(64, 64));
console.log(sumOfNumbers(50, 100));
multiplicationOnSeven();
const avNumber = prompt("Enter number value:");
console.log(getAverage(avNumber));
let user = {
  name: "John",
};
const ageValue = +prompt("Enter age value:");
user = alterObject(user, ageValue);
console.log(user);
const admin = copyObject(user);
console.log(admin);
const { name, age, role } = admin;
console.log(name, age, role);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getArraySum(arr));
console.log(alterArray(arr));
const maxValue = maxOfArray(arr);
const minValue = minOfArray(arr);
console.log(maxValue, minValue);
console.log(diff(2, 8));
console.log(isWord("test value"));
console.log(pow(2, 3));
const inputDate = prompt("Enter date:");
console.log(getDayOfWeek(inputDate));
const now = new Date("2022-05-31T03:24:00");
console.log(getFullMins(now));
const firstBirhDay = "12.03.1960";
const secondBirhDay = "22.05.1971";
const youngerUser = getYoungerUser(firstBirhDay, secondBirhDay);
console.log(youngerUser);
console.log(isRectangular(3, 4, 5));
const radius = +prompt("Enter radius:");
const circle = getCircleParametres(radius);
console.log(circle.len, circle.square);
const coefA = +prompt("Enter first coefficient:");
const coefВ = +prompt("Enter second coefficient:");
const coefC = +prompt("Enter third coefficient:");
const quadratic = getQuadratic(coefA, coefВ, coefC);
console.log(quadratic);
const checkDate = prompt("Enter date:");
console.log(isDateByRegexp(checkDate));
const checkEmail = prompt("Enter email:");
console.log(isEmailByRegexp(checkEmail));
const checkTelephone = prompt("Enter telephone number:");
console.log(isTelephoneByRegexp(checkTelephone));
