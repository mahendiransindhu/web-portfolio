function NumberedList() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Gambetta:Regular',sans-serif] gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[4573px]" data-name="Numbered List">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-[770px]">
        <ol className="list-decimal" start="1">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.2]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.2]">{`Suspendisse varius enim in eros elementum tristique. `}</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.2]">{`Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. `}</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">Numbered List</p>
      </div>
    </div>
  );
}

function BulletList() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Gambetta:Regular',sans-serif] gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[4425px]" data-name="Bullet List">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-[770px]">
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.2]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[1.2]">{`Suspendisse varius enim in eros elementum tristique. `}</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[1.2]">{`Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. `}</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">Bullet List</p>
      </div>
    </div>
  );
}

function Lines() {
  return (
    <div className="absolute h-[341px] left-0 top-[4380px] w-[812px]" data-name="Lines">
      <div className="absolute bottom-[-0.29%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 812 342">
          <g id="Lines">
            <line id="Line 346" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="0.5" y2="0.5" />
            <line id="Line 347" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="341.5" y2="341.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Lists() {
  return (
    <div className="absolute contents left-0 top-[4380px]" data-name="Lists">
      <NumberedList />
      <BulletList />
      <Lines />
    </div>
  );
}

function FooterLink() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[4270px]" data-name="Footer Link">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[14px] uppercase w-[770px]">
        <p className="leading-[normal]">footer link</p>
      </div>
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Footer Link -  14`}</p>
      </div>
    </div>
  );
}

function SecondaryLink() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[4161px]" data-name="Secondary Link">
      <div className="flex flex-col font-['Gambetta:Medium',sans-serif] justify-center relative shrink-0 text-[18px] uppercase w-[770px]">
        <p className="leading-none">secondary link</p>
      </div>
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Link 2 -  18`}</p>
      </div>
    </div>
  );
}

function DefaultLink() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[4046px]" data-name="Default Link">
      <div className="flex flex-col font-['General_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[18px] uppercase w-[770px]">
        <p className="leading-[normal]">default link</p>
      </div>
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Link 1 -  18`}</p>
      </div>
    </div>
  );
}

function MenuLink() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu Link">
      <div className="flex flex-col font-['Gambetta:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[56px] text-nowrap uppercase">
        <p className="leading-none whitespace-pre">menu link</p>
      </div>
    </div>
  );
}

function MenuLink1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-[3899px]" data-name="Menu Link">
      <MenuLink />
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">Menu link - 56/100</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="absolute contents left-0 top-[3899px]" data-name="Links">
      <FooterLink />
      <SecondaryLink />
      <DefaultLink />
      <MenuLink1 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[3486px]" data-name="Label 1">
      <div className="flex flex-col font-['Gambetta:Medium',sans-serif] justify-center relative shrink-0 text-[16px] uppercase w-[770px]">
        <p className="leading-none">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Label -  16/100`}</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[3593px]" data-name="Label 3">
      <div className="flex flex-col font-['General_Sans:Regular',sans-serif] justify-center relative shrink-0 text-[14px] uppercase w-[770px]">
        <p className="leading-none">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Label small -  14/100`}</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[3366px]" data-name="Label 2">
      <div className="flex flex-col font-['Gambetta:Semibold',sans-serif] justify-center relative shrink-0 text-[24px] uppercase w-[770px]">
        <p className="leading-[1.2]">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Label large -  24/120`}</p>
      </div>
    </div>
  );
}

function Quote() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] text-[22px] top-[3743px]" data-name="Quote">
      <div className="flex flex-col font-['Gambetta:Semibold',sans-serif] justify-center relative shrink-0 uppercase w-[770px]">
        <p className="leading-[1.2]">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex flex-col font-['Gambetta:Regular',sans-serif] justify-center relative shrink-0 text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Quote  -  22/120`}</p>
      </div>
    </div>
  );
}

function Lines1() {
  return (
    <div className="absolute h-[533px] left-0 top-[3321px] w-[812px]" data-name="Lines">
      <div className="absolute bottom-[-0.19%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 812 534">
          <g id="Lines">
            <line id="Line 343" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="0.5" y2="0.5" />
            <line id="Line 344" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="377.5" y2="377.5" />
            <line id="Line 345" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="533.5" y2="533.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Other() {
  return (
    <div className="absolute contents left-0 top-[3321px]" data-name="Other">
      <Label />
      <Label2 />
      <Label1 />
      <Quote />
      <Lines1 />
    </div>
  );
}

function ParMini() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Gambetta:Regular',sans-serif] gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[3143px]" data-name="Par Mini">
      <div className="flex flex-col justify-center relative shrink-0 text-[14px] w-[770px]">
        <p className="leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Paragraph Mini -  14/100`}</p>
      </div>
    </div>
  );
}

