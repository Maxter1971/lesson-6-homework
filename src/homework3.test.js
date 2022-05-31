import { sumOfNumbers, multiplicationOnSeven, getAverage } from "./homework3";

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
