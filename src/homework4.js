// функция возвращает исходный объект с добавленным свойством
export function alterObject(user, age) {
  user.age = age;
  return user;
}
export function copyObject(user) {
  const admin = { ...user, role: "admin" };
  return admin;
}
