import { alterObject, copyObject } from "./homework4";

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
    const admin = copyObject(user);
    expect(admin.role).toBe("admin");
  });
});
describe("objectPropertiesToLocals", () => {
  it("objectPropertiesToLocals locals", () => {
    let user = {
      name: "John",
    };
    user = alterObject(user, 21);
    const admin = copyObject(user);
    const { name, age, role } = admin;
    expect(name).toBe("John");
    expect(age).toBe(21);
    expect(role).toBe("admin");
  });
});
