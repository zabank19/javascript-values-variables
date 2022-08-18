import fs from "fs/promises";

describe("Exercise 3", () => {
  it("fahrenheit should display correct answer", async () => {
    const data = await fs.readFile("./ex-3.js");

    const code = `${data} 
    return fahrenheit;`;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual(86);
  });
});
