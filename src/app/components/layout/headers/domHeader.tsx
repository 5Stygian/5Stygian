/** not to be confused with Document Object Model Header.
 * It stands for "dominant header". It's a reference to what it was called
 * in the original named repo.
 */

interface DomHeaderProps {
  text: string;
}

export default function DomHeader({ text }: DomHeaderProps) {
  return (
    <h1 id="top" className="font-bold! -mb-3">
      {text}
    </h1>
  );
}
