"use client";

/**
 * Capitalizes the word that is passed. Will throw an error if the first character isn't a letter.
 *
 * This function only works with ASCII characters.
 */
export function capitalize(text: string): string {
  let result: string = "";
  const firstLetterASCII: number = text.charCodeAt(0);

  if (
    (firstLetterASCII < 97 || firstLetterASCII > 122) &&
    !isNaN(firstLetterASCII)
  ) {
    result = "THATS NOT A LOWER CASE LETTER DUMBASS";
    new Error("THATS NOT A LOWER CASE LETTER DUMBASS");
  } else {
    result = `${String.fromCharCode(firstLetterASCII - 32)}${text.slice(1)}`;
  }

  return result;
}

/**
 * This function assumes that the element exists for simplicity.
 * @param T The type of the element that you are getting.
 * @param id The id of the element that you want to get.
 * @returns The element with the matching id, casted to T, or null if the element does not exist.
 */
export function getElementById<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}
