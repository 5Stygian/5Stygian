import Link from "next/link";
import { capitalize } from "@/app/scripts/utils";

interface TableOfContentsProps {
  ids: Array<string>;
}

export default function TableOfContents({ ids }: TableOfContentsProps) {
  let keyNum: number = 0;

  ids.unshift("top");

  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 p-2.5 bg-zinc-900 border-2 border-zinc-700">
      <strong>Table of Contents</strong>
      <hr className="my-2" />
      {ids.map((id) => {
        const idNameArray: Array<string> = id.split("-");
        let displayName: string = "";

        for (let i = 0; i < idNameArray.length; i++) {
          idNameArray[i] = capitalize(idNameArray[i]);
        }

        displayName = idNameArray.join(" ");

        return (
          <div key={keyNum++}>
            <Link href={`#${id}`}>{displayName}</Link>
          </div>
        );
      })}
    </div>
  );
}
