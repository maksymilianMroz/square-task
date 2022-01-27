const calculateByContext = require("./calculate");

describe("calculateByContext tests", () => {
  test("If context is SUM, and in array are numbers", () => {
    expect(calculateByContext("sum", [1, 2])).toBe(3);
  });

  test("If context is SUBSTRACT, and in array are numbers", () => {
    expect(calculateByContext("substract", [1, 2])).toBe(-1);
  });

  test("If context is MULTIPLY, and in array are numbers", () => {
    expect(calculateByContext("multiply", [1, 32])).toBe(32);
  });

  test("If in numbers array will be string, return WRONG INPUT DATA text", () => {
    expect(calculateByContext("sum", [1, "test"])).toBe("Wrong input data");
  });
});
