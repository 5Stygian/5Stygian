"use client";

import Link from "next/link";

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
export function getElementById<T extends HTMLElement | typeof Link>(id: string): T {
  return document.getElementById(id) as T;
}

export type breakpoints = "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Source - https://stackoverflow.com/a/70754537
 * 
 * Posted by Adam Eisfeld, modified by community. See post 'Timeline' for change history
 * 
 * Retrieved 2026-07-13, License - CC BY-SA 4.0
 * 
 * @param breakpoint The breakpoint that you want to test for. Can be one of the following:
 * ["sm" | "md" | "lg" | "xl" | "2xl"]
 */
export function testCurrentBreakpoint(breakpoint: breakpoints): boolean {
    const breakpointUnknown: string = 'unknown';
    const breakpointSM: string | null = document.getElementById('breakpoint-sm')?.offsetParent === null ? null : 'sm';
    const breakpointMD: string | null = document.getElementById('breakpoint-md')?.offsetParent === null ? null : 'md';
    const breakpointLG: string | null = document.getElementById('breakpoint-lg')?.offsetParent === null ? null : 'lg';
    const breakpointXL: string | null = document.getElementById('breakpoint-xl')?.offsetParent === null ? null : 'xl';
    const breakpoint2XL: string | null = document.getElementById('breakpoint-2xl')?.offsetParent === null ? null : '2xl';
    const determinedBreakpoint: string = breakpointSM ?? breakpointMD ?? breakpointLG ?? breakpointXL ?? breakpoint2XL ?? breakpointUnknown;

    if (determinedBreakpoint === breakpoint) {
      return true;
    } else {
      return false;
    }
}
