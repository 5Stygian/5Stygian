"use client";

import Link from "next/link";
import { capitalize } from "@/app/scripts/utils";
import { useState, useEffect } from "react";

export default function TableOfContents() {
  const [ids, setIds] = useState<Array<string>>([]);

  useEffect(() => {
    const headerIds: Array<string> = [];
    
    for (let i = 1; i <= 6; i++) {
      const headers = document.getElementsByTagName(`h${i}`);

      for (const header of headers) {
        if (header.id !== "") headerIds.push(header.id);
      }
    }
    
    setIds(headerIds);
  }, []);
  
  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 p-2.5 bg-zinc-900 border-2 border-zinc-700">
      <strong>Table of Contents</strong>
      <hr className="my-2" />
      {ids.map((id, index) => {
        const idNameArray: Array<string> = id.split("-");
        let displayName: string = idNameArray
          .map(capitalize)
          .join(" ");

        return (
          <div key={index}>
            <Link href={`#${id}`}>{displayName}</Link>
          </div>
        );
      })}
    </div>
  );
}
