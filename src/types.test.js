import {
  sum,
  multiplication,
  sumSymbolsLen,
  tripleDigitsSum,
  getGreatestNumber,
  getMonthByNumber,
  checkCircleInsideSquare,
  sumOfNumbers,
  multiplicationOnSeven,
  getAverage,
  alterObject,
  getArraySum,
  alterArray,
  diff,
  isWord,
  pow,
  inputChecker,
  buttonClick,
  getDayOfWeek,
  getYoungerUser,
  isRectangular,
  getCircleParametres,
  getQuadratic,
  isDateByRegexp,
  isEmailByRegexp,
  isTelephoneByRegexp,
} from "./types";

describe("sum", () => {
  it("sum number", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe("multiplication", () => {
  it("multiplication number", () => {
    expect(multiplication(2, 3)).toEqual(6);
  });
});

describe("sumSymbolsLen", () => {
  it("sumSymbolsLen number", () => {
    expect(sumSymbolsLen("John", "Lennon")).toEqual(10);
  });
});
describe("tripleDigitsSum", () => {
  it("tripleDigitsSum number", () => {
    expect(tripleDigitsSum("123")).toEqual(6);
  });
});

describe("getGreatestNumber", () => {
  it("getGreatestNumber number", () => {
    expect(getGreatestNumber(2, 3)).toBe(3);
  });
});

describe("getMonthByNumber", () => {
  it("getMonthByNumber name", () => {
    expect(getMonthByNumber(5)).toBe("май");
  });
});

describe("checkCircleInsideSquare", () => {
  it("checkCircleInsideSquare bool", () => {
    expect(checkCircleInsideSquare(64, 64)).toBeTruthy();
  });
});

describe("sumOfNumbers", () => {
  it("sumOfNumbers number", () => {
    expect(sumOfNumbers(50, 100)).toBe(3825);
  });
});
describe("multiplicationOnSeven", () => {
  it("multiplicationOnSeven value", () => {
    const result = multiplicationOnSeven();
    expect(result[0]).toBe(7);
    expect(result[1]).toBe(14);
    expect(result[2]).toBe(21);
    expect(result[3]).toBe(28);
    expect(result[4]).toBe(35);
    expect(result[5]).toBe(42);
    expect(result[6]).toBe(49);
    expect(result[7]).toBe(56);
    expect(result[8]).toBe(63);
  });
});
describe("getAverage", () => {
  it("getAverage number", () => {
    expect(getAverage(11)).toBe(5);
  });
});
describe("alterObject", () => {
  it("alterObject property", () => {
    let user = {
      name: "John",
    };
    user = alterObject(user, 21);
    expect(user.age).toBe(21);
  });
});
describe("assignObject", () => {
  it("alterObject property", () => {
    let user = {
      name: "John",
    };
    user = alterObject(user, 21);
    const admin = { ...user, role: "admin" };
    expect(admin.role).toBe("admin");
  });
});
describe("objectPropertiesToLocals", () => {
  it("objectPropertiesToLocals locals", () => {
    let user = {
      name: "John",
    };
    user = alterObject(user, 21);
    const admin = { ...user, role: "admin" };
    const { name, age, role } = admin;
    expect(name).toBe("John");
    expect(age).toBe(21);
    expect(role).toBe("admin");
  });
});
describe("getArraySum", () => {
  it("getArraySum number", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(getArraySum(arr)).toBe(55);
  });
});
describe("alterArray", () => {
  it("alterArray", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(alterArray(arr)).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});
describe("maxAndMinArrayValues", () => {
  it("maxAndMinArrayValues", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const maxValue = Math.max(...arr);
    const minValue = Math.min(...arr);
    expect(maxValue).toBe(10);
    expect(minValue).toBe(1);
  });
});
describe("diff", () => {
  it("diff value", () => {
    expect(diff(2, 8)).toBe(6);
  });
});
describe("isWord", () => {
  it("isWord condition", () => {
    expect(isWord("test value")).toBeFalsy();
  });
});
describe("pow", () => {
  it("pow value", () => {
    expect(pow(2, 3)).toBe(8);
  });
});
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
describe("getDayOfWeek", () => {
  it("getDayOfWeek value", () => {
    expect(getDayOfWeek("19.05.2022")).toBe(4);
  });
});
describe("getYoungerUser", () => {
  it("getYoungerUser value", () => {
    const firstBirhDay = "12.03.1960";
    const secondBirhDay = "22.05.1971";
    expect(getYoungerUser(firstBirhDay, secondBirhDay)).toBe("22.05.1971");
  });
});
describe("isRectangular", () => {
  it("isRectangular condition", () => {
    expect(isRectangular(3, 4, 5)).toBeTruthy();
  });
  it("isRectangular condition", () => {
    expect(isRectangular(3, 4, 6)).toBeFalsy();
  });
});
describe("getCircleParametres", () => {
  it("getCircleParametres values", () => {
    const circle = getCircleParametres(12);
    expect(circle.len).toBe(75.39822368615503);
    expect(circle.square).toBe(452.3893421169302);
  });
});
describe("getQuadratic", () => {
  it("getQuadratic first test", () => {
    const quadratic = getQuadratic(1, 2, -3);
    expect(quadratic).toHaveProperty("x1");
    expect(quadratic).toHaveProperty("x2");
    expect(quadratic.hasSolution).toBeTruthy();
    expect(quadratic.x1).toBe(1);
    expect(quadratic.x2).toBe(-3);
  });
  it("getQuadratic second test", () => {
    const quadratic = getQuadratic(1, 2, 3);
    expect(quadratic.hasSolution).toBeFalsy();
    expect(quadratic).not.toHaveProperty("x1");
    expect(quadratic).not.toHaveProperty("x2");
  });
});
describe("isDateByRegexp", () => {
  it("isDateByRegexp true condition", () => {
    expect(isDateByRegexp("19.05.2022")).toBeTruthy();
  });
  it("isDateByRegexp false condition", () => {
    expect(isDateByRegexp("19052022")).toBeFalsy();
  });
});
describe("isEmailByRegexp", () => {
  it("isEmailByRegexp true condition", () => {
    expect(isEmailByRegexp("test@test.com")).toBeTruthy();
  });
  it("isEmailByRegexp false condition", () => {
    expect(isEmailByRegexp("test@test")).toBeFalsy();
  });
});
describe("isTelephoneByRegexp", () => {
  it("isTelephoneByRegexp true condition", () => {
    expect(isTelephoneByRegexp("+7(812)640-11-11")).toBeTruthy();
  });
  it("isTelephoneByRegexp false condition", () => {
    expect(isTelephoneByRegexp("812")).toBeFalsy();
  });
});
