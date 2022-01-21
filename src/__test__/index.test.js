"use strict";

const { randomString, reverseString2 } = require("../index");

describe("Cities test", () => {
  /**
   * @description Test if the function returns a random string from the array
   * @test {randomString}
   */
  test("Test randomString function", () => {
    expect(typeof randomString()).toBe("string");
  });

  test("Santiago city should not be on the array", () => {
    expect(randomString()).not.toMatch(/Santiago/);
  });
});

describe("Reverse words", () => {
  test("Test reverse string 2 PROMISE resolved", () => {
    return reverseString2("Hello World").then((data) => {
      expect(data).toBe("dlroW olleH");
    });
  });
  test("Test reverse string 2 PROMISE rejected", () => {
    return reverseString2(123).catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});
