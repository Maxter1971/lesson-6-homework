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
// функция возвращает всех нечетных чисел в строке
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
// функция возвращает большее из двух чисел
export function getGreatestNumber(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}
// функция возвращает название месяца по номеру
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
// функция провереяет по площади вписывается ли окружность в квадрат
export function checkCircleInsideSquare(circle, square) {
  if (circle / 3.14 <= square / 2) {
    return true;
  }
  return false;
}
// функция возвращает исходный объект с добавленным свойством
export function alterObject(user, age) {
  user.age = age;
  return user;
}
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
// функция проверяет, что если текстове поле на страницы пустое, то скрывается кнопка
export function inputChecker() {
  const input = document.querySelector(".text-field");
  const button = document.querySelector(".button");
  if (input.value.length > 0) {
    button.hidden = false;
  } else {
    button.hidden = true;
  }
}
// функция добавляет новый параграф на странице. Если количество параграфов больше 5, то первый в списке удаляется
function addElementToList(text) {
  const listItem = document.createElement("p");
  listItem.innerText = text;
  const paragraph = document.querySelector(".paragraph");
  paragraph.append(listItem);
  const pCount = paragraph.getElementsByTagName("p").length;
  if (pCount > 5) {
    paragraph.removeChild(paragraph.getElementsByTagName("p")[0]);
  }
}
// функция запускает добавление нового параграфа
export function buttonClick() {
  const input = document.querySelector(".text-field");
  const inputText = input.value;
  addElementToList(inputText);
}
// функция возвращает номер недели по дате формата DD.MM.YYYY
export function getDayOfWeek(input) {
  const [day, month, year] = input.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  return date.getDay();
}
// функция возвращает количество прощедших минут с начала дня
export function getFullMins() {
  const now = new Date();
  const mins = now.getMinutes();
  const hours = now.getHours();
  const fullMins = hours * 60 + mins;
  return fullMins;
}
// функция возвращает более "молодую" дату из двух
export function getYoungerUser(first, second) {
  let [day, month, year] = first.split(".");
  const fDate = new Date(`${year}-${month}-${day}`);
  [day, month, year] = second.split(".");
  const sDate = new Date(`${year}-${month}-${day}`);
  if (fDate.getTime() > sDate.getTime()) {
    return first;
  }
  return second;
}
// функция возвращает более "молодую" дату из двух
function getTriangleSqt(k1, k2) {
  return 0.5 * (k1 * k2);
}
// функция проверяет является ли треугольник прямоугольным
export function isRectangular(a, b, c) {
  const p = (a + b + c) / 2;
  const square = Math.sqrt(6 * (p - a) * (p - b) * (p - c));

  if (
    getTriangleSqt(a, b) === square ||
    getTriangleSqt(b, c) === square ||
    getTriangleSqt(a, c) === square
  ) {
    return true;
  }
  return false;
}
// функция возвращает параметры длину окружности и площадь круга
export function getCircleParametres(radius) {
  const square = Math.PI * radius ** 2;
  const len = 2 * Math.PI * radius;
  const circle = {
    square,
    len,
  };
  return circle;
}
// функция возвращает корни квадратного уровнения
export function getQuadratic(a, b, c) {
  const quadratic = {};
  const dis = b ** 2 - 4 * (a * c);

  if (Math.sign(dis) === 1) {
    const x1 = (-1 * b + Math.sqrt(dis)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(dis)) / (2 * a);
    quadratic.x1 = x1;
    quadratic.x2 = x2;
    quadratic.hasSolution = true;
  } else if (dis === 0) {
    const x1 = (-1 * b) / (2 * a);
    quadratic.x1 = x1;
    quadratic.hasSolution = true;
  } else {
    quadratic.hasSolution = false;
  }
  return quadratic;
}
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
