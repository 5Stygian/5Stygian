import React from "react";

interface OrderedListProps {
  items: Array<string>;
  ordered?: boolean;
}

export default function List({ items, ordered = true }: OrderedListProps) {
  let element: React.ReactNode;

  if (ordered) {
    element =
    <ol className="my-4">
      {items.map((item, index): React.ReactNode => {
        index++;

        return (
          <li key={index} className="my-2 pl-8">
            <strong className="mr-2">{index})</strong> {item}
          </li>
        );
      })}
    </ol>;
  } else {
    element = 
    <ul className="my-4">
      {items.map((item, index): React.ReactNode => {
        index++;

        return (
          <li key={index} className="my-2 pl-8">
            <strong className="mr-2">⬤</strong> {item}
          </li>
        );
      })}
    </ul>
  }

  return element;
}