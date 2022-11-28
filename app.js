const englishInputValue = document.querySelector("#englishInput").value;
const morseCodeOutputDisplay = document.querySelector("#morseOutput");
const translateButton = document.querySelector("#translateButton");

const englishToMorseAlphabet = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const englishToMorseCode = () => {
  const wordToTranslateArr = englishInputValue.split("");
  console.log(wordToTranslateArr);

  //   for (let index = 0; index < wordToTranslateArr.length; index++) {
  //     if (wordToTranslateArr[index] === englishToMorseAlphabet[index]) {
  //       // === Object.values(wordToTranslateArr)
  //       // return Object.
  //       //         }
  //     }
  //   }
};
const handleTranslateButton = (event) => {
  //   const translatedWord = englishToMorseCode(wordToTranslate);
  //   morseCodeOutputDisplay.innerHTML = translatedWord;
  englishToMorseCode();
};

translateButton.addEventListener("click", handleTranslateButton);
