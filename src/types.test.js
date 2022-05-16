import { sum, multiplication, sumSymbolsLen } from "./types";

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
