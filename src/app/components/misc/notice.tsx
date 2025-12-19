import React from "react";

const validTypes: string[] = ["info", "warning"];

interface NoticeProps {
  children: React.ReactNode;
  type?: string | undefined;
}

export default function Notice({ children, type = "info" }: NoticeProps) {
  if (!validTypes.includes(type)) {
    const invalidType = `Valid types for \"type\" parameter are: ${validTypes}`;

    console.log(invalidType);

    return <div className="p-4 border-4 border-red-400">{invalidType}</div>;
  }

  let iconChar;
  let noticeStyle = "w-5/6 my-8 mx-4 bg-sky-900 border-2 rounded-md";
  let iconStyle = "inline ml-4 float-left rounded-full border-2 font-mono";

  switch (type) {
    case validTypes[0]: // info
      noticeStyle = `${noticeStyle} border-sky-500`;
      iconStyle = `${iconStyle} border-sky-400 text-sky-400`;
      iconChar = "i";
    case validTypes[1]: // warning
      noticeStyle = `${noticeStyle} border-orange-500`;
      iconStyle = `${iconStyle} border-amber-500 text-amber-500`;
      iconChar = "!";
    default:
      noticeStyle = `${noticeStyle} bg-slate-700 border-slate-500`;
      iconStyle = `${iconStyle} border-zinc-400 text-zinc-400`;
      iconChar = "0";
  }

  return (
    <div className={noticeStyle}>
      <div className="block my-4 ml-8 float-left">
        <div className={iconStyle}>{iconChar}</div>
        <span>Info</span>
      </div>
      <div className="block m-4">{children}</div>
    </div>
  );
}