function Par1() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Gambetta:Regular',sans-serif] gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] top-[2950px]" data-name="Par 2">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] w-[770px]">
        <p className="leading-[1.2]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Paragraph 2 -  16/120`}</p>
      </div>
    </div>
  );
}

function Par() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Gambetta:Regular',sans-serif] gap-[20px] items-start leading-[0] left-0 not-italic text-[#858585] text-[22px] top-[2710px]" data-name="Par 1">
      <div className="flex flex-col justify-center relative shrink-0 w-[770px]">
        <p className="leading-[1.2]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[1.2] whitespace-pre">{`Paragraph 1 -  22/120`}</p>
      </div>
    </div>
  );
}

function Paragraphs() {
  return (
    <div className="absolute contents left-0 top-[2710px]" data-name="Paragraphs">
      <ParMini />
      <Par1 />
      <Par />
    </div>
  );
}

function RichH3() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-25px)] not-italic text-[#858585] top-[2500px] translate-x-[-50%]" data-name="Rich H4">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[24px] top-[2514.5px] translate-y-[-50%] uppercase w-[770px]">
        <p className="leading-[1.2]">heading h4 rich text</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] text-nowrap top-[2562px] translate-y-[-50%]">
        <p className="leading-[1.2] whitespace-pre">{`Semibold -  24/100`}</p>
      </div>
    </div>
  );
}

function RichH2() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-25px)] not-italic text-[#858585] top-[2334px] translate-x-[-50%]" data-name="Rich H3">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[30px] top-[2349px] translate-y-[-50%] uppercase w-[770px]">
        <p className="leading-none">heading h3 rich text</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] text-nowrap top-[2397px] translate-y-[-50%]">
        <p className="leading-[1.2] whitespace-pre">{`Semibold -  30/100`}</p>
      </div>
    </div>
  );
}

function RichH1() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-25px)] not-italic text-[#858585] top-[2158px] translate-x-[-50%]" data-name="Rich H2">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[40px] top-[2178px] translate-y-[-50%] uppercase w-[770px]">
        <p className="leading-none">heading h2 rich text</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] text-nowrap top-[2231px] translate-y-[-50%]">
        <p className="leading-[1.2] whitespace-pre">{`Semibold -  40/100`}</p>
      </div>
    </div>
  );
}

function RichH() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-25px)] not-italic text-[#858585] top-[1972px] translate-x-[-50%]" data-name="Rich H1">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[50px] top-[1997px] translate-y-[-50%] uppercase w-[770px]">
        <p className="leading-none">heading h1 rich text</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] text-nowrap top-[2055px] translate-y-[-50%]">
        <p className="leading-[1.2] whitespace-pre">{`Semibold -  50/100`}</p>
      </div>
    </div>
  );
}

