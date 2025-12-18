import React from 'react';

import DomHeader from './headers/domHeader';
import SubHeader from './headers/subHeader';

interface ContentProps {
  children: React.ReactNode;
  domHeader: string;
  subHeader?: string | undefined;
}

export default function Content({ children, domHeader, subHeader }: ContentProps) {
  return (
    <div className="w-3/5 h-full bg-slate-800 mx-auto py-8 px-12 shadow-md shadow-slate-800">
      <DomHeader text={domHeader} />
      <SubHeader text={subHeader} />
      {children}
    </div>
  );
}
