import * as c from "./components/index";

export default function Home() {
  return (
    <main className="w-screen h-full bg-zinc-950">
      <c.Content domHeader="Index" subHeader="o algo">
        <c.Notice type="info">
          hi
        </c.Notice>
        <c.Notice type="warning">
          hi
        </c.Notice>
      </c.Content>
    </main>
  );
}
