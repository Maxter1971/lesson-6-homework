// функция возвращает сумму всех чисел внутри цикла с заданными параметрами старта и финиша
export function sumOfNumbers(start, finish) {
  let fSum = 0;
  let num = +start;
  while (num <= Number(finish)) {
    fSum += num;
    num++;
  }
  return fSum;
}
// функция возвращает в массив таблицу умножения на 7 от 1 до 9
export function multiplicationOnSeven() {
  const result = [];
  for (let i = 1; i <= 9; i++) {
    console.log(7 * i);
    result.push(7 * i);
  }
  return result;
}
// функция возвращает среднее арифметическое всех нечетных чисел в строке
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
