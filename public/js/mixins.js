export function randomFromArray(inputArray) {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
}

export function getRandomColor() {
  return randomFromArray([
    "var(--color-orange)",
    "var(--color-purple)",
    "var(--color-cyan)",
  ]);
}

export function setRootStyleVariable(variable, contents) {
  const rootDocument = document.querySelector(':root')
  rootDocument.style.setProperty(variable, contents);
}