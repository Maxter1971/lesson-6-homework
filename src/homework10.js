// функция проверяет, что строка является датой с помощью регулярного вырожения
export function isDateByRegexp(date) {
  const reg = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
  return reg.test(date);
}
// функция проверяет, что строка является электронной почтой с помощью регулярного вырожения
export function isEmailByRegexp(email) {
  const reg = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
  return reg.test(email);
}
// функция проверяет, что строка является номером телефона с помощью регулярного вырожения
export function isTelephoneByRegexp(telephone) {
  const reg =
    /\+\d[\s\(\-]{0,1}\d{3}[\s\)\-]{0,1}\d{3}[\s\-]{0,1}\d{2}[\s\-]{0,1}\d{2}/;
  return reg.test(telephone);
}
