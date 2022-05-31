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
