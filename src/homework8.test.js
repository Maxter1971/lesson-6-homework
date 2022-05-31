import { getDayOfWeek, getFullMins, getYoungerUser } from "./homework8";

describe("getDayOfWeek", () => {
  it("getDayOfWeek value", () => {
    expect(getDayOfWeek("19.05.2022")).toBe(4);
  });
});
describe("getFullMins", () => {
  it("getFullMins value", () => {
    const now = new Date("2022-05-31T03:24:00");
    expect(getFullMins(now)).toBe(204);
  });
});
describe("getYoungerUser", () => {
  it("getYoungerUser value", () => {
    const firstBirhDay = "12.03.1960";
    const secondBirhDay = "22.05.1971";
    expect(getYoungerUser(firstBirhDay, secondBirhDay)).toBe("22.05.1971");
  });
});
