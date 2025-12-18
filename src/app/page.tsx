import * as c from './components/index';

export default function Home() {
  return (
    <main className="w-screen h-full bg-zinc-950">
      <c.Content domHeader="Index" subHeader="o algo">
        children
      </c.Content>
    </main>
  );
}
