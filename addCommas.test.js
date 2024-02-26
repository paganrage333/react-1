const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

test('Adds commas to a number: "1234" becomes "1,234"', () => {
  expect(addCommas(1234)).toBe('1,234');
});

test('Adds commas to a number: "1000000" becomes "1,000,000"', () => {
  expect(addCommas(1000000)).toBe('1,000,000');
});

test('Adds commas to a negative number: "-5678" becomes "-5,678"', () => {
  expect(addCommas(-5678)).toBe('-5,678');
});

test('Adds commas to a large number: "1234567890" becomes "1,234,567,890"', () => {
  expect(addCommas(1234567890)).toBe('1,234,567,890');
});
