import React from "react";

const validTypes: string[] = ["info", "warning"];

interface NoticeProps {
  children: React.ReactNode;
  type: string;
}

export default function Notice({ children, type }: NoticeProps) {
  if (!validTypes.includes(type)) {
    const invalidType = `Valid types for \"type\" parameter are: ${validTypes}`;

    console.log(invalidType);

    return <div className="p-4 border-4 border-red-400">{invalidType}</div>;
  }

  let iconChar, typeText;
  let noticeStyle = "w-5/6 my-8 mx-auto bg-gray-800 border-2 rounded-md";
  let iconStyle = "w-7 mr-2 text-center float-left rounded-full border-2 font-mono font-bold";

  switch (type) {
    case validTypes[0]: // info
      noticeStyle = `${noticeStyle} border-sky-600`;
      iconStyle = `${iconStyle} border-sky-600 text-sky-400`;
      iconChar = "i";
      typeText = "Info";
      break;
    case validTypes[1]: // warning
      noticeStyle = `${noticeStyle} border-amber-500`;
      iconStyle = `${iconStyle} border-amber-500 text-amber-500`;
      iconChar = "!";
      typeText = "Warning";
      break;
    default:
      noticeStyle = `${noticeStyle} border-slate-500`;
      iconStyle = `${iconStyle} border-zinc-400 text-zinc-400`;
      iconChar = "0";
      typeText = "N/A";
      break;
  }

  return (
    <div className={noticeStyle}>
      <div className="block mt-4 ml-8 float-left">
        <span className={iconStyle}>{iconChar}</span>
        <span className="font-bold">{typeText}</span>
      </div>
      <div className="mx-10 my-4">{children}</div>
    </div>
  );
}
