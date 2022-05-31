import { inputChecker, buttonClick } from "./homework7";

describe("inputChecker", () => {
  it("inputChecker false", () => {
    document.body.innerHTML =
      "<div>" +
      '  <input class="text-field" type="text" value="" />' +
      '  <button class="button" hidden="true">send</button>' +
      '  <div class="paragraph"></div>' +
      "</div>";
    const input = document.querySelector(".text-field");
    const button = document.querySelector(".button");
    input.value = "1";
    inputChecker();
    expect(button.hidden).toBeFalsy();
  });
});
describe("inputChecker", () => {
  it("inputChecker true", () => {
    document.body.innerHTML =
      "<div>" +
      '  <input class="text-field" type="text" value="" />' +
      '  <button class="button" hidden="true">send</button>' +
      '  <div class="paragraph"></div>' +
      "</div>";
    const input = document.querySelector(".text-field");
    const button = document.querySelector(".button");
    input.value = "";
    inputChecker();
    expect(button.hidden).toBeTruthy();
  });
});
describe("inputChecker", () => {
  it("inputChecker true", () => {
    document.body.innerHTML =
      "<body>" +
      '  <input class="text-field" type="text" value="" />' +
      '  <button class="button" hidden="true">send</button>' +
      '  <div class="paragraph"></div>' +
      "</body>";
    const input = document.querySelector(".text-field");
    const paragraph = document.querySelector(".paragraph");
    input.value = "1";
    buttonClick();
    input.value = "2";
    buttonClick();
    input.value = "3";
    buttonClick();
    input.value = "4";
    buttonClick();
    input.value = "5";
    buttonClick();
    input.value = "6";
    buttonClick();
    expect(paragraph.getElementsByTagName("p").length).toBe(5);
    expect(paragraph.getElementsByTagName("p")[0].innerText).toBe("2");
  });
});
