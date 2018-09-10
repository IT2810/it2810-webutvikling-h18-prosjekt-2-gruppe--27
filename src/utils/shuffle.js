/**
 * Shuffles array in place. ES6 version
 *
 * From https://stackoverflow.com/a/6274381
 *
 * @param {Array} inputArray items An array containing the items.
 */
export default function shuffle(inputArray) {
  for (let i = inputArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
  }
  return inputArray;
};
