import React from 'react';

interface PostProps {
  children: React.ReactNode;
}

export default function Post({ children }: PostProps) {
  return (
    <div>
      {children}
    </div>
  );
}
