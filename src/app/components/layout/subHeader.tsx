interface SubHeaderProps {
  text: string;
}

export default function SubHeader({ text }: SubHeaderProps) {
  return (
    <h1 className="text-3xl font-bold">{text}</h1>
  );
}
