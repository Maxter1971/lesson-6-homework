// функция возвращает номер недели по дате формата DD.MM.YYYY
export function getDayOfWeek(input) {
  const [day, month, year] = input.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  return date.getDay();
}
// функция возвращает количество прощедших минут с начала дня
export function getFullMins(now) {
  // const now = new Date();
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
