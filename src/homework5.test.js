import { getArraySum, alterArray, maxOfArray, minOfArray } from "./homework5";

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
    const maxValue = maxOfArray(arr);
    const minValue = minOfArray(arr);
    expect(maxValue).toBe(10);
    expect(minValue).toBe(1);
  });
});
