/** not to be confused with Document Object Model Header */

interface DomHeaderProps {
  text: string;
}

export default function DomHeader({ text }: DomHeaderProps) {
  return (
    <h1>{text}</h1>
  );
}
