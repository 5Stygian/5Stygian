/**
 * Capitalizes the word that is passed. Will throw an error if the first character isn't a letter.
 *
 * This function only works with letters in the ASCII table.
 */
export function capitalize(text: string): string {
  let result: string = "";
  const firstLetterASCII: number = text.charCodeAt(0);

  if (
    firstLetterASCII < 97 ||
    (firstLetterASCII > 122 && !isNaN(firstLetterASCII))
  ) {
    result = "THATS NOT A LOWER CASE LETTER DUMBASS";
    new Error("THATS NOT A LOWER CASE LETTER DUMBASS");
  } else {
    result = `${String.fromCharCode(firstLetterASCII - 32)}${text.slice(1)}`;
  }

  return result;
}
