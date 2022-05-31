// функция возвращает разницу от большего и меньшего параметров
export function diff(a, b) {
  if (Number(a) > Number(b)) {
    return Number(a) - Number(b);
  }
  return Number(b) - Number(a);
}
// функция проверяет количество слов в строке. Если одно, то true
export function isWord(str) {
  if (str.split(" ").length === 1) {
    return true;
  }
  return false;
}
// функция возвращает число в степени, переденных в виде параметров
export function pow(a, x) {
  return a ** x;
}
