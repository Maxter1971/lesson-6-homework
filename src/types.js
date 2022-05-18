export function sum(a, b) {
  return a + b;
}
export function multiplication(a, b) {
  return a * b;
}
export function sumSymbolsLen(first, second) {
  return first.length + second.length;
}
export function tripleDigitsSum(strValue) {
  let sumStr = 0;
  for (let index = 0; index < strValue.length; index++) {
    const element = strValue[index];
    if (Number.isNaN(element) === false) {
      sumStr += Number(element);
    }
  }
  return sumStr;
}
export function sumOfNumbers(start, finish) {
  let fSum = 0;
  let num = +start;
  while (num <= Number(finish)) {
    fSum += num;
    num++;
  }
  return fSum;
}
export function multiplicationOnSeven() {
  const result = [];
  for (let i = 1; i <= 9; i++) {
    console.log(7 * i);
    result.push(7 * i);
  }
  return result;
}
export function getAverage(input) {
  let aSum = 0;
  let count = 0;
  for (let i = 1; i < Number(input); i++) {
    if (i % 2 !== 0) {
      aSum += i;
      count++;
    }
  }
  return aSum / count;
}
export function getGreatestNumber(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
export function getMonthByNumber(num) {
  switch (+num) {
    case 1:
      return "январь";
      break;
    case 2:
      return "февраль";
      break;
    case 3:
      return "март";
      break;
    case 4:
      return "апрель";
      break;
    case 5:
      return "май";
      break;
    case 6:
      return "июнь";
      break;
    case 7:
      return "июль";
      break;
    case 8:
      return "август";
      break;
    case 9:
      return "сентябрь";
      break;
    case 10:
      return "октябрь";
      break;
    case 11:
      return "ноябрь";
      break;
    case 12:
      return "дексбрь";
      break;
    default:
      return "";
      break;
  }
}
export function checkCircleInsideSquare(circle, square) {
  if (circle / 3.14 <= square / 2) {
    return true;
  }
  return false;
}
