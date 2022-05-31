// функция возвращает сумму всех элементов массива
export function getArraySum(arr) {
  let arrSum = 0;
  arr.forEach((el) => {
    arrSum += el;
  });
  return arrSum;
}
// функция возвращает измененный массив, где все значения мсходного массива умножены на 2
export function alterArray(arr) {
  const newArr = [];
  arr.forEach((el) => {
    newArr.push(el * 2);
  });
  return newArr;
}
// функция возвращает минимальное значение массива
export function minOfArray(arr) {
  return Math.min(...arr);
}
// функция возвращает максимальное значение массива
export function maxOfArray(arr) {
  return Math.max(...arr);
}
