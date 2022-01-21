const text = "Hello World";
const fruits = ["Apple", "Banana", "Orange"];

test("Should contain string = World", () => {
  expect(text).toMatch("World");
  //   expect(text).toBe("string");
});

test("Should contain Apple", () => {
  expect(fruits).toContain("Apple");
});

test("A Bigger than B", () => {
  expect(10).toBeGreaterThan(5);
});

test("true to be true", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Test callback", () => {
  reverseString("Hello World", (str) => {
    expect(str).toBe("dlroW olleH");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      reject(Error("Not a string"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Test reverse string 2 PROMISE", () => {
  return reverseString2("Hello World").then((data) => {
    expect(data).toBe("dlroW olleH");
  });
});

test("Test Async/Await", async () => {
  let data = await reverseString2("Hello World");
  expect(data).toBe("dlroW olleH");
});

// afterEach(() => {
//   console.log("After Each test");
// });

// afterAll(() => {
//   console.log("After All test");
// });

// beforeEach(() => {
//   console.log("Before Each test");
// });

// beforeAll(() => {
//   console.log("Before All test");
// });
