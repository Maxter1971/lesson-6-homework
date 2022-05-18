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
