/**
 * Currently these dont display correctly
 */

import Link from "next/link";

export default function Webrings() {
  return (
    <div>
      <div className="h-7.75 w-22">
        <Link
          className="bg-transparent text-[#ocf02b]"
          href="https://dir.emptiness.io"
          target="_blank"
        >
          <div className="relative bg-[#0cf02b] text-black font-[Verdana] text-[10px] h-7.75 w-22 overflow-hidden">
            <div className="bg-black text-[9px] bold absolute text-[#0cf02b] transform-[scalex(-1)] w-auto h-auto t-0 l-0 text-right z-3">
              RID$
              <br />
              SSENITPME&gt;
            </div>
            <div className="bg-black text-[#ocf02b] opacity-[0.3] text-[9px] bold absolute transform-[scalex(-1)] w-auto h-auto t-[6px] l-[6px] text-right z-2">
              RID$
              <br />
              SSENITPME&gt;
            </div>
            <span className="bg-black text-[12px] bold text-[#ocf02b] absolute b-0 r-0 w-auto h-auto">
              ×
            </span>
            <span className="bg-black w-0.75 h-7.75 absolute t-0 l-[2px]" />
            <span className="bg-black w-0.75 h-7.75 absolute t-0 l-[7px]" />
            <span className="bg-black w-0.75 h-7.75 absolute t-0 l-{12px}" />
          </div>
        </Link>
      </div>
    </div>
  );
}
