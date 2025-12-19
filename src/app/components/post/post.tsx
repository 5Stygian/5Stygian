import React from 'react';

interface PostProps {
  children: React.ReactNode;
  tags: string[];
}

export default function Post({ children, tags }: PostProps) {
  return (
    <div className="w-3/4 h-fit my-8 mx-auto py-6 px-4 bg-gray-800 border-2 border-gray-700">
      <div>
        <span className="text-xl font-bold">Tags</span>
        <hr className="w-7/8 my-2" />
        {tags}
      </div>
      {children}
    </div>
  );
}
