import sum from "./sum";

describe("sum function", () => {
  test("should add two values", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("should throw an error if called without an arg", () => {
    expect(sum).toThrow("Sum must take two numbers");
  });
  test("should throw an error if one of the variables isn't a number", () => {
    expect(() => {
      sum(1, "error");
    }).toThrow("Sum must take two numbers");
  });
});
