import {
  isDateByRegexp,
  isEmailByRegexp,
  isTelephoneByRegexp,
} from "./homework10";

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
