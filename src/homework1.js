// функция возвращает сумму двух чисел
export function sum(a, b) {
  return a + b;
}
// функция возвращает произведение двух чисел
export function multiplication(a, b) {
  return a * b;
}
// функция возвращает общую длину первого и второго параметра
export function sumSymbolsLen(first, second) {
  return first.length + second.length;
}
// функция возвращает сумму всех чисел в строке
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
