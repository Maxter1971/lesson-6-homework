import {
  getGreatestNumber,
  getMonthByNumber,
  checkCircleInsideSquare,
} from "./homework2";

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
