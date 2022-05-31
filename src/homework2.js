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
