interface SubHeaderProps {
  text: string | undefined;
}

export default function SubHeader({ text }: SubHeaderProps) {
  return (
    <h1 className="text-3xl font-bold">{text}</h1>
  );
}
