/** It stands for "submissive header".
  * It's a reference to what is was called in the original named repo.
  */
  

interface SubHeaderProps {
  text: string | undefined;
}

export default function SubHeader({ text }: SubHeaderProps) {
  return <h1 className="text-3xl font-bold">{text}</h1>;
}
