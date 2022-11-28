import { it } from "node:test";
import { englishToMorseCode } from "./app";

describe("englishToMorseCode", () => {
  it("should translate nothing to nothing", () => {
    const result = englishToMorseCode("");
    expect(result).toBe("");
  });
  it("should translate non-english character to undefined", () => {
    const result = englishToMorseCode("ñ");
    expect(result).toBe(undefined);
  });
  it("should translate a single character", () => {
    const result = englishToMorseCode("a");
    expect(result).toBe(".-");
  });
  it("should translate a capital letter", () => {
    const result = englishToMorseCode("A");
    expect(result).toBe(".-");
  });
  it("should translate a word", () => {
    const result = englishToMorseCode("word");
    expect(result).toBe(".-- --- .-. -..");
  });
  it("should display a space to resemble a space between letters within a word", () => {
    const result = englishToMorseCode("word");
    expect(result).toBe(".-- --- .-. -..");
  });
  it("should display a / to resemble a space between words", () => {
    const result = englishToMorseCode("the gap");
    expect(result).toBe("- .... ./--. .- .--.");
  });
  it("should translate a number", () => {
    const result = englishToMorseCode("9");
    expect(result).toBe("----.");
  });
});
