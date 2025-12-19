import React, { useState } from 'react';

interface PostProps {
  children: React.ReactNode;
  title: string;
  tags: string[];
}

export default function Post({ children, title, tags }: PostProps) {
  const [postTitle, setPostTitle] = useState<string>(title);
  const [postTags, setPostTags] = useState<string[]>(tags);
  
  return (
    <div className="w-3/4 h-fit my-8 mx-auto py-6 px-4 bg-gray-800 border-2 border-gray-700">
      <span className="block text-3xl font-bold ">{title}</span>
      <div className="my-4">
        <span className="text-xl font-bold">Tags</span>
        <hr className="w-7/8 my-2" />
        <div>{tags}</div>
      </div>
      <span className="block text-3xl font-bold">Summary</span>
      {children}
    </div>
  );
}
