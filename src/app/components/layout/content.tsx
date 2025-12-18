import React from 'react';

interface ContentProps {
  children: React.ReactNode;
  headerDom: string;
  headerSub?: string;
}

export default function Content({ children, headerDom, headerSub? }: ContentProps) {
  return (
    <div className="w-2/3 h-full bg-slate-800 shadow-md shadow-slate-800">
      {chldren}
    </div>
  );
}
