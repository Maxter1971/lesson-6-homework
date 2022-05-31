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
