"use strict";
const cities = ["Mexico City", "Lima", "Buenos Aires", "Hermosillo"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== "string") {
      reject(Error("Not a string"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = {
  randomString,
  reverseString2,
};
