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