function Lines2() {
  return (
    <div className="absolute h-[507px] left-[8px] top-[2113px] w-[812px]" data-name="Lines">
      <div className="absolute bottom-[-0.2%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 812 508">
          <g id="Lines">
            <line id="Line 337" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="0.5" y2="0.5" />
            <line id="Line 338" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="176.5" y2="176.5" />
            <line id="Line 339" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="342.5" y2="342.5" />
            <line id="Line 340" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="507.5" y2="507.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function RichText() {
  return (
    <div className="absolute contents left-0 top-[1840px]" data-name="Rich Text">
      <RichH3 />
      <RichH2 />
      <RichH1 />
      <RichH />
      <Lines2 />
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] left-[calc(50%-410px)] not-italic text-[#b6a991] text-[48px] text-nowrap top-[1864px] translate-y-[-50%] uppercase">
        <p className="leading-none whitespace-pre">rich text</p>
      </div>
    </div>
  );
}

function H6Reg() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%+224px)] not-italic text-[#858585] text-nowrap top-[1630px] translate-x-[-50%]" data-name="H6 Reg">
      <div className="absolute flex flex-col font-['General_Sans:Regular',sans-serif] justify-center left-[calc(50%+144px)] text-[16px] top-[1638px] translate-y-[-50%] uppercase">
        <p className="leading-none text-nowrap whitespace-pre">heading h6</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%+144px)] text-[22px] top-[1686px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Regular -  16/100`}</p>
      </div>
    </div>
  );
}

function H6Med() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-44px)] not-italic text-[#858585] text-nowrap top-[1629px] translate-x-[-50%]" data-name="H6 Med">
      <div className="absolute flex flex-col font-['General_Sans:Medium',sans-serif] justify-center left-[calc(50%-128px)] text-[16px] top-[1638.5px] translate-y-[-50%] uppercase">
        <p className="leading-[1.2] text-nowrap whitespace-pre">heading h6</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-128px)] text-[22px] top-[1686px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Medium -  16/100`}</p>
      </div>
    </div>
  );
}

function H6Semi() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-321px)] not-italic text-[#858585] text-nowrap top-[1629px] translate-x-[-50%]" data-name="H6 Semi">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[16px] top-[1638.5px] translate-y-[-50%] uppercase">
        <p className="leading-[1.2] text-nowrap whitespace-pre">heading h6</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-410px)] text-[22px] top-[1686px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Semibold -  16/100`}</p>
      </div>
    </div>
  );
}

function H5Med() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-42px)] not-italic text-[#858585] text-nowrap top-[1466px] translate-x-[-50%]" data-name="H5 Med">
      <div className="absolute flex flex-col font-['General_Sans:Medium',sans-serif] justify-center left-[calc(50%-128px)] text-[20px] top-[1478px] translate-y-[-50%] uppercase">
        <p className="leading-[1.2] text-nowrap whitespace-pre">heading h5</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-128px)] text-[22px] top-[1526px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Medium -  20/100`}</p>
      </div>
    </div>
  );
}

function H5Semi() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-319px)] not-italic text-[#858585] text-nowrap top-[1466px] translate-x-[-50%]" data-name="H5 Semi">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[20px] top-[1478px] translate-y-[-50%] uppercase">
        <p className="leading-[1.2] text-nowrap whitespace-pre">heading h5</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-410px)] text-[22px] top-[1526px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Semibold -  20/100`}</p>
      </div>
    </div>
  );
}

function H4Med() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-318.5px)] not-italic text-[#858585] text-nowrap top-[1300px] translate-x-[-50%]" data-name="H4 Med">
      <div className="absolute flex flex-col font-['General_Sans:Medium',sans-serif] justify-center left-[calc(50%-410px)] text-[30px] top-[1315px] translate-y-[-50%] uppercase">
        <p className="leading-none text-nowrap whitespace-pre">heading h4</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-410px)] text-[22px] top-[1363px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Medium -  30/100`}</p>
      </div>
    </div>
  );
}

function H3Semi() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-260.5px)] not-italic text-[#858585] text-nowrap top-[1116px] translate-x-[-50%]" data-name="H3 Semi">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[48px] top-[1140px] translate-y-[-50%] uppercase">
        <p className="leading-none text-nowrap whitespace-pre">heading h3</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] top-[1197px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Semibold -  48/100`}</p>
      </div>
    </div>
  );
}

function H2Semi() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-198.5px)] not-italic text-[#858585] text-nowrap top-[912px] translate-x-[-50%]" data-name="H2 Semi">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[68px] top-[946px] translate-y-[-50%] uppercase">
        <p className="leading-none text-nowrap whitespace-pre">heading h2</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] top-[1013px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Semibold -  68/100`}</p>
      </div>
    </div>
  );
}

