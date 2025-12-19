"use client";

import React, { useState } from 'react';

interface PostProps {
  children: React.ReactNode;
  title: string;
  tags: string[];
}

export default function Post({ children, title, tags }: PostProps) {
  const [postTitle, setPostTitle] = useState<string>(title);
  const [postTags, setPostTags] = useState<string[]>(tags);

  let displayPostTags: string = "";

  if (Array.isArray(postTags)) {
    displayPostTags = postTags.join(", ");
  }
  
  return (
    <div className="w-3/4 h-fit my-8 mx-auto py-6 px-4 bg-gray-800 border-2 border-gray-700">
      <span className="block text-3xl font-bold ">{postTitle}</span>
      <hr className="w-full h-1 mt-1 bg-gray-700 border-none" />
      <div className="my-2">
        <span className="text-xl font-bold">Tags</span>
        <div className="mt-2">{displayPostTags}</div>
      </div>
      <hr className="w-full h-1 mb-1 bg-gray-700 border-none" />
      <span className="block text-3xl font-bold">Summary</span>
      {children}
    </div>
  );
}
