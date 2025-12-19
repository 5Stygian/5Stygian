/** not to be confused with Document Object Model Header.
  * It stands for "dominant header". It's a reference to what it was called
  * in the original named repo.
  */

interface DomHeaderProps {
  text: string;
}

export default function DomHeader({ text }: DomHeaderProps) {
  return <h1 className="text-6xl font-bold">{text}</h1>;
}
