import { describe, expect, it } from "vitest";

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it("should throw a specific messagge if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow("No fue proporcionado un numero");
  });
  it("should return fizz if n % 3 == 0",()=>{
    expect(fizzbuzz(6)).toBe("fizz")
  })
  it("should return fizz if n % 5 == 0",()=>{
    expect(fizzbuzz(10)).toBe("buzz")
  })
  it("should return fizz if n % 5 == 0 && n % 3 == 0",()=>{
    expect(fizzbuzz(15)).toBe("fizzbuzz")
  })
});

const fizzbuzz = (number) => {
    if(typeof number != 'number') throw new Error("No fue proporcionado un numero");
    if(number % 3 == 0 && number % 5 == 0) return "fizzbuzz"
    if(number % 3 == 0) return "fizz" 
    if(number % 5 == 0) return "buzz" 
};
