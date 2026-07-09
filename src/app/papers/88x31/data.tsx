class LinkBox {
  public Code: string;
  public Component: React.ReactNode;
  public Function: () => React.ReactNode;

  constructor(Code: string, Component: React.ReactNode) {
    this.Code = Code
      .replace(new RegExp(/\n/gm), "")
      // Selects the space in this string: "> <" and removes it.
      // Source: https://stackoverflow.com/questions/1454913/regular-expression-to-find-a-string-included-between-two-characters-while-exclud
      .replace(new RegExp(/(?<=>)(\s*?)(?=<)/gm), "");
    
    this.Component = Component;
    this.Function = (): React.ReactNode => { return this.Component; }
  }
}

export const StygianLink1: LinkBox = new LinkBox(
`<div id="5StygianLink1" className="h-7.75 w-22 overflow-hidden">
  <a href="https://5stygian.netlify.app/" target="_blank" className="grid grid-cols-3 h-7.75 w-22 hover:saturate-100! hover:brightness-100! hover:no-underline!">
    <div className="grid grid-cols-4 h-10 w-22 translate-x-1 -translate-y-4 rotate-15 scale-125 saturate-150">
      <span className="h-15 w-110/100 bg-linear-to-t from-[#3593ff] to-[#97c7ff]" />
      <span className="h-15 w-110/100 bg-linear-to-b from-[#8b2dd3] to-[#b566f1]" />
      <span className="h-15 w-110/100 bg-linear-to-t from-[#921249] to-[#eb4c90]" />
      <span className="h-15 w-110/100 bg-[#181818]" />
    </div>
    <div className="grid grid-cols-3">
      <div className="z-4 text-white font-extrabold text-[14px] -translate-x-6.75 -translate-y-0.5">5Stygian</div>
      <div className="z-3 text-white font-extrabold text-[14px] -translate-x-7.75 translate-y-1 opacity-75">5Stygian</div>
      <div className="z-2 text-white font-extrabold text-[14px] -translate-x-8.75 translate-y-2.5 opacity-50">5Stygian</div>
    </div>
  </a>
</div>`,
<div id="5StygianLink1" className="h-7.75 w-22 overflow-hidden hover:cursor-pointer hover:scale-300">
  <div
    className="grid grid-cols-3 h-7.75 w-22\
                hover:saturate-100! hover:brightness-100! hover:no-underline!"
  >
    <div className="grid grid-cols-4 h-10 w-22 translate-x-1 -translate-y-4 rotate-15 scale-125 saturate-150">
      <span className="h-15 w-110/100 bg-linear-to-t from-[#3593ff] to-[#97c7ff]" />
      <span className="h-15 w-110/100 bg-linear-to-b from-[#8b2dd3] to-[#b566f1]" />
      <span className="h-15 w-110/100 bg-linear-to-t from-[#921249] to-[#eb4c90]" />
      <span className="h-15 w-110/100 bg-[#181818]" />
    </div>
    <div className="grid grid-cols-3">
      <div className="z-4 text-white font-extrabold text-[14px] -translate-x-6.75 -translate-y-0.5">
        5Stygian
      </div>
      <div className="z-3 text-white font-extrabold text-[14px] -translate-x-7.75 translate-y-1 opacity-75">
        5Stygian
      </div>
      <div className="z-2 text-white font-extrabold text-[14px] -translate-x-8.75 translate-y-2.5 opacity-50">
        5Stygian
      </div>
    </div>
  </div>
</div>
);