function H1Serif() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-38px)] not-italic text-[#858585] text-nowrap top-[654px] translate-x-[-50%]" data-name="H1 Serif">
      <div className="absolute flex flex-col font-['Playfair_Display:Regular',sans-serif] justify-center left-[calc(50%-410px)] text-[128px] top-[711.5px] translate-y-[-50%] uppercase">
        <p className="leading-[0.9] text-nowrap whitespace-pre">heading h1</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] top-[809px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Serif -  128/100`}</p>
      </div>
    </div>
  );
}

function H1Med() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-37px)] not-italic text-[#858585] text-nowrap top-[448px] translate-x-[-50%]" data-name="H1 Med">
      <div className="absolute flex flex-col font-['General_Sans:Medium',sans-serif] justify-center left-[calc(50%-410px)] text-[128px] top-[505.5px] translate-y-[-50%] uppercase">
        <p className="leading-[0.9] text-nowrap whitespace-pre">heading h1</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] top-[596px] translate-y-[-50%]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">{`Medium -  128/100`}</p>
      </div>
    </div>
  );
}

function H1Semi() {
  return (
    <div className="absolute contents leading-[0] left-[calc(50%-25px)] not-italic text-[#858585] top-[233px] translate-x-[-50%]" data-name="H1 Semi">
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center left-[calc(50%-410px)] text-[128px] top-[297px] translate-y-[-50%] uppercase w-[770px]">
        <p className="leading-none">heading h1</p>
      </div>
      <div className="absolute flex flex-col font-['Gambetta:Regular',sans-serif] justify-center left-[calc(50%-402px)] text-[22px] text-nowrap top-[390px] translate-y-[-50%]">
        <p className="leading-[1.2] whitespace-pre">{`Semibold -  128/100`}</p>
      </div>
    </div>
  );
}

function Lines3() {
  return (
    <div className="absolute h-[883px] left-0 top-[867px] w-[820px]" data-name="Lines">
      <div className="absolute bottom-[-0.11%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 820 884">
          <g id="Lines">
            <line id="Line 331" stroke="var(--stroke-0, #DBE0E6)" x1="820" x2="8" y1="0.5" y2="0.5" />
            <line id="Line 332" stroke="var(--stroke-0, #DBE0E6)" x1="820" x2="8" y1="204.5" y2="204.5" />
            <line id="Line 333" stroke="var(--stroke-0, #DBE0E6)" x1="820" x2="8" y1="388.5" y2="388.5" />
            <line id="Line 334" stroke="var(--stroke-0, #DBE0E6)" x1="820" x2="8" y1="554.5" y2="554.5" />
            <line id="Line 335" stroke="var(--stroke-0, #DBE0E6)" x1="820" x2="8" y1="717.5" y2="717.5" />
            <line id="Line 336" stroke="var(--stroke-0, #DBE0E6)" x1="812" y1="883.5" y2="883.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Headings() {
  return (
    <div className="absolute contents left-0 top-[158px]" data-name="Headings">
      <H6Reg />
      <H6Med />
      <H6Semi />
      <H5Med />
      <H5Semi />
      <H4Med />
      <H3Semi />
      <H2Semi />
      <H1Serif />
      <H1Med />
      <H1Semi />
      <Lines3 />
      <div className="absolute flex flex-col font-['General_Sans:Medium',sans-serif] justify-center leading-[0] left-[45px] not-italic text-[#5a5a5a] text-[30px] text-nowrap top-[173px] translate-y-[-50%] uppercase">
        <p className="leading-none whitespace-pre">headings</p>
      </div>
    </div>
  );
}

export default function Typography() {
  return (
    <div className="relative size-full" data-name="Typography">
      <Lists />
      <Links />
      <Other />
      <Paragraphs />
      <RichText />
      <Headings />
      <div className="absolute flex flex-col font-['General_Sans:Semibold',sans-serif] justify-center leading-[0] left-[calc(50%-410px)] not-italic text-[#938262] text-[68px] text-nowrap top-[34px] translate-y-[-50%] uppercase">
        <p className="leading-none whitespace-pre">typography</p>
      </div>
    </div>
  );
}