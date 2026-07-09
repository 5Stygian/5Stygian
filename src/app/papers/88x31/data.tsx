export class LinkBox {
  private Component: React.ReactNode;

  public Code: string;
  public Function: () => React.ReactNode;
  public RequiredFonts: Array<string> = [];

  public static LinkBoxes: Array<LinkBox> = [];
  public static BoxWrapperClass: string = "h-7.75 w-22 bg-white overflow-hidden select-none hover:cursor-pointer hover:scale-300 hover:z-9000";
  public static LinkClass: string = "h-7.75 w-22 hover:saturate-100! hover:brightness-100! hover:no-underline!";

  public constructor(Code: string, Component: React.ReactNode, RequiredFonts: Array<string>) {
    this.Code = Code
      .replace(new RegExp(/\n/gm), "")
      // Selects the space in this string: "> <", and removes it.
      // Source: https://stackoverflow.com/questions/1454913/regular-expression-to-find-a-string-included-between-two-characters-while-exclud
      .replace(new RegExp(/(?<=>)(\s*?)(?=<)/gm), "");
    
    this.Component = Component;
    this.RequiredFonts = RequiredFonts;

    this.Function = (): React.ReactNode => { return this.Component; }
    LinkBox.LinkBoxes.push(this);
  }

  /**
   * GetRequiredFontsAsString
   */
  public GetRequiredFontsAsString(): string {
    let result: string = "None";

    if (this.RequiredFonts.length !== 0) result = this.RequiredFonts.join(", ");

    return result;
  }
}

export const StygianLink1: LinkBox = new LinkBox(
`<div id="5StygianLink1" className="h-7.75 w-22 bg-white overflow-hidden select-none">
  <a href="https://5stygian.netlify.app/" target="_blank" className="grid grid-cols-3 ${LinkBox.LinkClass}">
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
<div id="5StygianLink1" className={LinkBox.BoxWrapperClass}>
  <div
    className={`grid grid-cols-3 ${LinkBox.LinkClass}`}
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
</div>,
[]
);

export const StygianLink2 = new LinkBox(
`<div id="5StygianLink2" className="h-7.75 w-22 bg-white overflow-hidden select-none">
  <a href="https://5stygian.netlify.app/" target="_blank" className={LinkBox.LinkClass}>
    <div className="grid grid-cols-2 -translate-x-1.5 -translate-y-4 rotate-30 scale-125">
      <span className="h-20 w-135/100 bg-linear-to-l from-[#442406] to-[#8d4909]" />
      <span className="h-20 w-135/100 bg-linear-to-l from-[#491010] to-[#521d1d]" />
    </div>
    <div className="grid grid-cols-2 -translate-y-20.5">
      <span className="z-2 -pl-4 bg-linear-to-l from-[#e07715] to-[#ffc997] text-transparent bg-clip-text text-5xl font-RGP -translate-y-5 -rotate-30">&</span>
      <span className="z-2 -pl-4 bg-linear-to-l from-[#bb2929] to-[#f05858] text-transparent bg-clip-text text-5xl font-R80F rotate-150">&</span>
    </div>
    <div className="grid grid-cols-2 -translate-x-0.5 -translate-y-18.25">
      <div className="z-3 text-white text-[24px] font-extrabold translate-x-1 -translate-y-14">5</div>
      <div className="z-3 text-white font-bold tracking-widest -translate-x-6 -translate-y-11.75">Stygian</div>
    </div>
  </a>
</div>`,
<div id="5StygianLink2" className={LinkBox.BoxWrapperClass}>
  <div className={LinkBox.LinkClass}>
    <div className="grid grid-cols-2 -translate-x-1.5 -translate-y-4 rotate-30 scale-125">
      <span className="h-20 w-135/100 bg-linear-to-l from-[#442406] to-[#8d4909]" />
      <span className="h-20 w-135/100 bg-linear-to-l from-[#491010] to-[#521d1d]" />
    </div>
    <div className="grid grid-cols-2 -translate-y-20.5">
      <span className="z-2 -pl-4 bg-linear-to-l from-[#e07715] to-[#ffc997] text-transparent bg-clip-text text-5xl font-RGP -translate-y-5 -rotate-30">&</span>
      <span className="z-2 -pl-4 bg-linear-to-l from-[#bb2929] to-[#f05858] text-transparent bg-clip-text text-5xl font-R80F rotate-150">&</span>
    </div>
    <div className="grid grid-cols-2 -translate-x-0.5 -translate-y-18.25">
      <div className="z-3 text-white text-[24px] font-extrabold translate-x-1 -translate-y-14">5</div>
      <div className="z-3 text-white font-bold tracking-widest -translate-x-6 -translate-y-11.75">Stygian</div>
    </div>
  </div>
</div>,
["Rubik 80s Fade", "Rubik Glitch Pop"]
);
