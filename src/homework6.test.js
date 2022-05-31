import { diff, isWord, pow } from "./homework6";

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
