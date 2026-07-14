/**
 * Source - https://stackoverflow.com/a/70754537
 * 
 * Posted by Adam Eisfeld, modified by community. See post 'Timeline' for change history
 * 
 * Retrieved 2026-07-13, License - CC BY-SA 4.0
 */

export default function Breakpoints() {
  return (
    <>
      <div id="breakpoint-sm" className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden w-0 h-0" />
      <div id="breakpoint-md" className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden w-0 h-0" />
      <div id="breakpoint-lg" className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden w-0 h-0" />
      <div id="breakpoint-xl" className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden w-0 h-0" />
      <div id="breakpoint-2xl" className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block w-0 h-0" />
    </>
  );
}