import { isRectangular, getCircleParametres, getQuadratic } from "./homework9";

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
