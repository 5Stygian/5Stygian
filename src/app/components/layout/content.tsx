import React from 'react';

import DomHeader from './domHeader';
import SubHeader from './subHeader';

interface ContentProps {
  children: React.ReactNode;
  domHeader: string;
  subHeader?: string | undefined;
}

export default function Content({ children, domHeader, subHeader }: ContentProps) {
  return (
    <div className="w-3/5 h-full bg-slate-800 mx-auto shadow-md shadow-slate-800">
      <DomHeader text={domHeader} />
      <SubHeader text={subHeader} />
      {children}
    </div>
  );
}
